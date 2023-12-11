from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.staticfiles.views import serve
from django.http import HttpResponseRedirect

def custom_404(request, exception):
    return HttpResponseRedirect('https://techfest.org')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('apis.urls')),
    path('administrator/',include('admins.urls'), name="administrator"),
    path('', include('events.urls')),
    path('masser/', include('mass_mailer.urls')),
    path('certificate/', include('certificate.urls')),
    # path('ticket/', include('tickets.urls'))
    # path("administrator/", include("administrator.urls")),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns+= static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

urlpatterns += [
    path("apo/<path:path>", serve),
    path("media/<path:path>", serve),
]

handler404 = custom_404