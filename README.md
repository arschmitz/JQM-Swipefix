# This project is officially discontinued as the issue is fixed in jquery mobile 1.4 so this is no longer needed

JQM-Swipefix
============

a small script to fix the jQuery mobile swipe events to work properly and respect the vertical threshold during scroll 

simply include swipefix.js right after jQuery Mobile script and before you do any event bindings.

This script adds scrollTop tracking to the swipe event for accurate vertical distance.

This can also be used as a template for other extensions to the swipe event. 

Example: by modifiying handleSwipe and adding another if statement you could easily add swipeup and swipe down events. 
