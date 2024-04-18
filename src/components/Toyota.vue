<template>
  <h2>Toyota Vehicles</h2>

  <div id="main" class="main">
    <div id="vitz">
      <img src="@/assets/images/vitz.jpeg" alt="vitz" class="vitz">
    </div>
    <div id="t-text">
      <h2>Toyota Vitz Description</h2>
      <p>(known as Toyota Yaris in some regions) is a subcompact hatchback car produced by the Japanese automaker Toyota. It has been a popular choice in many markets since its introduction in 1998.</p>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex; /* Make the container a flexbox */
  justify-content: space-between; /* Distribute content evenly */
  padding: 50px;
}
.vitz{
  height: 250px;
  width:300px;
}
</style>
