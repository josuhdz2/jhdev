<template>
    <div class="card" :style="{zIndex}">
        <div class="card-head">
            <h1 class="text-green font-30 font-medium">{{ title }}</h1>
            <slot/>
        </div>
        <p class="text-light font-10 font-xlight">{{ text }}</p>
        <label class="text-light font-10 font-regular">{{ years }} años EXP</label>
    </div>
</template>
<script>
export default{
    props:{
        title:{type:String, required:true},
        text:{type:String, required:true},
        years:{type:Number, required:true},
        zIndex:{type:Number, required:true}
    }
}
</script>
<style scoped>
.card{
    background-color: var(--my-background-light);
    padding: 2rem;
}
.card:hover{
    box-shadow: -30px -30px 40px 0px #0000003c;
}
.card-head{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.card p{
    margin: 1rem 0;
    position: relative;
}
</style>