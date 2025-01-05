<template>
    <Welcome/>
    <Introduction/>
    <LastProjects/>
</template>
<script>
import Introduction from '@/components/Introduction.vue';
import LastProjects from '@/components/LastProjects.vue';
import Welcome from '@/components/Welcome.vue';

export default{
    components:{
        Welcome,
        Introduction,
        LastProjects
    }
}
</script>
<style scoped>
.main-class{
    padding:0;
}
</style>