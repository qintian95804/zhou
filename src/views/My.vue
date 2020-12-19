<template>
  <div class="">
    <div style="background: #f37d0f">
      <img
        style="width: 100%; height: 100px"
        src="https://m.mi.com/static/img/bg.63c8e19851.png"
      />
      <img
        style="
          width: 60px;
          height: 60px;
          position: absolute;
          top: 20px;
          left: 20px;
        "
        src="https://m.mi.com/static/img/avatar.76a75b8f17.png"
      />
      <!-- <van-uploader
        style="
          width: 80px;
          height: 80px;
          position: absolute;
          top: 20px;
          left: 20px;
        "
        v-model="fileList"
        multiple
      /> -->
      <a
        style="position: absolute; left: 100px; top: 40px; color: #fff"
        href="/register"
        >登录 /</a
      >
      <a
        style="position: absolute; left: 145px; top: 40px; color: #fff"
        href="/sing"
        >注册</a
      >
    </div>
    <div>
      <van-cell-group>
        <van-cell style="font-size: 20px" title="我的订单" value="全部订单 >" />
      </van-cell-group>
    </div>
    <div>
      <van-grid :column-num="3">
        <van-grid-item icon="send-gift-o" text="代付款" />
        <van-grid-item icon="logistics" text="待收货" />
        <van-grid-item icon="exchange" text="退换货" />
      </van-grid>
    </div>
    <div>
      <van-cell style="font-size: 18px" title="会员中心" value=" >" />
      <van-cell style="font-size: 18px" title="我的优惠" value=" >" />
    </div>
    <div>
      <van-cell style="font-size: 18px" title="服务中心" value=" >" />
      <van-cell style="font-size: 18px" title="小米之家" value=" >" />
    </div>
    <div>
      <van-cell style="font-size: 18px" title="我的F码" value=" >" />
      <van-cell style="font-size: 18px" title="礼物码兑换" value=" >" />
    </div>
    <div>
      <van-cell style="font-size: 18px" title="设置" value=" >" />
    </div>
    <van-button type="warning" style="margin-left: 35%; width: 30%"
      >退出登录</van-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [],
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

<style lang='scss' scoped>
</style>