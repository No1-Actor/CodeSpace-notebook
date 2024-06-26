// node 自带events模块 
// 天生就是订阅发布者 设计模式 
const EventEmitter = require('events').EventEmitter; //

// 继承 
class Geektime extends EventEmitter { // 继承了EventEmitter
    constructor() { // 构造函数
        super(); // 
        setInterval(() => {
            this.emit('newlesson', {
                price: Math.random() * 100
            })
        }, 3000)
    }
}

module.exports = new Geektime;
