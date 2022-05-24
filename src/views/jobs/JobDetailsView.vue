<template>
  <section>
      <h1>
          Job Details page
      </h1>
      <p>The job id is {{id}}</p>
        <p>{{}}</p>
  </section>
</template>

<script>
// Accessing route params inside the component object
export default {
    props: ['id'],
    // data(){
    //     return{
    //         id: this.$route.params.id
    //     }
     
    // }

}
</script>

<style>

</style>