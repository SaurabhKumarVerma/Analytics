# Generated by Django 3.2 on 2021-05-02 12:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_contact_first_name'),
    ]

    operations = [
        migrations.RenameField(
            model_name='contact',
            old_name='contacted_date',
            new_name='date',
        ),
    ]
