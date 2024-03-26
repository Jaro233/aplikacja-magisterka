#!/bin/bash

currentSlot=`(helm get values --all yourReleaseName | grep -Po '  productionSlot: \K.*')`
if [ "$currentSlot" == "blue" ]; then
    newSlot="green"
else
    newSlot="blue"
fi