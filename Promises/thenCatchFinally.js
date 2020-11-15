function rulTerning(){
    return Math.floor(Math.random() * Math.floor(2))
}

let myFirstPromise = new Promise((resolve, reject) => {
    let number = rulTerning()
    if (number ===0){
        setTimeout( function() {
            resolve("Success!")  
        }, 250) 
    } else {
        throw "oh nooooo"
    }
}) 

myFirstPromise.then((successMessage) => {
  console.log("Yay! " + successMessage) 
}).catch((error) => {
    //gør med fejlen hvad jeg vil
    console.error(error)
}).finally(() => {
    console.log("Tak fordi du kørte mig")
})