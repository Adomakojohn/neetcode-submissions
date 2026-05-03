class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!== t.length){
            return false;
        }

        const sArr = [...s];
        const tArr = [...t];

        let myMap = new Map();

        for(let i = 0; i<sArr.length; i++){
            if(myMap.has(sArr[i])){
                const currentCount = myMap.get(sArr[i]);
                myMap.set(sArr[i], currentCount+1);
            }else{
                    myMap.set(sArr[i],1);
            }
        }

        for(let  i= 0; i<tArr.length; i++){
            if(!myMap.has(tArr[i]) || myMap.get(tArr[i]) === 0){
                return false;
            }
            myMap.set(tArr[i], myMap.get(tArr[i]) - 1);
        }
        return true;
    }
}
