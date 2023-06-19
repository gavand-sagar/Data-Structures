function getHashKey(value) {
    return value.charAt(0)
}

class HashTable {
    myObj = {}


    addItem(value) {
        let key = getHashKey(value);
        this.myObj[key] = value
    }


    getItem(value) {
        let key = getHashKey(value);
        return this.myObj[key]
    }
}


let ht = new HashTable()

ht.addItem("Sagar");
ht.addItem("Rahul")


console.log(ht.getItem("Sagar"))