
//We override Node.js promise object to be BlueBird's promise object
var Promise = require('bluebird');

//we then change all these modules and their methods to be able to provide promises
var fsP = Promise.promisifyAll(require('fs'))
var requestP = Promise.promisifyAll(require('request'))
var cheerio = require('cheerio')


// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

var filename = 'nyArticle.html'
var url1 = 'https://www.nytimes.com/2017/03/26/us/politics/trump-republicans-tax-cuts.html?hp&action=click&pgtype=Homepage&clickSource=story-heading&module=first-column-region&region=top-news&WT.nav=top-news&mtrref=www.nytimes.com&gwh=B4E4E74CFCF7718A60460842BD1519AF&gwt=pay'

//rl.question('Paste URL here : ', function(url){
  function saveWebPage(url){
    return requestP.getAsync({ url: url, jar: true })
              .then(function(html){
                return html;
              });
  }
  saveWebPage(url1)
              .then(function(html){
                var $ = cheerio.load(html);
                //console.log(html)
                console.log($('#headline'))
                //console.log($('h2.title').text())


              })
              .then(function(){
                console.log('Success');
              })
             .catch(function(err){
                console.log(err.message)
              });
//   rl.close()h1.headline
// })




//
// var pokemon = 'charmander'
//
// request('http://bulbapedia.bulbagarden.net/wiki/' + pokemon , function (error, response, html) {
//   if (!error && response.statusCode == 200) {
//     var $ = cheerio.load(html);
//     var dictionary = $('a[href*="(type)"]')
//
//     console.log(dictionary[0]['attribs']['title'].split(" ")[0])
//     console.log(dictionary[1]['attribs']['title'].split(" ")[0])
//   }
// });
//
//
// // (node:62296) Warning: Possible EventEmitter memory leak detected. 11 pipe listeners added. Use emitter.setMaxListeners() to increase limit
// //ELIMINATED BY: // require('events').EventEmitter.prototype._maxListeners = 100;
// // Error: Exceeded maxRedirects. Probably stuck in a redirect loop https://www.nytimes.com/2017/03/26/us/politics/trump-republicans-tax-cuts.html?hp&action=click&pgtype=Homepage&clickSource=story-heading&module=first-column-region&region=top-news&WT.nav=top-news&mtrref=www.nytimes.com&gwh=B4E4E74CFCF7718A60460842BD1519AF&gwt=pay&_r=4

// initialize {
//   options:
//    { withDomLvl1: true,
//      normalizeWhitespace: false,
//      xmlMode: false,
//      decodeEntities: true },
//   _root:
//    initialize {
//      '0':
//       { type: 'root',
//         name: 'root',
//         attribs: {},
//         children: [Object],
//         next: null,
//         prev: null,
//         parent: null },
//      options:
//       { withDomLvl1: true,
//         normalizeWhitespace: false,
//         xmlMode: false,
//         decodeEntities: true },
//      length: 1,
//      _root: [Circular] },
//   length: 0,
//   prevObject:
//    initialize {
//      '0':
//       { type: 'root',
//         name: 'root',
//         attribs: {},
//         children: [Object],
//         next: null,
//         prev: null,
//         parent: null },
//      options:
//       { withDomLvl1: true,
//         normalizeWhitespace: false,
//         xmlMode: false,
//         decodeEntities: true },
//      length: 1,
//      _root: [Circular] } }
