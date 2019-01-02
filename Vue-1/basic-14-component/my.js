Vue.component("greeting", {
// 单个模板只能在一个标签下，所以button必须放在p标签下
    template: '<p>{{name}}:Hallo，我是组件<button @click="changeName()">改名</button></p>',
    // 组件中的data需要写成function，如果不这么做，那么每次都会将所有name一起改了
    data: function () {
        return {
            name: "Vue"
        }
    }, methods: {
        changeName: function () {
            this.name = "VueChange";
        }
    }
})



//实例化Vue对象
new Vue({
    el: "#basic-1",

});

//实例化Vue对象
new Vue({
    el: "#basic-2",

});