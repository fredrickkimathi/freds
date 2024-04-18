<template>
  <h2>Subaru Vehicles</h2>

  <div id="main" class="main">
    <div id="vitz">
      <img src="@/assets/images/legacy.jpeg" alt="Legacy" class="legacy">
    </div>
    <div id="t-text">
      <h2>Subaru Legacy Description</h2>
      <p>The 2.5-liter, flat-four turbo propelling the 2.5GT generates a robust 265 horsepower and 258 pound-feet of torque, enough to attain 60 mph in the low-five-second range. The naturally aspirated version—standard in the 2.5i—is much less spirited, at 170 horsepower and 170 pound-feet of torque.</p>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex; /* Make the container a flexbox */
  justify-content: space-evenly; /* Distribute content evenly */
  padding: 50px;
}
.legacy{
  height: 250px;
  width:300px;
}
</style>
