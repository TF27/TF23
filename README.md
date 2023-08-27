# TF23

A React + Django web-app


nginx conf

***---for django only---***
server {
    listen 80;
    server_name 54.164.215.16;

    location = /favicon.ico { access_log off; log_not_found off; }
    location /static/ {
        root /home/ubuntu/TF23/backend;
    }

    location / {
        include proxy_params;
        proxy_pass http://unix:/home/ubuntu/TF23/backend/backend.sock;
    }
}


***---for django+react(no gunicorn)---***
server{
        listen 80;
        server_name ca23demon.techfest.org;
        index index.html;

        root /home/varungupta_techfest/ca23/frontend/build;

location /static/ {
    alias /home/varungupta_techfest/ca23/frontend/build/static/;
}

        location / {
                try_files $uri$args $uri$args/ /index.html;
        }
        location ~^/(admin|api|api-home|api-auth|media) {
                proxy_set_header X-Forwarded-For $remote_addr;
                proxy_set_header Host $http_host;
                proxy_pass       "http://127.0.0.1:8000";
        }
}

***---for django+react---***
server{
        listen 80;
        server_name 54.164.215.16;
        index index.html;

        root /home/ubuntu/TF23/frontend/build;

        location /{
                try_files $uri$args $uri$args/ /index.html;
        }

        location /static/{
                alias /home/ubuntu/TF23/frontend/build/static/;
        }

        {/* location ~^/(apo){
                root /home/ubuntu/TF23/backend/apo;
                proxy_pass http://unix:/home/ubuntu/TF23/backend/backend.sock;
                autoindex on;
        } */}


        location ~^/(admin|api|api-home|api-auth|media|static|administrator|apo){
                include proxy_params;
                proxy_pass http://unix:/home/ubuntu/TF23/backend/backend.sock;
        }
}

