<template>
  <div>
    <component :is="selectedComponent" />
  </div>
</template>

<script>
import Toyota from '@/components/Toyota.vue'
import Subaru from '@/components/Subaru.vue'
import Mazda from '@/components/Mazda.vue'
export default {
  computed: {
    selectedComponent() {
      if (this.$route.params.id === '1') {
        return Toyota; // Import your specific component
      } else if (this.$route.params.id === '2') {
        return Subaru; // Import your specific component
      } else {
        return Mazda; // Default component for other IDs
      }
    },
  },
};
</script>
