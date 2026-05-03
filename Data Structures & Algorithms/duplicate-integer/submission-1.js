class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        let mySet = new Set();

        for(let i=0; i<nums.length; i++){
            // for(let j =i+1; j<nums.length; j++){
            //     if(nums[i]==nums[j]){
            //         return true;
            //     }
            // }
            // // return false

            if(mySet.has(nums[i])){
                return true;
            }
            mySet.add(nums[i]);

        }

         return false;

    }
}
