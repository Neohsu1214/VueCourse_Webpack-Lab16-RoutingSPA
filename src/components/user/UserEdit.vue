<template>
    <div>
        <h3>Edit the User</h3>
        <p>Locale: {{ $route.query.locale }}</p>
        <p>Q: {{ $route.query.q }}</p>
        <div style="height:700 px"></div> <!-- 故意製造一個高度，來測試 hash tag 的使用-->
        <p id="ancherTag">Some Extra Data</p>
    </div>
    
</template>