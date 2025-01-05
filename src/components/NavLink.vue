<template>
    <RouterLink :to="route" class="text-light font-20 font-medium">{{ name }}</RouterLink>
</template>
<script>
export default{
    props:{
        name:{type:String, required:true},
        route:{type:String, required:true}
    }
}
</script>
<style scoped>
.main-class{
    padding:0;
}
</style>