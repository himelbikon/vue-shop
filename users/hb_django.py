import jwt
import datetime
from django.conf import settings
from rest_framework.authentication import BaseAuthentication
from rest_framework.exceptions import AuthenticationFailed
from django.contrib.auth.models import User


class JWTAuthentication(BaseAuthentication):
    def authenticate(self, request):
        token = request.COOKIES.get('jwt')
        if not token:
            return None

        try:
            payload = jwt.decode(
                token, settings.SECRET_KEY, algorithms=['HS256'])
        except Exception as e:
            printer('Can not Authenticate:', e)
            raise AuthenticationFailed('unauthenticated!')

        user = User.objects.get(pk=payload['user_id'])
        return (user, None)


def generate_jwt(id):
    payload = {
        'user_id': id,
        'exp': datetime.datetime.utcnow() + datetime.timedelta(days=1),
        'iat': datetime.datetime.utcnow()
    }

    return jwt.encode(payload, settings.SECRET_KEY, algorithm='HS256')


def printer(x):
    x = str(x)
    sep = '----------------'
    print(sep)
    print(x)
    print(sep)
