#!/usr/bin/env python3

#import modules
import socket

#define array of hostnames
hosts = ['www.uc.edu', 'www.google.com', 'www.bing.com']

print ('Working from host: ' + socket.getfqdn())

# iterate through list w/ FOR loop
for h in hosts:
    print(socket.gethostbyname(h))

