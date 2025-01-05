<template>
    <div class="icons">
        <div class="github">
            <GitHub :width="30" :height="30"/>
            <span class="font-20 text-light font-medium">@josuhdz2</span>
        </div>
        <div class="mail">
            <Mail :width="30" :height="30"/>
        </div>
    </div>
</template>
<script>
import GitHub from '@/components/icons/GitHub.vue';
import Mail from '@/components/icons/Mail.vue';
export default{
    components:{
        GitHub,
        Mail
    }
}
</script>
<style scoped>
.icons{
    display: flex;
    flex-direction: row;
    gap:1.5rem;
}
.github{
    display: inline-flex;
    align-items: center;
}
.mail{
    width: 50px;
    border-radius: 50%;
    aspect-ratio: 1/1;
    background-color: var(--my-background);
    position:relative;
}
.mail>*{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>