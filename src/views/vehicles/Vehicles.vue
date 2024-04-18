<template>
  <h1>Vehicles</h1>
<div v-for="vehicle in vehicles" :key="vehicle.id" class="vehicle">
<router-link :to="{name: 'VehicleDetails', params: { id: vehicle.id}}" >
    <h2>{{vehicle.model}}</h2>
</router-link>
</div>

</template>

<script>
export default {
    data(){
        return{
            vehicles:[
                {model: 'Toyota', id:1, type: 'vits'},
                {model: 'Subaru', id:2, type: 'legacy'},
                {model: 'Mazda', id:3, type: 'demio'},
            ]
        }
    }

}
</script>

<style>
.vehicle h2{
    background: #f3f3f3;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    color: #444;
}

.vehicle h2:hover{
    background: #c9e9ba;
}
.vehicle a{
    text-decoration: none;
}

</style>