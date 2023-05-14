<template>
    <div class="container"></div>
    <section id="listPost">
        <button v-show="!newPostShow" @click="newPostShowToggle()">Nouveau Post</button>
        <div v-show="!newPostShow" v-for="(post, index) in listPost" :key="index" class="post">
            <BlogPost :postDetail="post" @deletePost="deleteThisPost($event)"></BlogPost>
           
        </div>
        <NewPost v-if="newPostShow" @addNew="addNewPost($event)"></NewPost>
    </section>
</template>

<script>
import BlogPost from "../components/BlogPost";
import NewPost from "@/components/NewPost.vue";


export default {
    name: "BlogListPost",
    data() {
        return {
            listPost: [],
            newPostShow:false,
            nextId: 4
        }
    },
    components: {
        BlogPost,
        NewPost
    },
    methods:{
        deleteThisPost(event){
            this.listPost=this.listPost.filter((post)=> post.id != event)
        },
        newPostShowToggle(){
            this.newPostShow=!this.newPostShow
        },
        addNewPost(post){
            post.id = this.nextId
            this.nextId++
            this.listPost.push(post)
            this.newPostShow=false
        }
    },
    created(){
        this.listPost= require('../assets/dataBlog.json');
    }

}

</script>
<style scoped>
button{
    height: 30px;
    width: 50%;
}
.container{
    margin-top: 90px;
}
#listPost {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.post {
    border: 1px solid black;
    width: 50%;
    margin-top: 20px;

}
</style>