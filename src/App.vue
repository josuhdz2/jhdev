<template>
    <MyNavbar/>
    <RouterView/>
</template>
<script>
import MyNavbar from './components/MyNavbar.vue';

export default{
    components:{
        MyNavbar
    }
}
</script>
<style scoped>
.main-class{
    padding:0;
}
</style>