from django.db import models

class Medication(models.Model):
    name = models.CharField(max_length=100)  # Name of the medication
    dosage = models.CharField(max_length=50)  # Dosage information (e.g., 500mg)
    frequency = models.CharField(max_length=50)  # How often the medication is taken (e.g., once a day)
    start_date = models.DateField()  # When the medication regimen starts
    end_date = models.DateField()  # When the medication regimen ends (optional)
    user_age = models.IntegerField()  # Age of the user
    user_gender = models.CharField(max_length=10)  # Gender of the user
    symptoms = models.TextField(blank=True)  # Symptoms for which the medication is prescribed (optional)

    # String representation for the model
    def __str__(self):
        return self.name
