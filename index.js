function accessSafe(fn, defaultValue){
  if(fn && typeof fn === 'function') {
    try {
      var value = fn();
      if (value === undefined){
        return defaultValue;
      }
      return value;
    } catch (e) {
      return defaultValue;
    }
  } else {
    throw new Error('First argument should be a function');
  }
}

module.exports = { accessSafe: accessSafe };