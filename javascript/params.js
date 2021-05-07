var getparams = () => {
  var returnedParams = {};
  var url = window.location.search.substring(1); //get rid of "?" in querystring
  var qArray = url.split('&'); //get key-value pairs
  for (var i = 0; i < qArray.length; i++) 
  {
    var pArr = qArray[i].split('='); //split key and value
    pArr = [pArr[0], pArr.slice(1).join('=')];
    var value = decodeURI(pArr[1]);
    
    if (!isNaN(value)) value -= 0;
    if (value == 'true' || value == 'True') value = true;
    if (value == 'false' || value == 'False') value = false;
    if (value == 'null' || value == 'None') value = null;
    
    returnedParams[pArr[0]] = value;
  }
        
  return returnedParams;
};
