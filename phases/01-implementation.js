class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    // Initialize your buckets here
    this.capacity = numBuckets;
    this.count = 0;
    this.data = new Array(this.capacity).fill(null);
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }

  insert(key, value) {
    let index = this.hashMod(key);
    let newTable = new KeyValuePair(key, value);
    // console.log("INDEX-> ", index);
    // console.log("NEWTABLE-> ", newTable);
    if (!this.data[index]) {
      this.data[index] = newTable;
    } else {
      if (this.data[index].key === newTable.key) {
        this.data[index] = newTable;
      } else {
        let curr = this.data[index];
        while (curr.next) {
          curr.next = curr;
        }
        curr.next = newTable;
      }
    }
    this.count++;
  }

  read(key) {
    // Your code here
  }

  resize() {
    // Your code here
  }

  delete(key) {
    // Your code here
  }
}

// let hashTable = new HashTable(4);

// hashTable.insert("key2", "value2");
// hashTable.insert("key4", "value4");
// console.log(hashTable);
// console.log(hashTable.data[1].next.key);

module.exports = HashTable;
