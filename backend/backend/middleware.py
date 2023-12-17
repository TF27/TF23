# middleware.py
from django.shortcuts import redirect

class RedirectToTechfestMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)

        # If the response has a 404 status code, redirect to "techfest.org"
        if response.status_code == 404:
            return redirect('https://techfest.org/workshops/')

        return response
