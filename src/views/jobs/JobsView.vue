<template>
  <section>
    <h1>Jobs</h1>
    <div class="jobs" v-for="job in jobs" :key="job.id">
      <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
        <h2>{{ job.title }}</h2>
      </router-link>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      jobs: [
        { title: "Designer", id: 1, details: "wa manguo" },
        { title: "baker", id: 2, details: "wa makeki" },
        { title: "developer", id: 3, details: "wa Vue" },
      ],
    };
  },
};
</script>

<style scoped>
.jobs h2{
  background-color: rgb(243, 224, 224);
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}
.jobs h2:hover{
  background-color: #ddd
}

.jobs a{
  text-decoration:none;
}
</style>