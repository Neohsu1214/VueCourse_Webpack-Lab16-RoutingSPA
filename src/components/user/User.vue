<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <p>Loaded ID: {{ userId }}</p>
        <button @click="navigateToHome" class="btn btn-primary">Go to Home</button>
    </div>
</template>

<script>
export default {
    // 有另外一種比較簡便的用法 props，詳見 Hello.vue
    data: function() {
        return {
            userId: this.$route.params.id // 取得 route 中參數的方法
        }
    },
    watch: {
        // 為了有效切換 route 傳進來的參數值，務必加上 watch 去監控 '$route'(to, from)！
        '$route': function(to, from) { // 也可以寫成 '$route'(to, from) {}
            this.userId = to.params.id; //to 跟 from 已經是 route物件，所以直接取用 params 即可
        }
    },
    methods: {
        navigateToHome: function() {
            // 在javascript的程式中，進行頁面切換的方法
            this.$router.push({ path: '/'}); //push是說把新的URL放進瀏覽器的 history 中，也可以簡寫成 this.$router.push('/'); 就好
        }
    }    
}
</script>

<style scoped>

</style>