<template>
  <div class="tabbar">
      <slot />
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    div.tabbar{
        width: 100%;
        height: 49px;
        background: #f7f7f7;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        box-shadow: 0 -2px 2px rgba(100, 100, 100, 0.2);
        display: flex;
        flex-direction: row;
        font-size: 11px;
    }
    
</style>