//实例化Vue对象
new Vue({
    el:"#basic-1",
    data:{
        age:50,
        x:0,
        y:0
    },
    methods:{
        add:function(){
            this.age++;
        },
        sub:function(){
            this.age--;
        },
        addNum:function(num){
            this.age+=num;
        },
        updateXY:function(event){
               console.log(event);
               //这里一直说未定义
               // this.x=event.offsetX;
                //this.y=event.offsetY;
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