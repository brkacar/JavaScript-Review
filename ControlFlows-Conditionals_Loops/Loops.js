//for loop
let sum=0;
for (let i = 1; i <= 5; i++) {
        sum += i;
    //console.log("i is "+i);
}
console.log("Sum is "+sum);


//while loop
let j = 0;
while (j < 5) {
    console.log("j is "+j);
    j++;
}

//do-while loop
let k = 0;  
do {
    console.log("k is "+k);
    k++;
} while (k < 5);

//for with break
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log("i is "+i);
}

//for with continue
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {  
        continue;
    }
    console.log("i is "+i);
}
