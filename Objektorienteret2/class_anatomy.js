// Klasse navn
// Kommentare
// Atributter
// Konstruktor
// Public Functions
// Private Functions
"use strict";

class RectangularPrism {
     /**
     * Create a rectangular prism.
     * @param {height} height - The height of the rectangular prism.
     * @param {width} width - The width of the rectangular prism.
     */
    #density
    #color
    constructor({height = 1, width = 1, length = 1} = {}) {
        this.height = height;
        this.width = width;
        this.length = length
        this.#density = 5;
        static this.#color = "black"
    }
    
    /**
    * Get the area of the rectangular prism.
    * @return {number} The area.
    */
    get area() {
        return this.calcSurfaceArea();
    }

    calcSurfaceArea() {
        return (2 * this.height * this.width) + (2 * this.length * this.width) + (2 * this.height * this.length);
    }

    /**
    * Get the weight of the rectangular prism.
    * @return {number} The weight.
    */
    get weight() {
    return this.calcWeight();
    }

    calcWeight(){
        return this.height * this.width * this.length * this.#density
    }
}


const square = new RectangularPrism();
console.log(square.area); // 6

const square1 = new RectangularPrism({height: 10, width: 10});
console.log(square1.area); // 240
console.log(square1.weight) // 500
console.log(square1.density) // undefined (private)




