theBeatlesPlay(musicians, instruments){
  var arr = {};

  for(var i = 0; i < musicians.length - 1; i++){
    var str = musician[i] + " plays " + instruments[i];
    arr.push(str);
  }
  return arr;
}
