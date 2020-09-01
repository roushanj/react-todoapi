FROM ubuntu:18.04
# Update the default application repository sources list
RUN apt-get update 
RUN apt-get install -y python python3-pip
RUN apt-get install -y python3-dev
RUN apt-get install -y libmysqlclient-dev
RUN apt-get install -y nginx
# Create application subdirectories
COPY . /usr/src/app

WORKDIR /usr/src/app/
RUN mkdir static logs
# Install Python dependencies
RUN pip3 install -r ./requirements.txt
# Port to expose
EXPOSE 8080
# Making executable file
RUN chmod +x /usr/src/app/entrypoint.sh
# Copy entrypoint script into the image
COPY ./nginx.conf /etc/nginx/sites-available/
RUN ln -s /etc/nginx/sites-available/nginx.conf /etc/nginx/sites-enabled
RUN echo "daemon off;" >> /etc/nginx/nginx.conf
ENTRYPOINT ["./entrypoint.sh"]
