<template>
    <article v-bind:class="[likeIt > 0 ? 'backGreen' : likeIt == 0 ? 'neutral' : 'backRed']">
        <h2> {{ postDetail.title }} </h2>
        <p>By {{ postDetail.author }}, {{ postDetail.createdAt }}</p>
        <p id="monLaius">{{ postDetail.content }}</p>
        <p></p>
        <div class="boiteABoutons">
            <button @click="likePost()" class="btnVert">
                <span v-if="like == 1">{{ like }} personne aime.</span>
                <span v-else-if="like > 1">{{ like }} personnes aiment.</span>
                <span v-else>Like</span>
            </button>
            <button @click="disLakePost()" class="btnRouge">
                <span v-if="dislike == 1">{{ dislike }} personne n'aime pas.</span>
                <span v-else-if="dislike > 1">{{ dislike }} personnes n'aiment pas.</span>
                <span v-else>Dislike</span>
            </button>
            <button @click="$emit('deletePost', postDetail.id)">Delete</button>
        </div>


    </article>
</template>
<script>

export default {
    name: "BlogPost",
    props: ['postDetail'],
    data() {
        return {
            like: 0,
            dislike: 0
        }
    },
    methods: {
        likePost() {
            this.like++
        },
        disLakePost() {
            this.dislike++
        }
    },
    computed: {

        likeIt: function () {
            return this.like - this.dislike
        }
    }
}

</script>
<style scoped>
h2 {
    margin: 0;
    box-shadow: 2px 2px 5px rgb(0, 0, 0);
    border-radius: 5px;
    padding:10px 15px 20px 15px;
    background-color: rgba(255, 255, 255, 0.423);
}

button {
    width: 27%;
    height: 40px;
}

.btnVert {
    color: rgb(0, 85, 0);
}

.btnRouge {
    color: red;
}

article {
    width: 100%;
    padding: 10px;
    margin-top: 90;
}

.backGreen {
    background-color: rgba(47, 255, 68, 0.547);
}
.neutral{
    background-color: rgba(196, 194, 194, 0.476);
}
.backRed {
    background-color: rgba(255, 0, 0, 0.533);
}

.boiteABoutons {
    width: 100%;
    display: flex;
    justify-content: space-around;
}
#monLaius{
    box-shadow: 2px 2px 5px rgb(0, 0, 0);
    border-radius: 5px;
    padding:10px 15px 20px 15px;
    background-color: rgba(255, 255, 255, 0.423);
    text-align: justify;
}


</style>