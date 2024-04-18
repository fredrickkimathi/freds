<template>
  <div class="home">
  <h1>HomePage</h1>
  <div class="welcome">
  <p> Welcome to Fred's Vehicle catalog</p>
  <p>Get information about various cars easily</p>
  </div>
  
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {}
}
</script>

<style scoped>
.welcome {
  background: #f4f4f4;
  padding: 30px;
  margin: 30px;
}
.home h1{
  padding: 10px;
  margin: 30px;
  border: 1px solid green;

}
 .home h1:hover{
  background: #dddd;
 }
</style>
