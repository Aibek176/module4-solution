// Список имён
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

// Функция для печати Hello
function sayHello(name) {
  console.log("Hello " + name);
}

// Функция для печати Goodbye
function sayGoodbye(name) {
  console.log("Goodbye " + name);
}

// Цикл по всем именам
for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();
  
  if (firstLetter === 'j') {
    sayGoodbye(names[i]);
  } else {
    sayHello(names[i]);
  }
}
