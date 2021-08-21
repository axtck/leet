const twoSum = (nums, target) => {
    const tempArr = [];

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