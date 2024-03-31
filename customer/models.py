from django.db import models
from django.contrib.auth.models import User
from django.core.validators import FileExtensionValidator
from django.dispatch import receiver
from django.db.models.signals import post_save



class Customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    avatar = models.ImageField(default='avatars/avatar.png', upload_to='avatars',validators=[
                              FileExtensionValidator(['png', 'jpg', 'jpeg', 'gif'])])

    class Meta:
        ordering= ["-id"]

    def __str__(self):
        return f"profile-{self.user.username}"
    

@receiver(post_save, sender=User)
def post_save_create_profile(sender, instance, created, *args, **kwargs):
    if created:
        Customer.objects.create(user=instance)



class CustomerReview(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    body = models.TextField(null=False, blank=False)

    class Meta:
        ordering = ['-id']

    def __str__(self):
        return str(self.body[:40])