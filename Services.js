/**
  * ## services
  * provide plugged in functions from other rf-api-* modules
  */


var log = require('rf-log');

module.exports = {
   // public var that holds all registred services
   Services: {},


   /** ### Register functions
    * Example: register functions from other server modules
    * ```js
    * var Services = API.Services.Services;
    * function createPdf(url, callback){
    *   createdPdfDoc(url, function(err, pdf){
    *       // callback always has the parameters mongoose like: err, docs
    *       callback(err, pdf)
    *   })
    * }
    * Services.register(createPdf)
    * ```
    */
   registerFunction: function (newFunction) {
      var self = this;
      var newFunctionName = newFunction.name;
      if (!self.Services[newFunctionName]) {
         self.Services[newFunctionName] = newFunction;
      } else {
         log.critical('tried to register function ' + newFunctionName + ' in API, it but already exists.');
      }
   }
};



/**
*
* ## Development
*
* Install the dev tools with
> npm install
*
* Then you can runs some test cases and eslint with:
*> npm test
*
* Generate Docs:
* > npm run-script doc
*
* ## To Do
* * testing
* ## Legal Issues
* * License: MIT
* * Author: Rapidfacture GmbH
*/
