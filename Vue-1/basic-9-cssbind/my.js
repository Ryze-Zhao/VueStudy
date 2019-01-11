//实例化Vue对象
new Vue({
    el: "#basic-1",
    data: {
        dataChangeColor: false,
        dataChangeLength: false
    }, methods: {

    }, computed: {
        myComputed: function () {
            return {
                // changeColor是css里面的，dataChangeColor是js里面的data，现在这个意思是如果dataChangeColor为true，显示changeColor样式
                changeColor:this.dataChangeColor,
                changeLength:this.dataChangeLength
            }
        }
    }
});