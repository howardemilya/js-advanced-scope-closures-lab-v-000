const produceDrivingRange = function(blockRange) {
  return function(beginBlock, endBlock){
    let a = parseInt(beginBlock.replace("th", ""))
    let b = parseInt(endBlock.replace("th", ""))
    let difference = Math.abs(a-b)

    if (difference > blockRange) {
      let tooFar = difference - blockRange
      return tooFar + " blocks out of range"
    }
    else if (difference <= blockRange) {
      let okRange = blockRange - difference
      return "within range by " + okRange
    }
  }
}

function produceTipCalculator(percentTip){
  return function(tabAmount){
    return tabAmount * percentTip
  }
}


function createDriver() {
  let driverId = 0;
  return class {
    constructor(name){
      this.id = ++driverId;
      this.name = name;
    }
  }
}
