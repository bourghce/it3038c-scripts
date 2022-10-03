#!/usr/bin/env python3

# Program that generates a random #
  # User must guess the #
  # Program output hint if # is too high / low until # is correct

#import modules
from random import randrange

# Introduce to user + request 1st guess
print ('This program has generated a random number from 1-200. \n What do you think the random number is?')

# Generate a random integer 1-200
randomNumber = randrange(1,200)

# User input 1st guess
guessNumber = int(input())

# While with nested IF
while guessNumber != randomNumber:
    if guessNumber < 1 or guessNumber > 200:
        print('Your guess is out of range. \n Please try guess again. It is between 1 and 200 (inclusively).\n')
    elif guessNumber < randomNumber:
        print('That guess is too low!\n')
    elif guessNumber > randomNumber:
        print('That guess is too high!\n')
    # Prompt User to enter another number to guess
    print('What number would you like to guess next?')
    # User inputs another number to guess
    guessNumber = int(input())

# Print message once the user has guessed the correct number.
print ('Awesome! You are correct, the random number is %s.' % randomNumber)



