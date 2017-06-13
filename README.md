# The challenge
We want to see how you would approach building a simple web application that is capable of searching a list of Dare West employees by name and displaying the results. The requirements are as follows:
* As an end user, I can search Dare West employees by name via a simple form and see a list of results.
* Each result will display a user's avatar, name and job role.
* I will be able to view and interact with the UI regardless of the viewport size of the device I am using.

Please focus on writing well-documented code that efficiently solves this problem. We would rather you submitted a subset of features with reasoning for your work than a rushed, compromised version of the entire app.

## Setup
Fork this repo and the rest is up to you! We’re not gonna tell you what stack to choose, we’re interested to see how you work. Pick the tools you feel are most appropriate for the job and get coding 💃.

## Assets
You can find mobile and desktop layouts for this application on [invision](https://projects.invisionapp.com/boards/9K38E7GH5DTYG/). Any other assets can be provided on request. Please use the Google Font [Arvo](https://fonts.google.com/specimen/Arvo).

## API
Your shiny new app won’t be very happy without any data so we’ve built a simple API to help. `http://darewestapi.azurewebsites.net/api/staff/search` will return a json object of our friendly staff. This endpoint will accept a `name` search parameter.
