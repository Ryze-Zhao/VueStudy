//实例化Vue对象
new Vue({
    el:"#basic-1",
    data:{
        name:"测试1"
    },
    methods:{
        myFunction:function(){
            return "测试Methods!";
        },
        myFunction1:function(param){
            return "测试Methods!"+param;
        },
        myFunction2:function(param){
            return "测试Methods!"+param+"   "+this.name;
        }
    }
});

/*
 * el：选择根容器
 * data:用于数据的存储
 * methods：用于存储各种方法
 */