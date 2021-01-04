class Rectangle {
    constructor(height, width) {
      this.name = 'Rectangle';
      this.height = height;
      this.width = width;
      this._sayName = function(){
        return 'Hi, I am a '+ this.name + '.'
      }
    }
    get sayName(){
        return this._sayName()
    }

    get area() {
      return this.height * this.width;
    }
    set area(value) {
      this._area = value;
    }
  }
  
  class Square extends Rectangle {
    constructor(length) {
      // Here, it calls the parent class's constructor with lengths
      // provided for the Rectangle's width and height
      super(length, length);
  
      // Note: In derived classes, super() must be called before you
      // can use 'this'. Leaving this out will cause a reference error.
      this.name = 'Square';
    }
  }
rectangleObj = new Rectangle(5,4)
console.log(rectangleObj.sayName) //Hi, I am a Rectangle.
console.log(rectangleObj.area) //20

squareObj = new Square(5)
console.log(squareObj.sayName) // Hi, I am a Square.
console.log(squareObj.area) // 25
