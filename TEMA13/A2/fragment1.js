var mainName;
mainName = 'Jose';
var age;
age = 25;
var Person;
(function (Person) {
    Person[Person["theName"] = mainName] = "theName";
    Person[Person["theAge"] = age] = "theAge";
})(Person || (Person = {}));
