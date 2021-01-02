class MyClass {

    a = 1;          // .a is public
    #b = 2;         // .#b is private
    static #c = 3;  // .#c is private and static
  
    incB() {
      this.#b++;
    }
  
  }
  
  let m = new MyClass();
  
  m.incB(); // runs OK