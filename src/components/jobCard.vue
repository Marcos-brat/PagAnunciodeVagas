<script>
export default {
    name: 'jobCard',
    props: {
        ['cargo']:String,
        ['cidade']:String,
        ['estado']:String,
        ['conhecimentos']:String,
        ['formacao']:String,
        ['jornada']:String,
        ['logo']:String,
        ['regime']:String,          
        ['remuneracao']:String,
        ['requisitos']:String,
        ['id']:String,
    },
    
}
</script>

<template>
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src="{{logo}}.png" alt="Logomarca" style="width:300px;height:300px;">
                <p>{{cargo}}</p>
                <p>{{regime}}</p>
                <p>{{cidade}}</p>
                <p>{{estado}}</p>
            </div>
            <div class="flip-card-back">
                <p>{{remuneracao}}</p>
                <p>{{conhecimentos}}</p>
                <p>{{formacao}}</p>
                <p>{{jornada}}</p>
                <p>{{requisitos}}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.flip-card {
    background-color: transparent;
    width: 300px;
    height: 200px;
    border: 1px solid #f1f1f1;
    perspective: 1000px;
    /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    /* Safari */
    backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
    background-color: #bbb;
    color: black;
}

/* Style the back side */
.flip-card-back {
    background-color: dodgerblue;
    color: white;
    transform: rotateY(180deg);
}
</style>