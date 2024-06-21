function make(intital:number):()=>number {
    let counter:number = intital
    function increment():number{
       return counter++
    }
    return increment
}
let incr  =  make(0)
console.log(incr())
console.log(incr())
