function myFunction() {
    console.log(this);
}

myFunction();
let test = new myFunction();