
// * A alternative maping className that provide us mapping method 


className alternative{
    map(arr , fn){
          let arr2 = [];
          for(let i = 0 ; i < arr.length ; i++){
               arr2.push(fn(arr[i],i));
          }
          return arr2
    }
}

let arr = [1,2,3,4,5];

let obj = new alternative();

 let PlusI =obj.map(arr, (val , i)=>{
       return val + i;  
});


console.log(PlusI);



