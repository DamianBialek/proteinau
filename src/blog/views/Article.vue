<template>
    <article v-if="!loading">
        <header class="article-header">
            <h1>{{article.title}}</h1>
            <span class="article-date">{{article.date}}</span>
        </header>
        <div class="article-body mt-2 mb-2">
            <div class="article-thumbail">
                <img src="http://www.gstatic.com/webp/gallery/2.jpg" />
            </div>
            <div class="article-content">
                <p>{{article.text}}</p>
            </div>
        </div>
    </article>
    <div v-else class="text-center">
        <img src="@/assets/loading.gif" />
    </div>
</template>

<script>
    export default {
        name: "Article",
        data(){
            return {
                article: {},
                loading: false
            }
        },
        methods: {
            loadArticle: function(){
                this.$api.fetchArticle(this.$route.params.slug).then(response => {
                    this.article = response
                    this.loading = false
                })
            }
        },
        created(){
            this.loading = true
        },
        mounted: function () {
            this.loadArticle()
        }
    }
</script>

<style lang="scss">
header{
    h1{
        font-size: 2.15rem;
    }
    .article-date{
        color: #aaa;
        display: block;
    }
}
.article-body{
    .article-thumbail{
        height: 400px;

        img{
            width: 100%;
            height: 100%;
        }
    }

    .article-content{
        margin: 2rem 0;

        p{
            margin: 0;
        }
    }
}
</style>