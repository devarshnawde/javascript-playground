let num = 445566;

const map = {};

while(num > 0){
    let rem = num%10;

    if(map[rem]){
        map[rem] = map[rem] + 1;
    } else {
        map[rem] = 1;
    }
    num = Math.floor(num/10);
}

console.log(map);