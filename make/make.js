function make(intital) {
    var counter = intital;
    function increment() {
        return counter++;
    }
    return increment;
}
var incr = make(0);
console.log(incr());
console.log(incr());
