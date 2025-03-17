<template>
    <div class="container">
        <div class="footer-title">
            <h1 class="font-regular font-30 text-light">Construyamos algo increíble!</h1>
            <div class="link-text">
                <h1 class="font-regular font-30 text-light">Comienza diciendo: <a class="text-green">Hola!</a></h1>
            </div>
        </div>
        <div class="text-light info">
            <span class="font-15 font-light">Información</span>
            <span class="font-15 font-regular">Tequisquiapan, Querétaro, C.P. 76750, Mexico.</span>
            <h1 class="font-light font-40">contacto@herdev.com</h1>
        </div>
        <div class="footer-foot">
            <div>
                <span class="font-medium text-light font-20">Josue</span> <span class="font-light text-light font-20">Hernández</span>
            </div>
            <div>
                <span class="font-light text-light font-15">@ 2024 Todos los derechos reservados</span>
            </div>
        </div>
        <div class="social">
            <GitHub :height="24" :width="24"/>
            <WhatsApp :height="24" :width="24"/>
        </div>
    </div>
</template>
<script>
import GitHub from './icons/GitHub.vue';
import WhatsApp from './icons/WhatsApp.vue';

export default{
    components:{
        GitHub,
        WhatsApp
    }
}
</script>
<style scoped>
.container{
    background-color: var(--my-background);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap:3rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
}
.footer-title{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.footer-foot{
    display: flex;
    justify-content: space-between;
}
.link-text h1{
    display: inline-block;
}
.info{
    display: flex;
    flex-direction: column;
    gap:1rem
}
.social{
    display:flex;
    gap: 2rem;
}
@media(max-width:900px){
    .container{
        grid-template-columns: 1fr;
    }
    .footer-foot{
        order:5;
    }
    .social{
        justify-content: center;
    }
}
</style>