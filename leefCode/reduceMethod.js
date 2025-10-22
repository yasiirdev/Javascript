/**
 * 
 * @param {*} nums 
 * @param {*} fn 
 * @param {*} init 
 * @returns 
 *  manual work of reduce method
 */



let reduce = function (nums, fn, init) {
  let val = init;
  for (let i = 0; i < array.length; i++) {
    val = fn(val, nums[i]);
  }
  return val;
};


