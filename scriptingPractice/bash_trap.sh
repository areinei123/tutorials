#!/bin/bash
#bash trap!
trap bashtrap INT
#bash clear screen command
clear;
#trap function is executed when CTRL-C is pressed:
#bash prints a message => executing bash trap subroutine!
bashtrap()
{
  echo "CTRL-C Detected!...executing bash trap!"
}
#for loop from 1/10 to 10/10
for a in 'seq 1 10'; do
  echo "$a/10 to Exit"