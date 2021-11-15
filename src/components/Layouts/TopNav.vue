<template>
    <div class="px-3 py-4 flex items-center justify-between">
        <div class="flex item-center mr-3">
            <button class="rounded-full hover:bg-light p-3 flex items-center justify-center">
                <img src="../../assets/images/pinterest_logo.png" alt="Pinterest Logo" srcset="" class="h-8 w-8">
            </button>
            <button v-for="item in TabItems" :key="item.key" @click="selectedTab = item.key"  :class="`${selectedTab === item.key ? 'bg-dark text-white' : 'text-dark hover:bg-light'} rounded-full py-3 px-4 font-semibold`"> {{ item.name }} </button>
        </div>
        <div class="flex-grow relative">
            <span class="material-icons absolute mt-3 ml-3 text-muted">search</span>
            <input type="text" class="w-full hover:bg-lightHover text-muted rounded-full bg-light py-3 pr-3 pl-10" placeholder="Ara">
        </div>
        <div class="flex item-center">
            <button class="relative rounded-full hover:bg-light flex item-center justify-center px-3 py-2">
                <span class="material-icons text-3xl text-muted">notifications</span>
                <div class="rounded-full h-5 w-5 bg-primary text-white flex items-center justify-center absolute mb-5 ml-5">4</div>
            </button>
            <button class="relative rounded-full hover:bg-light flex item-center justify-center px-3 py-2">
                <span class="material-icons text-3xl text-muted">textsms</span>
                <div class="rounded-full h-5 w-5 bg-primary text-white flex items-center justify-center absolute mb-5 ml-5">2</div>
            </button>
            <button class="rounded-full hover:bg-light p-3 flex items-center justify-center">
                <img src="../../assets/images/profile.jpg" alt="Pinterest Logo" srcset="" class="h-8 w-8 rounded-full">
            </button>
            <button class="w-6 h-6 hover:bg-light rounded-full flex items-center justify-center mt-4">
                <span class="material-icons text-muted">expand_more</span>
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const TabItems = ref([
    {name: 'Anasayfa', key:'home'},
    // {name: 'Bugün', key:'today'}
]);
const selectedTab = ref('home');

</script>