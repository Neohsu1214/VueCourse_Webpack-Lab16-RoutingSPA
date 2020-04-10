<template>
    <div>
        <!-- 小小介紹了一下 bootsrap怎麼套用！ bootstrap首頁 -> component -> navs -> pill 拷貝來用就好了-->
        <ul class="nav nav-pills">
            <li class="nav-item">
                <a class="nav-link active" href="https://google.com">Google</a>
            </li>
            <!-- 以上是bootstrap原有的範例，以下 比較一下 vue-router 的寫法 -->
            <!-- 連結不再是<a href>而是<router-link to> -->
            <li class="nav-item">
                <router-link to="/">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/user">User</router-link>
            </li>
            
            <!-- 使被點到的項目按鈕顏色不一樣，必須將li的宣告放進router-link讓他代為產生dom物件，並告知被點到的 class名稱，及用 exact初始化哪一項被點到 -->
            <router-link to="/" tag="li" active-class="active" exact><a>Home(RL)</a></router-link>
            <router-link to="/user" tag="li" active-class="active"><a>User(RL)</a></router-link>
        </ul>        
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>