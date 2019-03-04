//实例化Vue对象
new Vue({
    el: "#basic-1",
    data: {

    },
    methods: {
        logName: function () {
            console.log("你正在输入名字！");
        },
        logAge: function () {
            console.log("你正在输入年龄！");
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