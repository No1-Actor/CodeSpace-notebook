Vue.createApp({
    template: "#my-app",
    data() {
      return {
        books: [
          {
            id: 1,
            name: '《算法导论》',
            date: '2006-9',
            price: 85.00,
            count: 1
          },
          {
            id: 2,
            name: '《UNIX编程艺术》',
            date: '2006-2',
            price: 59.00,
            count: 1
          },
          {
            id: 3,
            name: '《编程珠玑》',
            date: '2008-10',
            price: 39.00,
            count: 1
          },
          {
            id: 4,
            name: '《代码大全》',
            date: '2006-3',
            price: 128.00,
            count: 1
          },
        ]
      }
    },
    
    computed: {
        TotalPrice(){
          let totalPrice = 0;
          for (const item of this.books) {
            totalPrice += item.price * item.count;
          }
            return totalPrice;
        }
    },
    methods: {
        add(index) {
            this.books[index].count++
        },
        minus(index){
            this.books[index].count--
            if(this.books[index].count == 0){
                this.books[index].count = 1
            }
        },
        del(index){
            this.books.splice(index,1)
          }
      }
}).mount("#app");