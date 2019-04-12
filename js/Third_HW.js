function sumTo1(n) {
  if (n != 1 && n > 0) {
    return n + sumTo1(n-1);
  }
  else {
    return n;
  }
}
console.log(sumTo1(2));

function sumTo2(n) {
  var sum = 0;
  var i = 0;
  while (n-i) {
    sum += n-i;
    i++;
  }
  return sum;
}
console.log(sumTo2(3));

function sumTo3(n) {
  return n*(n+1)/2;
}
console.log(sumTo3(3));


function getPerson(name, surname, age, sex){
  return {
    fullName: function() {
      return name + " " + surname;
    },
    greetMessage: function() {
      if (sex.toLowerCase() === "female") {
        return "Hello Mrs. " + name + " " + surname;
      }
      else if (sex.toLowerCase() === "male") {
        return "Hello Mr. " + name + " " + surname;
      }
      else {
        return "There are only two genders";
      }
    },
    age: function() {
      return age;
    },
  };
};

var batman = getPerson("Bruce", "Wayne", 40, "Male");
console.log(batman.fullName());
console.log(batman.greetMessage());
console.log(batman.age());
console.log(" ");

var obiWan = getPerson("Ben", "Kenoby", 60, "Jedi");
console.log(obiWan.fullName());
console.log(obiWan.greetMessage());
console.log(obiWan.age());
console.log(" ");

var lara = getPerson("Larisa", "Croft", 30, "Female");
console.log(lara.fullName());
console.log(lara.greetMessage());
console.log(lara.age());
