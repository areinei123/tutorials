#!/bin/bash
echo $1 $2 $3 ' -> echo $1 $2 $3'

#We can also store agruments from bash command line in a special array
args=("$@")
#echo arguments to the shell
echo ${args[0]} ${args[1]} ${args[2]} ' -> args={"$@"}; echo ${args[0]} ${args[1]} ${args[2]}'

#use $@ to print out all arguments at once
echo $@ ' -> echo $@'
#use $@ to print out
#number of arguments passed to the bash script
echo Number of arguments passed: $# ' -> echo Number of arguments passed: $#'
