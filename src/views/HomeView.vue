<template>
    <Welcome/>
    <Introduction/>
    <LastProjects/>
    <Comments/>
</template>
<script>
import Comments from '@/components/Comments.vue';
import Introduction from '@/components/Introduction.vue';
import LastProjects from '@/components/LastProjects.vue';
import Welcome from '@/components/Welcome.vue';

export default{
    components:{
        Welcome,
        Introduction,
        LastProjects,
        Comments
    }
}
</script>
<style scoped>
.main-class{
    padding:0;
}
</style>