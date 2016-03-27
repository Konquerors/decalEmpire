#!/bin/bash

root="html"

#check if root directory exist
if [ -d $root ]
then
    echo "Directory $root already exists!"
    echo "Converting to html..."
    cp -R assets bower_components html
    jade --pretty *.jade --out html
    
    echo "Successfully converted files to html!"
else
    echo "Creating $root directory..."
    echo "Converting to html..."
    mkdir html
    cp -R assets bower_components html
    jade --pretty *.jade --out html
    
    echo "Successfully converted files to html!"
fi