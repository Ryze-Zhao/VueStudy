//实例化Vue对象
new Vue({
    el:"#basic-1",
    data:{
        name:"测试1",
        website:"https://www.hehaozhao.top",
        webSiteTag:"<a href='https://www.hehaozhao.top'>SecondSite</a>"
    }
});

/*
 * el：选择根容器
 * data:用于数据的存储
 * methods：用于存储各种方法
 * v-bind和v-html：给属性绑定对应值
 */