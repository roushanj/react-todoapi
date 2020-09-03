FROM ubuntu:18.04

WORKDIR /app
RUN apt-get update 
RUN apt-get install -y python python3-pip
RUN apt-get install -y python3-dev
RUN apt-get install -y libmysqlclient-dev
RUN apt-get install -y nginx
COPY . /app
COPY requirements.txt .
RUN pip3 install -r requirements.txt
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "--workers", "3", "api.wsgi:application"]