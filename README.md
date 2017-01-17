# Node Site With Twitter-API #

A Node.js website that utilizes the Twitter API to search between twitter messages based on user-given keywords.
It can also display the top searched keywords.

## Start the app ##

    npm install
    node main

**Note**: You will need **your own Twitter API credentials** to use this app. These should never be committed to source control,
you should store them as environment variables:

* Create a *.env* file in the root of the application. You can base it on the sample *.env.example* file.
* Always make sure to import the *dotenv* package (already installed) first(!) in your *main.js*:     `require('dotenv').config();`

## Packages used: ##
* express // framework for Node.js
* ejs, express-ejs-layouts // 
* loki // lightweight in-memory database
* dotenv // loads environment variables from a .env file into process.env 
* twitter // client library for the Twitter REST and Streaming API's