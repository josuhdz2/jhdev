<template>
    <div class="container">
        <div class="text">
            <div>
                <div class="tag font-10 font-medium">Desarrollador Full Stack</div>
                <h1 class="font-medium font-50 text-light">Algún problema?</h1>
                <h1 class="font-medium font-50 text-light">Muéstrame el código.</h1>
                <p class="font-light font-20 text-light">Diseño funcional, desarrollo eficiente.</p>
            </div>
            <div>
                <a class="font-30 text-green font-regular">Hablemos!</a>
            </div>
        </div>
        <div class="image">
            <div></div>
        </div>
    </div>
</template>
<script>
export default{
    //
}
</script>
<style scoped>
.container{
    min-height: 90vh;
    background-color: var(--my-background-light);
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 3rem;
    padding-bottom: 3rem;
}
.container>*{
    width: 100%;
    display: flex;
    flex-direction: column;
}
.image{
    align-items: end;
}
.text>*{
    margin: 3rem 0;
}
.image div{
    background-image: url('@/assets/images/header-image.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 2rem;
    width: 80%;
    aspect-ratio: 1/1;
}
.tag{
    background-color: var(--my-green);
    display: inline-block;
    padding: 0.5rem 2rem;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
}
@media(max-width:900px){
    .container{
        min-height: 60vh;
        flex-direction: column;
    }
    .image{
        align-items: center;
        display: none;
    }
}
</style>