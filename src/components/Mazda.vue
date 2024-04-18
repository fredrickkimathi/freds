<template>
  <h2>Subaru Vehicles</h2>

  <div id="main" class="main">
    <div id="vitz">
      <img src="@/assets/images/cx5.jpeg" alt="CX5" class="cx">
    </div>
    <div id="t-text">
      <h2>Mazda CX5 Description</h2>
      <p>Under the hood is a 187-hp inline-four engine with standard all-wheel drive. The optional 256-hp turbocharged 2.5-liter is the powertrain to get, but thankfully Mazda has decided against the popular CVT and instead uses a traditional six-speed automatic transmission, which sweetens the CX-5 driving experience.</p>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex; /* Make the container a flexbox */
  justify-content: space-evenly; /* Distribute content evenly */
  padding: 50px;
}
.cx{
  height: 250px;
  width:300px;
}
</style>
