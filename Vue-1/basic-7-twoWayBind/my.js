//实例化Vue对象
new Vue({
    el: "#basic-1",
    data: {
        name: "",
        age: ""
    },
    methods: {
        logName: function () {
            // 获取HTML中ref属性下叫refName名字的值
            console.log(this.$refs.refName.value);
            this.name = this.$refs.refName.value;

        },
        logAge: function () {
            // 获取HTML中ref属性下叫refAge名字的值
            console.log(this.$refs.refAge.value);
            this.age = this.$refs.refAge.value;

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