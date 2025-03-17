<template>
    <MyNavbar v-if="false"/>
    <RouterView/>
    <MyFooter/>
</template>
<script>
import MyFooter from './components/MyFooter.vue';
import MyNavbar from './components/MyNavbar.vue';

export default{
    components:{
        MyNavbar,
        MyFooter
    }
}
</script>
<style scoped>
.main-class{
    padding:0;
}
</style>