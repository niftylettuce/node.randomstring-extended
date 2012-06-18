var chars      = ".,#[]()$!/\\&+-§_%=abcdefghijklmnopqrstuvwxyzABDEFHKMNPRTWXYABDEFHKMNPRTWXY23456789"
  , tokenChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz";

exports.token = function(length) {
  length = length ? length : 32;
  var string = "";
  for (var i=0; i<length; i+=1) {
    var randomNumber = Math.floor(Math.random() * tokenChars.length);
    string += tokenChars.substring(randomNumber, randomNumber + 1);
  }
  return string;
};

exports.generate = function(length) {
  length = length ? length : 32;
  var string = "";
  for (var i=0; i<length; i+=1) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    string += chars.substring(randomNumber, randomNumber + 1);
  }
  return string;
};
