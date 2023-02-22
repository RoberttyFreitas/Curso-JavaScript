let num = [5, 8, 9, 2, 1]
num.push(4)
console.log(num)

num.sort()

console.log(num)

console.log("-----------")

for (let i = 0; i < num.length; i++) {
    console.log(num[i])
}

console.log("-----------")

for (let i in num) {
    console.log(num[i])
}

console.log("-----------")

console.log(num.indexOf(9))
console.log(num.indexOf(10))