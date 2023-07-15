<template>
  <div class="col-md-7">
    <div class="row">
      <div class="card my-4">
        <div class="card-body">
          <div class="mb-2" v-if="data.error">
            <ul v-for="(errorArray, index) in data.error" :key="index" class="list-group">
              <li v-for="(error, index) in errorArray" :key="index"
                class="listgroup-item bg-danger text-white mb-1 p-2 rounded">
                {{ error }}
              </li>
            </ul>
          </div>
          <form @submit.prevent="StoreUrl">
            <div class="form-group mb-2">
              <input v-model="data.url.data.f_url" type="text" class="form-control" placeholder="Full Url">
            </div>
            <div class="form-group">
              <button class="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <h2>URL Visit Statistics</h2>
        <p>Total Visits: {{ totalVisits }}</p>
        <h3>Most Visited URL:</h3>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Short URL</th>
              <th>Visits</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="link in data.links" :key="link.id">
              <td>{{ link.s_url }}</td>
              <td>{{ link.visits }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</template>
  
<script setup>
import { onMounted, inject, reactive, ref } from 'vue';
import axios from 'axios';




const user_id = inject('user_id');
const data = reactive({
  url: {
    data: {
      f_url: '',
    },
  },
  error: null,
  links: [],
});


const StoreUrl = async () => {
  try {
    const response = await axios.post('/api/add/url', {
      f_url: data.url.data.f_url,
      user_id,
    });
    data.url = {
      data: {
        f_url: '',
      },
    };
    data.error = null;
  } catch (error) {
    data.error = error.response.data.errors;
  }
};
const totalVisits = ref(0);

const calculateTotalVisits = async () => {
  try {
    const response = await axios.get(`/api/user/${user_id}/total-visits`);
    totalVisits.value = response.data;
  } catch (error) {
    console.log(error);
  }
};
const mostVisitedURL = ref(''); // Define mostVisitedURL property

const calculateMostVisitedURL = async () => {
  try {
    const response = await axios.get(`/api/user/${user_id}/most-visited-url`);
    data.links = response.data;
  } catch (error) {
    console.log(error);
  }
};
onMounted(async () => {
  await calculateTotalVisits();
  await calculateMostVisitedURL();

});
</script>
  
<style></style>
  