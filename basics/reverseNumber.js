let num = 12345678;

let reversed = 0;
let tenth = 10;
while(num > 0){
    let rem = num % 10;
    reversed = (reversed * 10)  + rem;
    num =  Math.floor(num / 10);
}

console.log("Revered num = ",reversed);