<template>
    <div>
        <h3>Home</h3>
        <p>Store'da tutulan isim: {{ name }} </p>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const name = computed ( () => {
    return store.state.user.name
})
</script>