const app = new Vue({
    el : "#app",
    data : {
        books : [
            {
                id :1,
                name : "计算机原理",
                price : 55,
                count : 1
            },
            {
                id :2,
                name : "计算机网络",
                price : 65,
                count : 1
            },
            {
                id :3,
                name : "数据结构",
                price : 155,
                count : 1
            }

        ]
    },
    methods : {
        btnDelete(index){
            this.books.splice(index,1)
        },
        add(index){
            this.books[index].count++
        },
        reduce(index){
            this.books[index].count--
        }
    },
    filters : {
        showPrice(price){
            return '￥' + price.toFixed(2)
        }
    },
    computed : {
        totalPrice(){
            // let price = 0
            // for(let i = 0;i<this.books.length;i++){
            //     price += this.books[i].price * this.books[i].count
            // }
            
            // 2、for(let i in this.books)
            // for(let i in this.books){
            //     price += this.books[i].price * this.books[i].count
            // }

            // 3、for(let item of this.books)
            // for(let item of this.books){
            //     price += item.price * item.count
            // }
            // return price
            
            return this.books.reduce(function(preValue,book){
                return preValue + book.price * book.count
            },0)
        }
    }
})

const nums = [10,430,20,60,213,543,10]

// 1、filter函数的使用
// filter中的回调函数有一个要求，必须返回一个boolean值
// true：当返回true时，函数内部会自动将这次回调的n加入到新的数组中
// false：当返回false时，函数内部会自动过滤这次的n
// let newNums = nums.filter(function(n){
//     return n < 100
// })

// // 2、map函数的使用
// let new2Nums =  newNums.map(function(n){
//     return n * 2
// })

// let totalPrice = new2Nums.reduce(function(preValue,n){
//     return preValue + n
// })

// let count = nums.filter(function(n){
//     return n < 100
// }).map(function(n){
//     return n * 2
// }).reduce(function(preValue,n){
//     return preValue + n
// })

let count = nums.filter(n => n < 100).map(n => n * 2).reduce((preValue,n) => preValue + n)

console.log(count)