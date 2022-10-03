#!/usr/bin/env python3

#import modules
import socket, sys

# create function
def getHostnameByIP(h):

    # Try / Except statement to catch any potential erros
    try:
        # pass sys.argv[1] b/c [0] is name of python script we ran
        # [1] is the first argument
        hostname = str(sys.argv[1])
        ip = socket.gethostbyname(hostname)
        print (hostname + ' has an IP of ' + ip)

    except:
        print("Oops, something is wrong with that host.")

# call function
getHostnameByIP(sys.argv[1])

