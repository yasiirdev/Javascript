/*
 for a given array with marks of student -> [85,97,44,37,76,60].
       ## find the average marks of the entire className.
*/

let arr = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let val of arr) {
  sum += val;
}
console.log(sum);
console.log(arr.length);
