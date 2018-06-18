//Lecture: variables
/*
var name = 'John';
   console.log(name);

var lastName = 'Smith';
  console.log(lastName);

var age = 26;
  console.log(age);

  var fullAge = true;
    console.log(fullAge);
*/

//Lecture: variables 2
/*
var name = 'John';
  age = 26;

//  console.log(name + age);
//  console.log(age + age);

var job, isMarried;
//  console.log(job);

  job = 'teacher';
  isMarried = false;

  console.log(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');

  age = 'thirty-six';
  job = 'driver';

  console.log(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried  + '.');

//  var lastName = prompt('What is the Last name?');
//    console.log(lastName);

    alert(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');
*/

//Lecture: operators
/*
var now = 2018;
var birthYear = now - 26;


  birthYear = now - 26 * 2;
// 2018 - 52
// 1966

  console.log(birthYear);

var ageJohn = 30;
  ageMark = 30;

  ageJohn =  ageMark = (3 + 5) * 4 - 6;

//same as ageJohn = ageJohn +1;
  ageJohn
//same as ageMark = ageMark * 2;
  ageMark *= 2;

  console.log(ageJohn);
  console.log(ageMark);
*/

//Lecture: if/else statements
/*
var name = 'John';
  age = 26;
  isMarried = 'yes';

  if (isMarried === 'yes') {
    console.log(name + ' is married!');
  } else {
    console.log(name + ' will hopefully be married soon.');
  }


isMarried = false;

if(isMarried) {
  console.log('YES!');
} else {
  console.log('NO!');
}

if (23 === '23') {
  console.log('Something to print...');
}

//if the else statement is left out then it will not define anything
//but the true statement will still output to console if declaration is true

*/


//Lecture: boolean logic and switch

var age = 16;

if (age <= 20) {
  console.log('John is a teenager.');
} else {
  console.log('John is a man.');
}

var age = 25;

if (age < 20) {
  console.log('John is a teenager.');
} else if(age >= 20 && age < 30) {
  console.log('John is a young man.');
} else {
  console.log('John is a man.');
}



var job = 'teacher';

job = prompt('What does John do?');

switch (job) {
  case 'teacher':
    console.log('John teaches kids.');
    break;
  case 'driver':
    console.log('John drives a cab.');
    break;
  case 'cop':
    console.log("John helps fight crime.");
    break;
  default:
    console.log('John does something else.');
}
