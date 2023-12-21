from .models import *
from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.
def user_data_list(request):
    user_data_list = UserData.objects.all()
    return render(request, 'user_data_list.html', {'user_data_list': user_data_list})

def get_rooms_for_payment(request, payment_id):
    try:
        user_data = UserData.objects.get(payment_id=payment_id)
        rooms = PaymentRoomRelation.objects.filter(user_data=user_data)

        room_data_list = []
        for room_relation in rooms:
            room_data_list.append({
                'room_number': room_relation.room_number,
                'hostel': room_relation.room_data.hostel,
            })

        return JsonResponse(room_data_list, safe=False)

    except UserData.DoesNotExist:
        return JsonResponse({'error': 'User not found'}, status=404)