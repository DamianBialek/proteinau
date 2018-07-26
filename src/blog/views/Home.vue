<template>
    <Articles :articles = "articles" :loading = "loading"></Articles>
</template>

<script>
    import Articles from '@/blog/modules/articles/Articles'
    export default {
        name: "Home",
        components: {Articles},
        data() {
            return {
                articles: {},
                loading: false
            }
        },
        methods: {
            loadArticles: function(){
                this.$api.fetchArticles().then(response => {
                    this.articles = response
                    this.loading = false
                })
            }
        },
        created(){
            this.loading = true
        },
        mounted: function() {
            this.loadArticles()
        }
    }
</script>

<style>

</style>