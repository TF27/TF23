from django.urls import path
from robowarsbet import views

urlpatterns = [
    path('matches/',views.MatchList.as_view()),
    path('user/',views.UserProfile.as_view()),
    path('select-team/<int:match_id>/', views.SelectTeam.as_view(), name='select-team'),

    path('export-csv/2/',views.export_ift_to_csv, name = 'export winners'),
    path('export-csv/1/',views.export_robowars_to_csv, name = 'export winners'),
    path('export-csv/3/',views.export_drone_to_csv, name = 'export winners'),

    path('has_user_made_bet/<str:user_email>/<int:match_id>/', views.HasUserMadeBet.as_view(), name='has_user_made_bet'),

    path('update-matches/<int:match_id>/', views.update_match, name='update_match'),
    path('delete-matches/<int:match_id>/', views.delete_match, name='delete_match'),
    path('add-matches/', views.add_match, name='add_match'),
]
