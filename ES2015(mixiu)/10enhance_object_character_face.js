// 增强对象字面量
// 解决问题：缩减代码 
//-----
function createBookShop(inventory) {
  return {
    // inventory: inventory,//这里是参数传递进来的数组 
    // inventoryValue: function () {//算总的价格
    //   return this.inventory.reduce((total, book) => total + book.price, 0)
    // },
    // priceForTitle: function (title) { //根据传递进来的title return 出价格
    //   return this.inventory.find(book => book.title === title)//这里的意思是：如果遍历中title和传递进来的是相等的 那就将对应的价格return出去
    //     .price;
    // }
    // 增强对象字面量写法
    inventory,//这里是参数传递进来的数组 
    inventoryValue() {//算总的价格
      return this.inventory.reduce((total, book) => total + book.price, 0)
    },
    priceForTitle(title) { //根据传递进来的title return 出价格
      return this.inventory.find(book => book.title === title)//这里的意思是：如果遍历中title和传递进来的是相等的 那就将对应的价格return出去
        .price;
    }
  }
}
const inventory = [
  { title: "vue", price: 10 },
  { title: "augular", price: 15 }
];
const bookShop = createBookShop(inventory);

console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle('vue'));


//-----------------------
function saveFile(url, data) {
  $.ajax({
    url,
    data,
    method: 'POST'
  })
}
const url = "http://www.****.com";
const data = { color: "lightblue" };
saveFile(url, data)

