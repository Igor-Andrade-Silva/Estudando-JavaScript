let num = [5, 8, 2, 9, 3]

console.log(num)

var larg = num.length
console.log(larg)

num.push(15)
larg = num.length
console.log(larg)

num[6] = 16
larg = num.length
console.log(larg)
console.log(num)

for (let pos=0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}