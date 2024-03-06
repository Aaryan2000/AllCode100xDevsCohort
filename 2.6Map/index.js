//Map:global funcn
//given an array ,give me back the new array in which every element is multiplied by 2
// const arr=[1,2,3,4,5]
// function transform(n){
//     return n*2;
// }

//const newarr=arr.map(transform);
//console.log(newarr);

//OR

// const arrnew=arr.map(function transform(n){
//     return n*2;
// })
// console.log(arrnew);

//Filter
//given i/p array give me back all even element

const arr=[1,2,3,4,5]
function filterLogic(n){
    if(n%2==0){
        return true;
    }
    else{
        return false;
    }
}

const ans=arr.filter(filterLogic);
console.log(ans);

//OR

// const ans1=arr.filter(function filterLogic(n){
//     if(n%2==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// });
// console.log(ans1);