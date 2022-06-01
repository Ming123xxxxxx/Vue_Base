<!--组件的结构-->
<template>
   <div>
       <School></School>
       <Student></Student>
   </div>
</template>

<!--组件交互相关的代码(数据、方法等)-->
<script>

    //引入组件
    import School from './School'
    import Student from './Student'

    //暴露组件
    export default {
        name: 'App',
        //注册组件(局部)
        components: {
            School,
            Student
        }
    }
</script>
