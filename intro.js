// Add some basic POJO patterns here

/*
# Does markdown work here?
Creates a new constructor function
Constructors have a prototype property (an object).  Each new object is created with 
*/
function MyClass(){
  this.someMethod = function(){
    // this method is added to each new instance
    // for this reason, adding your methods here can bloat
  };  
}

var myObj = new MyClass();

// this technique does NOT override the .prototype property, and so you
// don't have to worry about re-setting the .prototype.constructor.
MyClass.prototype.newMethod = function(){};

// here, we override/re-set the .prototype property to a fresh object,
// and the .prototype.constructor property needs to be added
MyClass.prototype = {

  // set constructor property to the constructor function
  // this helps with instance of checks
  constructor: MyClass,
  
  anotherMethod: function(){
    // adding a method to the prototype can still access "this"
  }
}
