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
            let price = 0
            for(let i = 0;i<this.books.length;i++){
                price += this.books[i].price * this.books[i].count
            }
            return price
        }
    }
})