# Generated by Django 4.0.3 on 2022-03-17 21:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('comments', '0001_initial'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Reply',
        ),
    ]
