    <template>
  <transition-group name="fade">
    <slot></slot>
  </transition-group>
</template>
    
    <script type='text/ecmascript-6'>
export default {
  data() {
    return {};
  }
};
</script>
    
    <style  lang='scss'>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>