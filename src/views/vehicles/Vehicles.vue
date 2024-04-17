<template>
  <h1>Vehicles</h1>
<div v-for="vehicle in vehicles" :key="vehicle.id">
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
                {model: 'toyota', id:1, type: 'vits'},
                {model: 'subaru', id:2, type: 'legacy'},
                {model: 'mazda', id:3, type: 'demio'},
            ]
        }
    }

}
</script>

<style>

</style>