<template>
    <div v-if="!loading && articles.length">
        <article class="card" v-for="article in articles" :key="article.id">
            <router-link :to="{name: 'Article', params: {slug: article.slug}}" class="article-img">
                <img class="card-img-top" src="http://www.gstatic.com/webp/gallery/2.jpg" alt="Card image cap">
            </router-link>
            <div class="card-body">
                <router-link :to="{name: 'Article', params: {slug: article.slug}}"class="card-title article-link"><h2>{{article.title}}</h2></router-link>
                <span class="article-meta">{{article.category_name}}</span>
                <p class="card-text">{{article.text.substr(0, 200)+"..."}}</p>
                <router-link :to="{name: 'Article', params: {slug: article.slug}}" class="btn article-link-btn">Czytaj więcej</router-link>
            </div>
        </article>
    </div>
    <div v-else-if="articles.length < 1">
        <h3 class="text-center">Upss! Nic nie znaleziono</h3>
    </div>
    <div v-else class="text-center">
        <img src="@/assets/loading.gif" />
    </div>
</template>

<script>
    export default {
        name: "Articles",
        props:{
            articles: {
                required: true
            },
            loading: false
        }
    }
</script>

<style lang="scss">
.card{
    border: none;
    margin: 1rem 0;
    padding: 30px 0;
    border-bottom: 1px solid #bbb;

    .article-img{
        max-height: 400px;
        overflow: hidden;
        cursor: pointer;

        img.card-img-top{
            height: 100%;
            transition: transform .6s ease-in-out;

            &:hover{
                transform: scale(1.2);
            }
        }
    }

    &:first-child{
        padding-top: 0;
    }

    .article-link {
        cursor: pointer;
        transition: color .15s ease-in-out;
        display: block;
        color: #000;
        margin: 0;

        &:hover{
            color: #70C14A;
            text-decoration: none;
        }

        h5{
            margin: 0;
        }
    }

    .article-meta{
        font-size: 0.85rem;
    }

    .card-title{
        h2 {
            font-size: 1.75rem;
        }
    }

    .card-text{
        margin: 0;
        padding: 1rem 0;
    }

    .article-link-btn{
        background-color: #70C14A;
        color: #fff;

        &:hover{
            background-color: #309006;
        }
    }
}
</style>