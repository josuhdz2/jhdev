<template>
    <div class="container">
        <div class="blocks">
            <Card title="Back-end" text="Desarrollo de la lógica del negocio para la construcción de un servicio optimizado y escalable." :years="3" zIndex="3">
                <NodeJS :height="48" :width="48"/>
            </Card>
            <Card title="Front-end" text="Hacer de tu diseño, algo totalmente funcional y listo para colocar en la web." :years="4" zIndex="2">
                <HTML :height="48" :width="48"/>
            </Card>
            <Card title="DevOps" text="Hacer de tu diseño, algo totalmente funcional y listo para colocar en la web." :years="4" zIndex="1">
                <Docker :height="48" :width="48"/>
            </Card>
        </div>
        <div class="info">
            <div>
                <label class="text-light font-light font-10">Introducción</label>
                <h1 class="font-50 text-light font-medium">Hola! Soy Josue Hernández</h1>
            </div>
            <div>
                <span class="font-15 font-medium text-light">"La tecnología es solo una herramienta, las personas son quienes hacen que las cosas sucedan"</span>
                <span class="font-15 font-medium text-light"> - Tim Berners-Lee</span>
                <p class="font-light font-15 text-light">
                    Desde mi inicio en la programación, hace aproximadamente 4 años, he estado involucrado como 
                    desarrollador Full-Stack en muchos proyectos, tanto escolares como profesionales. En muchos he 
                    aportado mis habilidades como líder y otras como experimentado en la codificación y desarrollo de 
                    servicios. También he sido capaz de desempeñar roles relacionados a la ciberseguridad y consultoría.
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import Card from '@/components/Card.vue';
import NodeJS from '@/components/icons/NodeJS.vue';
import HTML from '@/components/icons/HTML.vue';
import Docker from '@/components/icons/Docker.vue';

export default{
    components:{
        Card,
        NodeJS,
        HTML,
        Docker
    }
}
</script>
<style scoped>
.container{
    height: 100vh;
    background-color: var(--my-background);
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4rem;
}
.container>*{
    width: 100%;
}
.blocks{
    display: flex;
    gap: 1rem;
    flex-direction: column;
}
.info{
    display: flex;
    flex-direction: column;
    gap: 3rem;
}
</style>