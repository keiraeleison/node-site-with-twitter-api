// Start with
    // nodemon main --ignore db.json --> use while developing at the very beginning to evade an infinite loop
    node main




// Install Express.js
    npm install express --save

// Install Loki.js
    npm install lokijs --save   

// You will need Twitter API credentials to use this app.
// These should never be committed to source control,
// you should store them as environment variables:
// create a .env file in the root of the application
// Install dotenv
    npminstall dotenv --save
// Import it first in your main.js: 
    require('dotenv').config();

// Install Twitter
    npm install twitter --save

// Install EJS
    npm install ejs --save
    npm install express-ejs-layouts --save
