<template>
    <header class="container">
        <div class="brand">
            <Logo/>
            <span class="font-medium text-light font-30">Josue</span>
            <span class="font-light text-light font-30">Hernández</span>
        </div>
        <div class="bars" @click="showMenu">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
        <nav class="navbar">
            <div class="menu">
                <NavLink name="Servicios" route="/services"/>
                <NavLink name="Proyectos" route="/projects"/>
                <NavLink name="Contacto" route="/contact"/>
            </div>
            <NavbarIcons/>
        </nav>
    </header>
    <div class="navbar-space"></div>
    <OffCanvas :status="menuStatus" @close="closeMenu"/>
</template>
<script>
import Logo from '@/components/icons/Logo.vue';
import NavbarIcons from '@/components/NavbarIcons.vue';
import OffCanvas from '@/components/OffCanvas.vue';
import NavLink from './NavLink.vue';

export default{
    data(){
        return{
            menuStatus:false
        }
    },
    components:{
        Logo,
        NavbarIcons,
        OffCanvas,
        NavLink
    },
    methods:{
        showMenu(){
            this.menuStatus=true
        },
        closeMenu(){
            this.menuStatus=false
        }
    }
}
</script>
<style scoped>
header{
    background-color: var(--my-background-light);
    height: 10vh;
    display: flex;
    align-items: center;
    gap:2rem;
    position:fixed;
    z-index: 10;
}
.navbar-space{
    height: 10vh;
}
.brand{
    display: flex;
    align-items: center;
    gap: 0.5rem;
}
.navbar{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
}
.menu{
    display: flex;
    align-items: center;
    gap: 1rem;
}
.bars{
    display: none;
}
@media(max-width:800px){
    header{
        justify-content: space-between;
    }
    .navbar{
        width: 0%;
        display: none;
    }
    .bars{
        display: block;
        cursor: pointer;
    }
    .bars .line{
        width: 30px;
        height: 3px;
        background-color: white;
        border-radius: 2px;
        margin: 6px 0px;
    }
}
</style>