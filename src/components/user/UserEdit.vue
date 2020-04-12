<template>
    <div>
        <h3>Edit the User</h3>
        <p>Locale: {{ $route.query.locale }}</p>
        <p>Q: {{ $route.query.q }}</p>
        <button class="btn btn-primary">Confirm</button>
        <div style="height: 700 px"></div> <!-- 故意製造一個高度，來測試 hash tag 的使用-->
        <p id="ancherTag">Some Extra Data</p>
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            confirmed: false
        }
    },
    // beforeReouteLeave 進行頁面內容的檢查後放行
    beforeRouteLeave (to, from, next) {
        if (this.confirmed) {
            next();
        } else {
            if (confirm('Are You Sure?')) {
                next();
            } else {
                next(false);
            }
        }
    }
}
</script>