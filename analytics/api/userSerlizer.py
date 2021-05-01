# from rest_framework import serializers
# from django.contrib.auth.models import User
#
# class UserSerliazer(serializers.ModelSerializer):
#
#
#     email = serializers.EmailField(required=True)
#     first_name = serializers.CharField(required=True)
#     password = serializers.CharField(min_length=8, write_only=True)
#
#     class Meta:
#         model = User
#         fields = ('email','first_name','password')
#         extra_kwargs = {'password': {'write_only': True}}
#
#         def create(self, validated_data):
#             password = validated_data.pop('password', None)
#             # as long as the fields are the same, we can just use this
#             instance = self.Meta.model(**validated_data)
#             if password is not None:
#                 instance.set_password(password)
#             instance.save()
#             return instance
#
#         def validate(self, attrs):
#             email = attrs.get('email','')
#             if User.objects.filter(email=email).exists():
#                 raise serializers.ValidationError(
#                     {'email':'email is Already used'}
#                 )
#             return attrs