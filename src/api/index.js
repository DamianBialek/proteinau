import {url} from '@/config'
import Vue from 'vue'

export default {
    fetchArticles(){
        return Vue.http.get(url.articles).then(response => response.body)
    },
    fetchArticle(slug){
        return Vue.http.get(url.article+slug).then(response => response.body)
    },
    fetchCategories(){
        return Vue.http.get(url.categories).then(response => response.body)
    },
    fetchArticlesFromCategory(categoryId){
        return Vue.http.get(url.articlesFromCategory+categoryId).then(response => response.body)
    }
}