from django.urls import path
from robowarsbet import views

urlpatterns = [
    path('matches/',views.MatchList.as_view()),
    path('user/',views.UserProfile.as_view()),
    path('select-team/<int:match_id>/', views.SelectTeam.as_view(), name='select-team'),
    path('export-csv/',views.export_users_to_csv, name = 'export winners'),
     path('has_user_made_bet/<str:user_email>/<int:match_id>/', views.HasUserMadeBet.as_view(), name='has_user_made_bet'),
]
