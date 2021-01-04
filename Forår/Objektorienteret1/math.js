class Math {
    constructor(x) {
      this.x = x;
    }

    static sum(a, b) {
      return a.x + b.x;
    }
  }
  
const p1 = new Math(5);
const p2 = new Math(7);
console.log(p1.sum); // undefined

console.log(Math.sum(p1, p2)); // 12
