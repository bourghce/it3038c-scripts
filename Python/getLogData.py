#!/usr/bin/env python3

# read file from the file system

# import modules
import os

filename = "/home/bourghce/test.txt"

with open(filename) as f:
    lines = f.readlines()
    for line in lines: 
        if "world" in line:
            print(line)

