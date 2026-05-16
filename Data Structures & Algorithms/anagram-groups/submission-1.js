class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
     const map = new Map();

    for (const str of strs) {
        const key = str.split('').sort().join(''); // "eat" → "aet"

        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str); // group by key
    }

    return Array.from(map.values());
    }
}
