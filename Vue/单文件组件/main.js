
//引入App组件
import App from './App'

//创建vm实例
new Vue({
    el:"#root",
    template:`<App></App>`,
    //注册App组件(局部)
    components:{
        App
    }
})