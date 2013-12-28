// super
function Person(name) {
	this.name = name;
}
Person.prototype.info = function() {
	return 'Person called ' + this.name;
}
// sub
function Employee(name, age) {
	Person.call(this, name);
	this.age = age;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
Employee.prototype.info = function() {
	return Person.prototype.info.call(this) + '-' + this.age;
};

var person = new Person('basecss');
var basecss = new Employee('basecss', 22);

// relationship
/*
 * person [[Prototype]] -> Person.prototype
 * basecss [[Prototype]] -> Employee.prototype
 * Employee.prototype [[Prototype]] -> Person.prototype
 */ 