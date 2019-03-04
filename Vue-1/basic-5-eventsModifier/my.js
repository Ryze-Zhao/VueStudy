//实例化Vue对象
new Vue({
    el: "#basic-1",
    data: {
        age: 50,
        x: 0,
        y: 0
    },
    methods: {
        add: function () {
            this.age++;
        },
        sub: function () {
            this.age--;
        },
        addNum: function (num) {
            this.age += num;
        },
        //不同的浏览器内核，获取event的方式不一样，具体参照https://blog.csdn.net/qq_41605091/article/details/82465356
        updateXY: function () {
            //console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        stopMoving:function(event){
            event.stopPropagation();
        }
    }
});

/*
 * el：选择根容器
 * data:用于数据的存储
 * methods：用于存储各种方法
 * v-bind和v-html：给属性绑定对应值
 * v-on:
 */