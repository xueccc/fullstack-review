const request = require('request');
const config = require('../config.js');
const db = require('../database/index');

let getReposByUsername = (userName) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API
  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: 'https://api.github.com/users/'+ userName + '/repos',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`,

    }
  };

  request(options, function(error, response, body){
    console.log('error: ', error);
    console.log('statuesCode: ', JSON.parse(body));
    // console.log(db);
    db.save(JSON.parse(body))

  })


}

module.exports.getReposByUsername = getReposByUsername;