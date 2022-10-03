#!/usr/bin/env python3.9

#This script is going to take inputs from the users and return them in the shell.

import time
start_time = time.time()

print('What is your name?')
myName = input()
print('Hello, ' + myName + '. That is a good name. How old are you?')
myAge = int(input())
programAge = int(time.time() - start_time)
print('%s? That\'s funny, I\'m only %s seconds old.' % (myAge, programAge))

print('I wish I was %s years old' % (myAge *2))

time.sleep(3)
print('I\'m tired. I go sleep sleep now.')

