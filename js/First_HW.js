var someArr = [2, 5, 13, 20, 2, 6, 9, 18];
var someArr2 = [3, 2, 6]
// ЧЕРЕЗ ПЕРЕМЕННЫЕ
var arrSum = someArr.reduce(function(acc, item){
  return acc + item;
});

var filteredArr = someArr.filter(function (arrItem){
  return arrItem < (arrSum / someArr.length);
})
console.log("first variant:" + "\n" + "leser numbers are: " + filteredArr + "\n"); // только первый массив

// ЧЕРЕЗ ФУНКЦИИ
function getArrSum(array){
  return array.reduce(function(acc, item){
    return acc + item;
  });
}

function getArrMiddleValue(array){
  return getArrSum(array) / array.length;
};

function getFilteredArr(array){
  return array.filter(function (arrItem){
    return arrItem < (getArrMiddleValue(array));
  });
}


console.log("second variant:" + "\n" + "middle value of the array " + someArr + " is: " + getArrMiddleValue(someArr) + "." + "\n"
+ "leser numbers are: " +  getFilteredArr(someArr) + "\n")
console.log("second variant:" + "\n" + "middle value of the array " + someArr2 + " is: " + getArrMiddleValue(someArr2) + "." + "\n"
+ "leser numbers are: " +  getFilteredArr(someArr2) + "\n")
