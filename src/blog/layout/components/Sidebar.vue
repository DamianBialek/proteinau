<template>
    <aside>
        <header class="categories-header">
            KATEGORIE
        </header>
        <ul class="list-group">
            <router-link :to="{name: 'ArticlesFromCategory', params: {id: category.id}}" tag="li" active-class="active" v-for="category in categories" :key="category.id" class="list-group-item">
                <a>{{category.name}}</a>
            </router-link>
        </ul>
    </aside>
</template>

<script>
    export default {
        name: "Sidebar",
        data(){
            return {
                categories: {},
                loading: false
            }
        },
        created(){
            this.loading = true
        },
        mounted(){
            this.loadCategories()
        },
        methods:{
            loadCategories(){
                this.$api.fetchCategories().then(response => {
                    this.categories = response
                    this.loading = false
                })
            }
        }

    }
</script>

<style lang="scss">
.categories-header{
    font-weight: bold;
}
.list-group-item{
    font-size: 1rem;
    border: none;

    &.active{
        background-color: #70C14A;

        a{
            color: #fff;
        }

        &:hover{
            a{
                color: #000;
            }
        }
    }

    a{
        color: #000;

        &:hover{
            color: #70C14A;
            text-decoration: none;
            border-bottom: 2px solid #70C14A;
        }
    }
}
</style>