<template>
   <div class="col-md-4">
      <div class="card my-4">
         <div class="card-body">
            <h4 class="mb-2 border p-2 rounded" style="text-align: center;">
               User links
            </h4>
            <div class="list-group">
               <li v-for="link in data.links" :key="link.id" class="list-group-item list-group-item-action"
                  style="cursor: pointer;">
                  <div class="flex w-100 justify-content-between">
                     <h6>{{ link.s_url }}</h6>
                     <small>{{ link.created_at }}</small>
                  </div>
                  <div class="mb-1">
                     <p>
                        <span class="fw-bold">
                           {{ link.visits }}
                           <i class="fas fa-eye"></i>
                        </span>
                     </p>
                  </div>
                  <button @click="copy(link.s_url)" class="btn btn-dark btn-sm"><i class="fas fa-copy"></i></button>
               </li>
            </div>
            <div class="card-footer bg-white">
               <div class="d-flex justify-content-between">
                  <button @click="prev(user_id)" class="btn btn-sm btn-link">
                     <i class="fas fa-chevron-left"></i>
                     <i class="fas fa-chevron-left"></i>
                  </button>
                  <button @click="next(user_id)" class="btn btn-sm btn-link">
                     <i class="fas fa-chevron-right"></i>
                     <i class="fas fa-chevron-right"></i>
                  </button>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>
import { inject, onMounted, reactive, computed } from 'vue';
import axios from 'axios';

const user_id = inject('user_id');
const data = reactive({
   links: [],
   current_page: 1,
});

const fetchLinks = async () => {
   try {
      const response = await axios.get(`/api/user/urls/${user_id}`);
      data.links = response.data.data;
   } catch (error) {
      console.log(error);
   }
};

const copy = (s_url) => {
   navigator.clipboard.writeText(`127.0.0.1:8000/visit/${s_url}`);
   alert('Copied!');
};

const next = async () => {
   try {
      if (data.links.length / 3 < data.current_page) return;
      const response = await axios.get(`/api/user/urls/${user_id}?page=${data.current_page + 1}`);
      data.links = response.data.data;
      data.current_page += 1;
   } catch (error) {
      console.log(error);
   }
};

const prev = async () => {
   try {
      if (data.current_page === 1) return;
      const response = await axios.get(`/api/user/urls/${user_id}?page=${data.current_page - 1}`);
      data.links = response.data.data;
      data.current_page -= 1;
   } catch (error) {
      console.log(error);
   }
};





onMounted(async () => {
   await fetchLinks();

});
</script>

<style></style>
