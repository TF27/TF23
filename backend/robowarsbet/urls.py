from django.urls import path
from robowarsbet import views

urlpatterns = [
    path('matches/',views.MatchList.as_view()),
    path('user/',views.UserProfile.as_view()),
    path('select-team/<int:match_id>/', views.SelectTeam.as_view(), name='select-team'),

    path('export-ift-csv/',views.export_ift_to_csv, name = 'export winners'),
    path('export-robowars-csv/',views.export_robowars_to_csv, name = 'export winners'),
    path('export-drone-csv/',views.export_drone_to_csv, name = 'export winners'),

    path('has_user_made_bet/<str:user_email>/<int:match_id>/', views.HasUserMadeBet.as_view(), name='has_user_made_bet'),
]
