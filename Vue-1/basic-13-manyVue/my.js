//实例化Vue对象
var one=new Vue({
    el: "#basic-1",
    data: {
       title:"Vue1"
    },methods: {
        
    },computed: {
        greet:function(){
            return "Hello Vue1";
        }
    }
});

//实例化Vue对象
var two=    new Vue({
    el: "#basic-2",
    data: {
    title:"Vue2"
    },methods: {
        //从另外一个Vue里面改变Vue的属性等
        changeVue1Title:function(){
            one.title="Vue1被Vue2改名！"
        }
    },computed: {
        greet:function(){
            return "Hello Vue2";
        }
    }
});