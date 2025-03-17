<template>
    <div class="container">
        <div>
            <div class="projects-title">
                <h1 class="font-50 font-medium text-light">Últimos proyectos</h1>
                <p class="font-15 font-medium text-light">Soluciones tecnológicas y de innovación</p>
            </div>
            <ProjectCard/>
            <ProjectCard v-if="mobile"/>
            <div class="link-page">
                <h1 class="text-green font-30 font-medium">Todos los proyectos</h1>
                <p class="text-light font-medium font-15">No todos los proyectos poseen repositorios públicos debido a acuerdos de privacidad.</p>
            </div>
        </div>
        <div v-if="!mobile">
            <ProjectCard/>
            <ProjectCard/>
        </div>
    </div>
</template>
<script>
import ProjectCard from './ProjectCard.vue';

export default{
    components:{
        ProjectCard
    },
    data(){
        return{
            mobile:false,
            screen:window.innerWidth
        }
    },
    mounted(){
        this.setMobile()
        window.addEventListener("resize", this.setMobile);
    },
    methods:{
        setMobile(){
            screen=window.innerWidth
            if(screen<=1000){
                return this.mobile=true
            }
            this.mobile=false
        }
    }
}
</script>
<style scoped>
.container{
    background-color: var(--my-background);
    padding-top: 4rem;
    padding-bottom: 4rem;
    display: flex;
    flex-direction: row;
    gap:4rem;
}
.container>*{
    width:100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
}
</style>