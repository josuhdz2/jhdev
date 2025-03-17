<template>
    <Teleport to="body">
        <div class="background" v-if="status">
            <div class="offcanvas">
                <div class="close" @click="$emit('close')">
                    <Close :width="30" :height="30"/>
                </div>
                <NavLink name="Servicios" route="/services"/>
                <NavLink name="Proyectos" route="/projects"/>
                <NavLink name="Contacto" route="/contact"/>
                <div class="icons">
                    <NavbarIcons/>
                </div>
            </div>
        </div>
    </Teleport>
</template>
<script>
import Close from '@/components/icons/Close.vue';
import NavbarIcons from '@/components/NavbarIcons.vue';
import NavLink from './NavLink.vue';

export default{
    props:{
        status:{type:Boolean, required:true}
    },
    components:{
        NavbarIcons,
        Close,
        NavLink
    }
}
</script>
<style scoped>
.background{
    position: fixed;
    top:0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 15;
    background-color: #00000086;
}
.offcanvas{
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    width: 80vw;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:3rem;
}
.close{
    position: absolute;
    top: 5%;
    right: 5%;
    width:80%;
    display: flex;
    justify-content: end;
}
.icons{
    position: absolute;
    bottom: 5%;
    right: 50%;
    transform: translateX(50%);
}
</style>