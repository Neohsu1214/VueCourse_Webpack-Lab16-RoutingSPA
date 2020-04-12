<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Routing</h1>
                <hr>
                <app-header></app-header>
                <!-- App.vue加上 router-view 來告訴 vue-router 將頁面內容放在這邊 -->
                <router-view foo="123"></router-view>
                <!-- 可以在一個 route path中給定多個 components，讓不同component替換掉不同命名的 router-view -->
                <router-view name="bar"></router-view>
                <router-view name="bar2"></router-view> <!-- 有宣告但對應不到名字的 router-view 就不會顯示東東！ -->
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "./components/Header";

    export default {
        components: {
            appHeader: Header
        }
    }
</script>

<style>
</style>
