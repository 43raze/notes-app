let oldObj
let obj = {
  x: 42,
}

oldObj = obj
obj.x = 101

console.log(oldObj === obj)
console.log(obj.x)

oldObj = obj
obj = { x: 101 }

console.log(oldObj === obj)
console.log(obj.x)
