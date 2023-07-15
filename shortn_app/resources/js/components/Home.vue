<template>
   <div class="row">
      <LinksList></LinksList>
      <CreateLink></CreateLink>

   </div>
</template>

<script setup>
import LinksList from './LinksList.vue';
import CreateLink from './CreateLink.vue';
import { provide } from 'vue';
provide('user_id', props.user_id);
const props = defineProps({
   user_id: {
      type: Number,
      required: true
   }
});
</script>

<style></style>