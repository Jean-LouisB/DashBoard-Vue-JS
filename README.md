# dashboard

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


template de composant :


<template>
    <h1>Blog List is in the place</h1>
</template>

<script>
import BlogPost from "../components/BlogPost";

export default {
    name: "BlogListPost",
    data() {
        return {

        }
    },
    component: {
        BlogPost,
    }
}

</script>
<style>
</style>