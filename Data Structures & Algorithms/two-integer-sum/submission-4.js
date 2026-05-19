class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
    //   for(let i=0; i<=nums.length; i++ ){
    //     for(let j=i+1; j<=nums.length; j++){
    //         if(nums[j]+nums[i]===target){
    //             return [i,j];
    //         }
    //     }
    //   }

    let myMap= new Map();

    for(let i=0; i<nums.length; i++){
        let otherNum= target - nums[i];

        if(myMap.has(otherNum)){
            return [i, myMap.get(otherNum)];
        }

        myMap.set(nums[i], i);

      
    }

    }
}
