<template>
    <h1>Ajouter un post</h1>
    <section>
        <div id="containerNewPost">
            <input type="text" v-model="author" placeholder="Auteur">
            <input type="text" v-model="titre" placeholder="Titre">
            <input type="text" v-model="date" placeholder="Date">
            <textarea type="text" v-model="contenu" placeholder="votre texte..."></textarea>
            <button @click="$emit('addNew', post)">Ajouter</button>
        </div>

    </section>
</template>
<script>
export default {
    name: "NewPost",
    data() {
        return {
            author: "",
            titre: "",
            contenu: "",
            date: ""
        }
    },
    computed: {
        post: function () {
            let newPost = {
                title: this.titre,
                content: this.contenu,
                createdAt: this.date,
                author: this.author,
                id: ""
            }
            return newPost
        }
    }
}
</script>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    width: 50%;
}

#containerNewPost {
    display: flex;
    flex-direction: column;
}

input {
    margin-bottom: 10px;
}

textarea {
    height: 150px;
    margin-bottom: 10px;

}</style>