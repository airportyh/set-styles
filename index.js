
module.exports = function setStyles(elm, styles){
  var lines = []
  for (var prop in styles){
    lines.push(prop + ': ' + String(styles[prop]) + ';')
  }
  elm.style.cssText = lines.join('')
}