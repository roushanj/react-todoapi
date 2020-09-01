#!/bin/bash
#python3 manage.py migrate        # Apply database migrations
python3 manage.py collectstatic --clear --noinput # clearstatic files
python3 manage.py collectstatic --noinput  # collect static files
echo Starting nginx
# Start Gunicorn processes
echo Starting Gunicorn.
exec gunicorn api.wsgi:application \
    --name api \
    --bind unix:api.sock \
    --workers 3 &
exec service nginx start
