<template>
  <button :class="[{ btn }, verifyColor()]">
    {{ title }}
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: String,
    colorBtn: {
      type: String,
    },
  },
  data() {
    return {
      color: '',
      btn: true,
    }
  },

  methods: {
    verifyColor() {
      if (this.colorBtn === 'purple') {
        return (this.color = 'purple')
      } else if (this.colorBtn === 'pink') {
        return (this.color = 'pink')
      } else if (this.colorBtn === 'white') {
        return (this.color = 'white')
      } else if (this.colorBtn === 'red') {
        return (this.color = 'red')
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.pink {
  background: #f07272;
}
.purple {
  background: #6a6af9;
}
.white {
  background: #505050b5;
  color: #ffc501;
  font-size: 24px;
  font-weight: 600;
  /* border: 2px solid #69E384; */
  width: 238px;
  height: 53px;
}
button {
  color: white;
  background-color: #040426;
  width: 151px;
  height: 38px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-weight: 500;
  letter-spacing: 1px;

  &:hover {
    transform: translateY(-1px);
  }
}
</style>