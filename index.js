
module.exports = function setStyles(elm, styles){
  styles = styles || {}
  var lines = []
  for (var prop in styles){
    lines.push(deCamelCase(prop) + ': ' + String(styles[prop]) + ';')
  }
  elm.style.cssText = lines.join('')
}

function deCamelCase(str) {
  // stolen from <https://github.com/LeaVerou/prefixfree/blob/gh-pages/prefixfree.js#L151>
  return str.replace(/[A-Z]/g, function($0) { return '-' + $0.toLowerCase() });
}
