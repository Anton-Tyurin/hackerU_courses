
function wave(enterWord){
  let result = [];
  let wordToArr = enterWord.split("");
  let upperCase;
  let lowerCase;
  let lowerCharIndex = null;

  for (var i = 0; i < wordToArr.length; i++) {

    if (wordToArr[i] === " ") {

      if ((wordToArr[i-1] === undefined || wordToArr[i-1] === " ")){
        continue;
      }

      else if(typeof(wordToArr[i-1]) === 'string'){
        lowerCharIndex = i;
        lowerCase = wordToArr[i-1].toLowerCase();
        continue;
      }

    }

    else if (typeof(wordToArr[i] === "string")) {

        upperCase = wordToArr[i].toUpperCase();

        if (wordToArr[i-1] === undefined) {
          wordToArr.splice(i, 1, upperCase);
        }

        else if (wordToArr[i-1] === " ") {

          if (lowerCharIndex !== null) {
            wordToArr.splice(lowerCharIndex-1, 1, lowerCase);
            wordToArr.splice(i, 1, upperCase);
          }

          else {
            wordToArr.splice(i, 1, upperCase);
          }

        }

        else{
          lowerCase = wordToArr[i-1].toLowerCase();
          wordToArr.splice(i-1, 2, lowerCase, upperCase);
        }

        result.push(wordToArr.join(""))
    }
  }
  return result;
}
console.log(wave(" hello world   "));

// var str1 = "Some,Text dasd;xcvxcv";
// var delemiter = " ,;"
// // var delemiterToArr = delemiter.split('');
// // var str2 = "Some, Words, Access";
// // console.log(str1.split(/[{1}\;\,\s]/).length);
// // var result = [];
// var word;
//
//
//
// // console.log(delemiterToArr);
//
// for (var i = 0; i < str1.length; i++) {
//   for (var j = 0; j < delemiter.length; j++) {
//     if (str1[i] === delemiter[j]) {
//       console.log("here");
//       word = str1.substring(0, i);
//       result.push(word)
//     }
//     // console.log(delemiterToArr[j]);
//   }
// }
//
// console.log(result);


// найти в массиве те элементы, значения которых, меньше чем среднее арифмитическое взятое от всех элементов массива.


//
// var getSumArr = function (array){
//   array.reduce(function(acc, item){
//     var sum = acc + item;
//     return sum;
//   })
// };
//
//
// var filter

// console.log(Math.sqrt(Math.abs(-49)));



// var someArr = [2, 5, 13, 20, 2, 6, 9, 18];
// var someArr2 = [3, 2, 6]

// var arrSum = someArr.reduce(function(acc, item){
//   return acc + item;
// });
//
//
// var filteredArr = someArr.filter(function (arrItem){
//   return arrItem < (arrSum / someArr.length);
// })



// console.log(arrSum / someArr.length)
// console.log(filteredArr);
// console.log(arrMult);
// console.log(arrMax);

//
// function arrSum(array){
//   return array.reduce(function(acc, item){
//     return acc + item;
//   });
// }
//
// function arrMiddleValue(array){
//   return arrSum(array) / array.length;
// };
//
// function filteredArr(array){
//   return array.filter(function (arrItem){
//     return arrItem < (arrMiddleValue(array));
//   });
// }
//
//
// function arrMultFuction(array){
//   return array.reduce(function(acc, item){
//     return acc*item;
//   });
// }
//
// function arrMaxFuction(array){
//   return array.reduce(function(firstItem, secondItem){
//     return (firstItem>secondItem) ? firstItem: secondItem;
//   });
// }
//
// console.log("middle value of the array " + someArr + " is: " + arrMiddleValue(someArr) + "." + "\n"
// + "leser numbers are: " +  filteredArr(someArr))


// console.log(filteredArr);
//
// console.log(arrMultFuction(someArr) + " - is multiplication of elements from the first array");
// console.log(arrMaxFuction(someArr) + " - is max value of elements from the first array");
//
// console.log(arrMultFuction(someArr2) + " - is multiplication of elements from the second array");
// console.log(arrMaxFuction(someArr2) + " - is max value of elements from the second array");
