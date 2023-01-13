/* manually import or require in the node js path package. for step 2 */
const path = require("path"); /*for step 2 this is part of node library, it make sure no matter os you're on, it will generate an absolute path to the correct folder.*/

/* read this first: 

in this file we will tell webpack what to do */
/* how to use and leverage webpack package: we use webpack.config.js 
- webpack will know how to look for a file with this exact name
*/

/* step 1: we creating an javascript object and give it different properties to tell webpack what to do 
- starting out with entry property, where we type of path that points towards our javascript file that we want to bundle.
- then, how to tell webpack to use App.js
  -using module.exports so that when webpack loads webpack.config.js file, it knows that this is a JS object
  we just created, is what should be exported and used.
  -jump into package.json and add different npm scripts ("dev": "webpack") to scripts property because we do not want to install webpack globally on our computer
  -run command: npm run dev, it will create a brand new folder name 'dist' with the file main.js. It means webpack looked at our app.js file and process, bundle it and create main.js file.

  -What if we don't want the new generated file to be named main.js, what if we want to control what it's named?
  -what if we don't want it to go into this dist folder?
  -what if we just wanted the newly generated or bundled file to live within our app folder?
*/

/* Step 2: using output property to change name and location of bundled file live after running npm run dev.
   Step 3: setup the mode to development
   Step 4: jump to index.html to import bundled.js to index.html
   Step 5: set the watch property to true so webpack still stay running and it will watch, and detect a change to our source file which is our entry file App.js
*/

/* after step 5, every time we save a changed to App.js file, we have webpack watch, process, and bundle App.js for us, so we can build our project, add complexity, and new feature */

module.exports = {
  /* step 1: starting out with entry property, where we type of path that points towards our javascript file that we want to bundle.
    - So we are saying the entry point to our JavaScript Application or the file that we want webpack to watch, process, and bundle lives at this path.
  */
  entry: "./app/assets/scripts/App.js",
  /* step 2: using output property to create a js object */
  output: {
    filename: "bundled.js" /*this is where we control what the bundled file should be named  */,
    path: path.resolve(__dirname, "app") /* this is where the newly bundled.js file is placed 
    and the syntax is different because webpack requires an absolute path for the output.
    In order for this code to work, we do need to manually import or require in the node js path package.
    */
  },
  /* step 3 */
  mode: "development",
  /* step 5 */
  watch: true
};
