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

// 原型关系
/*
 * person [[Prototype]] -> Person.prototype
 * basecss [[Prototype]] -> Employee.prototype
 * Employee.prototype [[Prototype]] -> Person.prototype
 */

// prototype 检查
person instanceof Person === Person.prototype.isPrototypeOf(person);
basecss instanceof Employee === Employee.prototype.isPrototypeOf(basecss);

// 借用父类方法
// Person.prototype.info.call(this)
Array.prototype.slice.call(arguments);

