<template>
    <div @mouseover="hover = true" @mouseleave="hover=false" class="relative">
        <img :src="src" class="rounded-lg" alt="">
        <div v-if="hover" class="absolute bg-dark opacity-50 inset-0 w-full h-full rounded-lg"></div>
        <div v-if="hover" class="absolute top-0 w-full h-full flex flex-col justify-between p-3">
            <div class="flex items-center justify-between">
                <button class="flex items-center">
                    <p class="font-semibold text-white"> {{board}} </p>
                    <span class="material-icons text-white">expand_more</span>
                </button>
                <button class="rounded-full py-3 px-5 text-white bg-primary font-semibold">Save</button>
            </div>
        </div>
        <div v-if="hover" class="absolute flex items-center  bottom-0 p-3 w-full">
            <button class="ml-auto mr-2 bg-white rounded-full w-8 h-8 text-dark opacity-75 hover:opacity-100 flex items-center justify-center">
                <span class="material-icons text-base font-semibold">ios_share</span>
            </button>
            <button class="bg-white rounded-full w-8 h-8 text-dark opacity-75 hover:opacity-100 flex items-center justify-center">
                <span class="material-icons text-base font-semibold">more_horiz</span>
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
const props = defineProps(['src','board']);
const hover = ref(false);

</script>