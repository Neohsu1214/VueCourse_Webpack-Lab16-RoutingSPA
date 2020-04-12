<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Routing</h1>
                <hr>
                <app-header></app-header>
                <transition name="slide" mode="out-in"> <!-- routing path 的切換也可以加上動畫！ -->
                    <!-- App.vue加上 router-view 來告訴 vue-router 將頁面內容放在這邊 -->
                    <router-view foo="123"></router-view>                
                </transition>
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
    /* 建立一個 transition 名為 slide 的classes */
    .slide-enter {
        /* transform: translateY(20px); 因為與slide-in 起始位置相同，可不用寫 */
    }
    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
    }
    .slide-leave {
        
    }
    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
    }

    @keyframes slide-in {
        from {
            transform: translateY(20px);
        }
        to {
            transform: translateY(0);
        }
    }
    @keyframes slide-out {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(20px);
        }
    }
</style>
