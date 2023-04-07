const arr = [1,2,3,4,5];


function main(arr, double){
    return double(arr);
};

function double(arr){
    return arr.map(item => item * 2)
};

console.log(main(arr,double));