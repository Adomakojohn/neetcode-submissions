class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let seen = new Map();

        for(let n of nums){
            seen.set(n, (seen.get(n) || 0)+1);
        }

        let sortedArray = Array.from(seen.entries());

        sortedArray.sort((a, b) => b[1] - a[1]);
        
        return sortedArray.slice(0, k).map(pair => pair[0]);


    }
}
