# Project Overview

This project has a web-based application that reads RSS feeds. Which has test based on "Jasmine"(http://jasmine.github.io/).

There are 7 test within 4 suits.

1- Suite "RSS Feeds" has the tests: are defined, all feeds have an url, all feeds have a name.

2- Suite "The menu" has the tests: "the menu shoud be hidden by default","changes visibility when the menu icon is clicked". 

3- Suite "Intial Entries" has the test "There is at least one .entry in the .feed container after LoadFeed function runs".

4- Suite "New feed Selection" has the test "The content changes when new feed loads".


# What those test do?


 1- Make sure that the allFeeds variable has been defined and that it is not empty.

 2- Loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.

 3- Loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.

 4- Ensures the menu element is hidden by default. 

 5- Ensures the menu changes visibility when the menu icon is clicked. This test have two expectations: the menu display when clicked and it hide when clicked again.

 6- Ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.

 -7 Ensures when a new feed is loaded by the loadFeed function that the content actually changes.

# How to Start the app:

-Open the index.html file using your web browser.
-Thats it.

Jasmine test result will be at the bottom of the page.


=
Requirements:

-Your web browse must allow and support javascript.
-In order to load feeds you must have internet access.

