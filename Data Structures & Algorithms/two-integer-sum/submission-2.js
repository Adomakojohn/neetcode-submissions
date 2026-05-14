class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let myMap = new Map();


        for(let i= 0; i<= nums.length; i++){
            const diff = target - nums[i];

            if(myMap.has(diff)){
                const j = myMap.get(diff);
                return j<i ? [j,i] : [i, j];
            }

            myMap.set(nums[i], i);
        }
    }
}
