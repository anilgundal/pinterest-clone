<template>
  <div class="">
    <TopNav />
  <div class="px-20 w-full flex flex-wrap">
    <div v-for="(arr, index) in mansoryItems" :key="index" class="w-1/5">
      <div v-for="(item, i) in arr" :key="i" class="w-full">
        <div class="w-full p-2">
          <Cards :src="`${item.src}`" :board="item.recommended" class="w-full h-full"/>
          <div class="text-sm leading-tight pt-2">
            <p class="font-bold"> {{item.title}} </p>
            <p> {{item.user}} </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>

import { ref, reactive, computed } from "vue";
import Cards from "./components/Card.vue";

const cardItems = reactive([
  {src: '/src/assets/images/1.jpg',   title: 'PC Setup',          user: 'User-1',     recommended: 'Computer'},
  {src: '/src/assets/images/2.jpg',   title: 'Çiçek',             user: 'User-1',     recommended: 'Flowers'},
  {src: '/src/assets/images/3.jpg',   title: 'Rick & Morty',      user: 'User-2',     recommended: 'TV Show'},
  {src: '/src/assets/images/4.jpg',   title: 'Breaking Bad',      user: 'User-2',     recommended: 'TV Show'},
  {src: '/src/assets/images/5.jpg',   title: 'Illustration',      user: 'User-4',     recommended: 'Graphic'},
  {src: '/src/assets/images/6.jpg',   title: 'Illustration',      user: 'User-4',     recommended: 'Graphic'},
  {src: '/src/assets/images/7.jpg',   title: 'Birds',             user: 'User-4',     recommended: 'Photography'},
  {src: '/src/assets/images/8.jpg',   title: 'Birds',             user: 'User-4',     recommended: 'Photography'},
  {src: '/src/assets/images/9.jpg',   title: 'Birds',             user: 'User-4',     recommended: 'Photography'},
  {src: '/src/assets/images/10.jpg',  title: 'Birds',             user: 'User-4',     recommended: 'Photography'},
  {src: '/src/assets/images/11.jpg',  title: 'Dune',              user: 'User-3',     recommended: 'Cinema'},
  {src: '/src/assets/images/12.jpg',  title: 'Interstellar',      user: 'User-3',     recommended: 'Cinema'},
  {src: '/src/assets/images/13.jpg',  title: 'Rick & Morty',      user: 'User-2',     recommended: 'TV Show'},
  {src: '/src/assets/images/14.jpg',  title: 'Rick & Morty',      user: 'User-2',     recommended: 'TV Show'},
  {src: '/src/assets/images/15.jpg',  title: 'Breaking Bad',      user: 'User-2',     recommended: 'TV Show'},
  {src: '/src/assets/images/16.jpg',  title: 'Güzellik',          user: 'User-1',     recommended: 'Beauty'},
  {src: '/src/assets/images/17.jpg',  title: 'Hannibal Lector',   user: 'User-3',     recommended: 'TV Show'},
]);

const mansoryItems = computed( ()=>{
var length = Math.ceil(cardItems.length / 5);
  const result = new Array(length)
  .fill()
  .map( (i) => {
      return cardItems.splice(0, length)
  })
  
  // console.log('result :>> ', result);
  return result
});



// subArr();
</script>