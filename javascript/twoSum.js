// given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target
const twoSum = (nums, target) => {
    const tempArr = []; // create a temp array

    for (let i = 0; i < nums.length; i++) {
        if (tempArr.includes(target - nums[i])) {
            return [tempArr.findIndex((el) => el === target - nums[i]), i];
        }
        tempArr.push(nums[i]);
    }

    return [];
};

const ns = [4, 7, 3];
const t = 7;
const res = twoSum(ns, t);

console.log(res);