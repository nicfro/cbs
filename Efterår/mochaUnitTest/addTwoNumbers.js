function addTwoNumbers(x,y){
  if ((typeof(x) === "number") && (typeof(y) === "number")){
      return x+ y
  } else {
      return "please enter two integers"
  }
}

module.exports = addTwoNumbers;
