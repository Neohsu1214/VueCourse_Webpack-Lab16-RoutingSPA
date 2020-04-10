<template>
    <div>
        <h3>Some User Details</h3>
        <p>User Loaded! ID: {{ $route.params.id }}</p>
        <router-link 
            tag="button" 
            :to="'/user/' + $route.params.id + '/edit' "
            class="btn btn-primary"
        >Edit User</router-link>

        <!-- 以命名路徑的方式進行 -->
        <router-link 
            tag="button" 
            :to="{ name: 'userEdit', params: { id: $route.params.id }}"
            class="btn btn-info"
        >Edit User</router-link>
        
    </div>
</template>