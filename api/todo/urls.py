from rest_framework import routers
from .views import *

app_name = 'todo'

router = routers.DefaultRouter()

router.register(r'todo_api', TodoUI)
router.register(r'bucket_api', BucketList)


urlpatterns = router.urls
