<template>
    <div>
        <h3>Some User Details</h3>
        <p>User Loaded! ID: {{ $route.params.id }}</p>
        <router-link 
            tag="button" 
            :to="'/user/' + $route.params.id + '/edit' + '?locale=en&q=100' "
            class="btn btn-primary"
        >Edit User</router-link>

        <!-- 以命名路徑的方式進行(要先定義在 routes.js) -->
        <router-link 
            tag="button" 
            :to="link"
            class="btn btn-info"
        >Edit User</router-link>
        
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            link: { 
                name: 'userEdit', 
                params: { 
                    id: $route.params.id 
                }, 
                query: { 
                    locale: 'tw', 
                    q: 200
                }
            }
        }
    }
}
</script>