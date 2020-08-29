from rest_framework import routers
from .views import *

app_name = 'todo'

router = routers.DefaultRouter()

router.register(r'todo_api', TodoUI)


urlpatterns = router.urls
