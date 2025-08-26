class HashTable{
    /**
     * @param {number} initialSize - rounded up to the power of two >=4
     * @param {loadFactorGrow} - grow when size/capacity > this 
     * @param {loadFactorShrink} - shrink when size/capacity < this
    **/
    constructor(initialSize = 8, loadFactorGrow = 0.75, loadFactorShrink = 0.25){
        this._minSize = 4;
        this._size = 0;
        this._capacity = Math.max(this._minSize, HashTable._nextPowerOfTwo(initialSize));
        this._buckets = Array.from({ length: this._capacity }, () => null );  
        this.dataMap = new Array(size);

        this._LoadFactor_GROW = loadFactorGrow;
        this._LoadFactor_SHRINK = loadFactorShrink;
    }

    /** The name indicates to other developers that this function must be called by other methods
    * The for loop will iterate trough the key length, and will exctract the code for each character
    * Then it will be multiplied by a factor of 23, wich is a prime number and makes this more random
    * % this gives the reminder between this.dataMap.length and will determine what the address is for that
    * particular string 
    * This hash method implements the separate chaining strategy, because it uses an array to handle multiple 
    * elements for the same index. 
    *
    * @param {string} key 
    * @param {*} value
    **/
    
    // O(1)
    set(key, value) {
        let index = this._hash(key);
        if(!this.dataMap[index]){
            this.dataMap[index] = [];
        }
        this.dataMap[index].push[key, value];
        return this;
    }

    _hash(key){
        let hash = 0;
        for(let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
        }
        return hash;
    }

    /** Returns number of stored key-value pairs. */ 
    getBuckets(){
      return this._size;
    }

    /** Returns number of buckets - internal array length */
    get capacity(){
        return this._capacity;
    }
  

    /** Returns an especific key
     *  @param {string} key 
     *  @returns {*} value or undefined if not present
     */
    get(key) {
        let index = this._hash(key);
        if(this.dataMap[index]){
            for(let i = 0; i < this.dataMap[index].length; i++){
                if(this.dataMap[index][i][0] === key){
                    return this.dataMap[index][i][1];
                }
            }
        }
        return undefined;
    }

    
    // Returns all the keys 
    keys(){
        let allKeys = [];
        for(let i = 0; i < this.dataMap[i].length; i++){
            // Then we will check if there is something at that index 
            // and we will iterate over that array  
            if(this.dataMap[i]) {
                for(let j = 0; j < this.dataMap[i].length; j++){
                    allKeys.push(this.dataMap[i][j]][0]);
                }
            }
        }
        return allKeys;
    }
    
    /** Remove everything - this is 0 cappacity */
    clear() {
        this._buckets = Array.from( { length: this._capacity }, () => null);
    }
    
    /** Iterator for keys (bucket order) using a function generator that yields the keys */
    *keys(){
        for (const chain of this._buckets) {
            if(!chain) continue;
            for(const { key } of chain) yield key;
        }
    }

    /** Iterator for values in buckets order using function generator that yields the values */
    *values(){
        for (const chain of this._buckets) {
            if(!chain) continue;
            for (const {value} of chain)yield value;
        }
    }

    /** Iterator for entries [key, value] pairs in buckets order using function generator 
    * that yields the key-value pairs 
    * */
    *entries(){
        for (const chain of this._buckets) {
            if(!chain) continue;
            for(const {key, value} of chain) yield [key, value];
        }
    }
}
