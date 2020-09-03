#!/bin/bash

cd api && docker build -t backend:latest .
echo "Backend Image is Created"
cd ../reacttodo && docker build -t frontend:latest .
echo "Frontend Image is Created"
cd ../ && docker-compose up -d

exit

