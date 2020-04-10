<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <button @click="navigateToHome" class="btn btn-primary">Go to Home</button>
    </div>
</template>

<script>
export default {
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