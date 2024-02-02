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
    let idx = this.hashMod(key);
    let kvp = new KeyValuePair(key, value);
    if (!this.data[idx]) this.data[idx] = kvp;
    else {
      let curr = this.data[idx];
      while (curr) {
        if (curr.key === key) {
          curr.value = value;
          return;
        }
        curr = curr.next;
      }
      kvp.next = this.data[idx];
      this.data[idx] = kvp;
    }
    this.count++;
  }

  read(key) {
    let idx = this.hashMod(key);
    if (!this.data[idx]) return undefined;
    let curr = this.data[idx];
    while (curr) {
      if (curr.key === key) return curr.value;
      curr = curr.next;
    }
    return undefined;
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
