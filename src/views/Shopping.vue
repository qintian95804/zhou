<template>
  <div class="">
    <van-nav-bar title="购物车" left-text="返回" left-arrow>
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <van-nav-bar
      title="登录后享受更多优惠"
      right-text="去登陆 >"
      @click-right="onClickRight"
    />
    <div class="go" style="height: 80px; line-height: 80px; text-align: center">
      <span style="font-size: 36px; line-height: 80px"
        ><van-icon name="shopping-cart-o"
      /></span>
      <span style="font-size: 18px; line-height: 80px; margin-left: 10px"
        >购物车还是空的</span
      >
      <em
        style="
          display: inline-block;
          font-style: normal;
          width: 80px;
          height: 30px;
          border: solid 1px #666;
          text-align: center;
          line-height: 30px;
          margin-left: 10px;
        "
        >去逛逛</em
      >
    </div>
    <img
      style="width: 100%"
      src="//i8.mifile.cn/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg"
    />
    <van-grid :border="false" :column-num="2" style="margin-bottom: 50px">
      <van-grid-item
        style="padding: 5px"
        v-for="item in list"
        :key="item.index"
      >
        <van-image :src="item.coverImg" />
        <p
          style="
            color: #999;
            width: 120px;
            height: 20px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          "
        >
          {{ item.name }}
        </p>
        <span style="color: #ff6700">￥{{ item.price }}</span>
      </van-grid-item>
      <!-- <van-grid-item style="padding: 5px">
        <van-image
          src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bdb3d77094854460bb36494ecf8720cc.jpg?thumb=1&w=360&h=360"
        />
        <p style="color: #999">黑鲨游戏 Type-C 耳机</p>
        <span style="color: #ff6700">￥99</span>
      </van-grid-item> -->
      <!-- <van-grid-item style="padding: 5px">
        <van-image
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/bdeb112cc683ea56dead55806cb78a55.jpg?thumb=1&w=360&h=360"
        />
        <p style="color: #999">米家直流变频落地扇1X</p>
        <span style="color: #ff6700">￥299</span>
      </van-grid-item> -->
      <!-- <van-grid-item style="padding: 5px">
        <van-image
          src="//i8.mifile.cn/b2c-mimall-media/652ae759d82f68d40caea9329e266044!360x360.jpg"
        />
        <p style="color: #999">手机USB micro 数据线</p>
        <span style="color: #ff6700">￥9.9</span>
      </van-grid-item>
      <van-grid-item style="padding: 5px">
        <van-image
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e4e5ab6450b3116756d5bbc4f0c5d66d.jpg?thumb=1&w=360&h=360"
        />
        <p style="color: #999">RedmiBook 14 独显版</p>
        <span style="color: #ff6700">￥3999</span>
      </van-grid-item>
      <van-grid-item style="padding: 5px">
        <van-image
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f735084aaa49c1b832af24eca6cc5a01.jpg?thumb=1&w=360&h=360"
        />
        <p style="color: #999">米家智能IH电饭煲 4L</p>
        <span style="color: #ff6700">￥499</span>
      </van-grid-item>
      <van-grid-item style="padding: 5px">
        <van-image
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2dd222540cc2c130003aaebc178c83f6.jpg?thumb=1&w=360&h=360"
        />
        <p style="color: #999">米家电饭煲4L</p>
        <span style="color: #ff6700">￥299</span>
      </van-grid-item>
      <van-grid-item style="padding: 5px">
        <van-image
          src="//i8.mifile.cn/b2c-mimall-media/652ae759d82f68d40caea9329e266044!360x360.jpg"
        />
        <p style="color: #999">手机USB micro 数据线</p>
        <span style="color: #ff6700">￥9.9</span>
      </van-grid-item>
      <van-grid-item style="padding: 5px">
        <van-image
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e4e5ab6450b3116756d5bbc4f0c5d66d.jpg?thumb=1&w=360&h=360"
        />
        <p style="color: #999">RedmiBook 14 独显版</p>
        <span style="color: #ff6700">￥3999</span>
      </van-grid-item>
      <van-grid-item style="padding: 5px">
        <van-image
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f735084aaa49c1b832af24eca6cc5a01.jpg?thumb=1&w=360&h=360"
        />
        <p style="color: #999">米家智能IH电饭煲 4L</p>
        <span style="color: #ff6700">￥499</span>
      </van-grid-item>
      <van-grid-item style="padding: 5px">
        <van-image
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2dd222540cc2c130003aaebc178c83f6.jpg?thumb=1&w=360&h=360"
        />
        <p style="color: #999">米家电饭煲4L</p>
        <span style="color: #ff6700">￥299</span>
      </van-grid-item> -->
    </van-grid>
  </div>
</template>

<script>
import { Toast } from "vant";
import axios from "axios";
export default {
  data() {
    return {
      list: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    onClickRight() {
      Toast("按钮");
    },
    coo() {
      axios.get("http://localhost:3009/api/v1/products").then((res) => {
        this.list = res.data.products;
        console.log(this.list);
      });
    },
  },
  created() {
    this.coo();
  },
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
.nan {
  height: 50px;
  font-size: 20px;
  text-indent: 20px;
  line-height: 50px;
  padding: 0;
}
</style>