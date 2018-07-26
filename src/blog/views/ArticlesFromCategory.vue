<template>
    <Articles :articles = "articles" :loading = "loading"></Articles>
</template>

<script>
    import Articles from '@/blog/modules/articles/Articles'
    export default {
        name: "ArticlesFromCategory",
        components: {Articles},
        data() {
            return {
                articles: {},
                loading: false
            }
        },
        methods: {
            loadArticles: function(){
                this.loading = true
                this.$api.fetchArticlesFromCategory(this.$route.params.id).then(response => {
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
        },
        watch: {
            '$route' (to, from) {
                this.loadArticles()
            }
        }
    }
</script>

<style>

</style>