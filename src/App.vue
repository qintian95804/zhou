<template>
  <div id="app">
    <!-- <van-nav-bar title="首页" left-text="返回" left-arrow>
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar> -->
    <router-view />
    <van-tabbar v-model="active">
      <van-tabbar-item to="home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="classify" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item to="shopping" icon="cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to="my" icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  components: {},
};
</script>

<style scoped>
</style>