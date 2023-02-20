function Person(name) {
  this.name = name
  this.say = function() {
    console.log('say hello')
  }
}

Person.prototype.play = () => {
  console.log('play is running...')
}

function Xiaoming(name) {
  Person.call(this);
  this.name = name;
}

Xiaoming.prototype = Object.create(Person.prototype);
Xiaoming.prototype.contructor = Xiaoming;
