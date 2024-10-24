/*

item creator
  - validates info

items manager
  - create 
    - creates a new item
    - returns false if unsuccessful

  - update 
    - accepts an SKU and an objects
    - updates info on item

  - delete 
    - accepts SKU 
    - deletes that object from the list

  - items
    - contains a list of all the items
  
  - inStock
    - lists all items that have a quantity > 0

  - itemsInCategory
    - lists all items for a given category
  
reports manager
  - init
    - accepts the ItemManager
    - assigns ItemManager to the items property

  - createReporter
    - accepts SKU
    - returns an object
      - this object has one method:
        - itemInfo
          - logs all properties of an object as key:value pairs

  - reportInStock
    - logs the item names of all items in inStock
    - as comma separated values




ITEM OBJECT
  - SKU code
    - first 3 letters of item name + first 2 letters of category
    - if item name has 2 words and first word is two letters, 
      take SKU third letter from next word (spaces are not characters)

  - item name
    - minimum of 5 characters 
    - spaces don't count as characters

  - category
    - at least 5 characters
    - only 1 word allowed

  - quantity
    - cannot be blank
    - you can assume this will be a number

*/

let p = console.log;

let ItemManager = {
  _items: [],

  get items() {
    return this._items;
  },

  create: function(name, category, quantity) {
    let item = {
      name,
      category,
      quantity,
    };

    if (this.isValid(item)) {
      item.sku = this.createSKU(name, category);
      this.items.push(item);
      return item;
    } else {
      return false;
    }
  },

  isValid(item) {
    let validName = (typeof item.name === 'string') &&
                    (item.name.length >= 5);

    let validCategory = (typeof item.category === "string") &&
                        !(item.category.includes(" ")) &&
                        (item.category.length >= 5);

    let validQuantity = item.quantity !== undefined && item.quantity !== null;

    return validName && validCategory && validQuantity;
  },

  createSKU(name, category) {
    let firstThreeChars = name.split(" ").join("").slice(0, 3);
    let lastTwoChars = category.split("").slice(0, 2).join("");

    return (firstThreeChars + lastTwoChars).toUpperCase();
  },

  update(sku, newInfo) {
    let objToUpdate = this.getItem(sku);
    Object.assign(objToUpdate, newInfo);
  },

  delete(sku) {
    let deleteIndex = this.items.indexOf(this.getItem(sku));
    this.items.splice(deleteIndex, 1);
  },

  inStock() {
    return this.items.filter(item => item.quantity > 0);
  },

  itemsInCategory(category) {
    return this.items.filter(item => item.category === category);
  },

  getItem(sku) {
    let arr = this.items.filter(item => item.sku === sku);
    return arr[0];
  }
};

let ReportManager = {
  items: undefined,

  init(itemManager) {
    this.items = itemManager;
  },

  createReporter(sku) {
    let obj = Object.create(this.items.getItem(sku));
    obj.itemInfo = function() {
      for (let prop in this) {
        if (prop === "itemInfo") continue;
        console.log(`${prop}: ${this[prop]}`);
      }
    };
    return obj;
  },

  reportInStock() {
    let inStockItems = this.items.inStock();
    let itemNames = [];
    inStockItems.forEach(item => itemNames.push(item.name));
    console.log(itemNames.join(", "));
  },
};

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
// p(ItemManager.items);

ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });
// // returns list with the item objects for football and kitchen pot
ItemManager.inStock();
// football,kitchen pot
ReportManager.reportInStock();

// returns list with the item objects for basket ball, soccer ball, and football
p(ItemManager.itemsInCategory('sports'));

ItemManager.delete('SOCSP');
// returns list the remaining 3 valid items (soccer ball is removed from the list)
// p(ItemManager.items);

let kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10