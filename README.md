# react-todoapi

# How to use Todo-Api'

####Without Docker
                
+ clone master and cd to root
+ create a virtualenv ($ virtualenv test)
    + pip3 -r install requirement.txt
    + python3 manage.py makemigrations
    + python3 manage.py migrate
    + python3 manage.py runserver

####With Docker
                
+ clone master and cd to root
    + docker build -t backend:latest .
    + docker run -d -p 8000:80 backend:latest

###### After that you can Add API url in frontend client
