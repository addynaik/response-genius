
function ResponseGenius (api_key) {
  if (!api_key) {
    throw new Error('missing api key')
  }


  this.__api_key = api_key;
  this.__base_url = "https://control.responsegenius.com/rest"
}

module.exports = exports = ResponseGenius;
