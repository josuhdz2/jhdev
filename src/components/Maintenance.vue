<template>
    <div class="container maintenance">
        <div class="text">
            <h1 class="font-medium font-50 text-light">Oops! Estamos afinando los motores!</h1>
            <p class="font-light font-15 text-light">Nuestro sitio web se ha ido a tomar un café mientras hacemos algunos ajustes y mejoras.</p>
            <p class="font-light font-15 text-light">No te preocupes, no lo dejaremos descansar demasiado. ¡Pronto volverá más brillante, rápido y listo para!</p>
            <p class="font-light font-15 text-light">Mientras tanto, puedes practicar tu paciencia o imaginar cómo se verá nuestro sitio renovado.</p>
            <p class="font-light font-15 text-light">¡Nos vemos pronto!</p>
        </div>
        <div class="icon">
            <MaintenanceIcon/>
        </div>
    </div>
</template>
<script>
import MaintenanceIcon from './icons/MaintenanceIcon.vue';

export default{
    components:{
        MaintenanceIcon
    }
}
</script>
<style scoped>
.maintenance{
    height: 80vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: var(--my-background-light);
}
.maintenance>*{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.icon{
    align-items: center;
}
@media(max-width:900px){
    .maintenance{
        height: 90vh;
        grid-template-columns: 1fr;
    }
}
</style>