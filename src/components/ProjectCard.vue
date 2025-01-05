<template>
    <div class="card-body">
        <div class="card-header">
            <h1 class="text-light font-regular font-30">titulo</h1>
            <div class="card-tags text-light font-light font-10">
                <span>NodeJS</span>
                <span>VueJS</span>
            </div>
        </div>
        <div class="card-image">
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
.card-body{
    background-color: var(--my-background-light);
    border-radius: 1rem;
    padding: 2rem;
}
.card-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.card-tags{
    display: flex;
    gap:0.5rem
}
.card-tags>*{
    padding: 0.5rem;
    background-color: var(--my-grey);
    border-radius: 0.5rem;
}
.card-image div{
    margin-top: 3rem;
    background-color: aqua;
    border-radius: 0.1rem;
    aspect-ratio: 9/5;
}
</style>