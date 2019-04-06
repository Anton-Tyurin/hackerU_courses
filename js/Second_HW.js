function Student(name, surname, fathername, email) {
  this._name = name;
  this._surname = surname;
  this._fathername = fathername;
  this._email = email;
  this.contactPhone = {
    country: null,
    region: null,
    number: null,
  };
  this.averageRating  = null ;
  this.marks = [];
  this.updateAverageRating = function (newMarks) { // функция, которая обновляет значение averageRating;
    return newMarks.reduce(function(acc, item){
      return parseInt(acc) + parseInt(item);
    }) / this.marks.length;
  };
  this.addMark = function(mark) {
    this.marks.push(mark);
    this.averageRating = +this.updateAverageRating(this.marks).toFixed(3); //toFixed - позволяет выводить число до 3 знаков после запятой. т.к. возвращает строку, то добавляем + перед вызовом функции.
  };
  this.removeMark = function(index) { //ПРЕДПОЛАГАЮ, ЧТО ВСЕ ТАКИ, ФУНКЦИЯ ПРИНИМАЕТ ТОЛЬКО 1 ПАРАМЕТР INDEX, Т.К. МЫ ХОТИМ ТОЛЬКО УДАЛИТЬ ЭЛЕМЕНТ ПО ИНДЕКСУ, А НЕ СВЕРИТЬ ЕГО НАЛИЧИЕ ПО ИНДЕКСУ, А ПОТОМ УДАЛИТЬ.
    if (index > this.marks.length) {
      console.log("index ", index, "is out of marks array range. Array length = ", this.marks.length );
      return;
    }
    this.marks.splice(index-1, 1); //считаем, что счет начинается от 1, а не от 0
    this.averageRating = +this.updateAverageRating(this.marks).toFixed(3);
  };
  this.updateMark = function(mark, index) {
    if (index > this.marks.length) {
      console.log("index ", index, "is out of marks array range. Array length = ", this.marks.length );
      return;
    }
    this.marks.splice(index-1, 1, mark); //считаем, что счет начинается от 1, а не от 0
    this.averageRating = +this.updateAverageRating(this.marks).toFixed(3);
  }

  this.setPhone = function(country, region, number) {
    this.contactPhone.country = country;
    this.contactPhone.region = region;
    this.contactPhone.number = number;
  };
  this.setMail = function(email){
    this._email = email;
  };
  this.setName = function(name, surname, fathername) {
    this._name = name;
    this._surname = surname;
    this._fathername = fathername;
  };

  this.printUser = function() {
  console.log(
      "Student name: " + this._name + " " + "\n"
    + "Student surname: " + this._surname + " " + "\n"
    + "Student fathername: " + this._fathername + " " + "\n"
    + "Student email: " + this._email + " " + "\n"
    + "Student phone country: " + this.contactPhone.country + " " + "\n"
    + "Student phone region: " + this.contactPhone.region  + " " + "\n"
    + "Student phone number: " + this.contactPhone.number + " " + "\n"
    + "Student marks: " + this.marks + " " + "\n"
    + "Student average rating: " + this.averageRating + " " + "\n")
  };
};
// ПРОВЕРКИ
var student = new Student("Andy", "Wainstein", "Dmitrievich", "example@gmail.com");
student.setPhone("222","333","777-777-777");
student.setMail("avengersltd@gmail.com");
student.setName("Nik", "Fury", "Fordov");

student.addMark("3");
student.addMark("5");
student.addMark("4");
student.addMark("3");
student.addMark("3");
student.addMark("2");
student.addMark("5");
student.addMark("4");
student.removeMark(6);
student.updateMark(1, 2)

console.log(student.printUser());
