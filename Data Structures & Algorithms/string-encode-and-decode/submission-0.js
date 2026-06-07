class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {

        let result = "";

        for(let str of strs){
            result += str.length + "#" + str;
        }

        return result;

    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        


        let result = [];
        let i = 0;

        while(i< str.length){
       let  digits= "";

        while(str[i] !== "#"){
            digits += str[i];
            i++;
        }

        let newDigits = parseInt(digits);

        i++;

        let word = str.substring(i, i + newDigits);
        result.push(word);

        i += newDigits; 


        }
        return result;
    }
}
