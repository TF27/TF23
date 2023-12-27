from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Match, User, UserMatch
from .serializers import MatchSerializer, UserSerializer
import csv
import json
import base64
from django.core.files.base import ContentFile
from django.http import HttpResponse
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST

class MatchList(APIView):
    def get(self, request):
        matches = Match.objects.all()
        serializer = MatchSerializer(matches, many=True)
        return Response(serializer.data)

class UserProfile(APIView):
    def post(self, request):
        email = request.data.get('user_email')
        name = request.data.get('name')
        id = request.data.get('id')

        if email is None:
            return Response({'error': 'Email not provided'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            user = User.objects.get(email=email)

            # Update the name if provided
            if name is not None:
                user.name = name
                user.save()

            # Calculate and update total_points
            user_matches = UserMatch.objects.filter(user=user,match__type=id)
            total_points = 0
            for user_match in user_matches:
                match = user_match.match

                # Assuming you have logic to determine the match winner
                if match.winner is not None and str(user_match.selected_team) == match.winner:
                    total_points += match.points_awarded

            # Update the user's total points
            total_points_field_name = f'total_points_{id}'  # Assuming id is a number
            setattr(user, total_points_field_name, total_points)
            user.save()

            # Serialize and return user data
            serializer = UserSerializer(user)
            return Response(serializer.data)
        except User.DoesNotExist:
            # User not found, return a response with total_points set to '0'
            return Response({'total_points_1': '0','total_points_2': '0','total_points_3': '0'})


class SelectTeam(APIView):
    def post(self, request, match_id):
        try:
            match = Match.objects.get(pk=match_id)

            # Check if the match status is "Betting-On" before proceeding
            if match.status == 'Betting-On':
                selected_team = request.data.get('selected_team')
                user_email = request.data.get('user_email')
                user, created = User.objects.get_or_create(email=user_email)

                if created:
                    user.save()

                user_match = UserMatch(user=user, match=match, selected_team=selected_team)
                user_match.save()

                return Response({'message': 'Team selected successfully'}, status=status.HTTP_201_CREATED)
            else:
                return Response({'error': 'Betting is not allowed for this match'}, status=status.HTTP_400_BAD_REQUEST)

        except Match.DoesNotExist:
            return Response({'error': 'Match not found'}, status=status.HTTP_404_NOT_FOUND)

@csrf_exempt
@require_http_methods(["PUT"])
def update_match(request, match_id):
    try:
        match = Match.objects.get(pk=match_id)
    except Match.DoesNotExist:
        return JsonResponse({"error": "Match not found"}, status=404)

    data = json.loads(request.body.decode('utf-8'))
    
    # Update the match fields based on the data received
    if 'winner' in data:
        match.winner = int(data['winner'])
    if 'status' in data:
        match.status = data['status']

    match.save()

    return JsonResponse({"message": "Match updated successfully"}, status=200)

@csrf_exempt
@require_http_methods(["DELETE"])
def delete_match(request, match_id):
    try:
        match = Match.objects.get(pk=match_id)
    except Match.DoesNotExist:
        return JsonResponse({"error": "Match not found"}, status=404)

    match.delete()

    return JsonResponse({"message": "Match deleted successfully"}, status=200)

@csrf_exempt
@require_POST
def add_match(request):
    try:
        data = json.loads(request.body.decode('utf-8'))
        teams_data = data.get('teams', [])

        # Create a new match
        new_match = Match.objects.create(
            type=data.get('type'),
            status=data.get('status'),
            day=int(data.get('day')),
            winner=data.get('winner'),
            match_time=data.get('match_time'),
            points_awarded=data.get('points_awarded'),
        )

        # Iterate through teams_data and set team names and images
        for i, team_data in enumerate(teams_data):
            team_name_key = f'team{i + 1}_name'
            team_image_key = f'team{i + 1}_image'

            setattr(new_match, team_name_key, team_data.get('name', ''))

            # Handle image data if present
            team_image_data = team_data.get('image')
            if team_image_data:
                team_image_content = base64.b64decode(team_image_data)
                team_image_file = ContentFile(team_image_content, name=f'team_{i + 1}_image.jpg')
                setattr(new_match, team_image_key, team_image_file)

        new_match.save()  # Save the match with teams to the database
        return JsonResponse({'message': 'Match added successfully'}, status=201)
    except Exception as e:
        print(e)
        return JsonResponse({'error': f'Error adding match: {str(e)}'}, status=500)
    
    
class HasUserMadeBet(APIView):
    def get(self, request, user_email, match_id):
        try:
            user = User.objects.get(email=user_email)
            match = Match.objects.get(pk=match_id)

            # Check if the user has made a bet on this match
            user_has_bet = UserMatch.objects.filter(user=user, match=match).exists()

            return Response({'user_has_bet': user_has_bet}, status=status.HTTP_200_OK)

        except User.DoesNotExist:
            return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
        except Match.DoesNotExist:
            return Response({'error': 'Match not found'}, status=status.HTTP_404_NOT_FOUND)


def export_robowars_to_csv(request):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="user_data.csv"'

    writer = csv.writer(response)
    writer.writerow(['Name', 'Email', 'Total Points'])

    users = User.objects.order_by('total_points_1')  

    for user in users:
        writer.writerow([user.name, user.email, user.total_points_1])

    return response

def export_ift_to_csv(request):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="user_data.csv"'

    writer = csv.writer(response)
    writer.writerow(['Name', 'Email', 'Total Points'])

    users = User.objects.order_by('total_points_2')  

    for user in users:
        writer.writerow([user.name, user.email, user.total_points_2])

    return response

def export_drone_to_csv(request):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="user_data.csv"'

    writer = csv.writer(response)
    writer.writerow(['Name', 'Email', 'Total Points'])

    users = User.objects.order_by('total_points_3')  

    for user in users:
        writer.writerow([user.name, user.email, user.total_points_3])

    return response
