from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Match, User, UserMatch
from .serializers import MatchSerializer, UserSerializer
import csv
from django.http import HttpResponse

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
            selected_team = request.data.get('selected_team')
            user_email = request.data.get('user_email')
            user, created = User.objects.get_or_create(email=user_email)

            if created:
                user.save()

            user_match = UserMatch(user=user, match=match, selected_team=selected_team)
            user_match.save()

            if match.winner is not None and selected_team == match.winner: 
                user.total_points += match.points_awarded
                user.save()

            return Response({'message': 'Team selected successfully'}, status=status.HTTP_201_CREATED)

        except Match.DoesNotExist:
            return Response({'error': 'Match not found'}, status=status.HTTP_404_NOT_FOUND)
        

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
