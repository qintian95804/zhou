<template>
  <div class="home" style="margin-bottom: 50px">
    <van-nav-bar title="首页" left-text="返回" left-arrow>
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <van-grid :border="false" :column-num="5">
      <van-grid-item v-for="item in nan" :key="item.index" to="sing">
        <van-image :src="item.imgurl" />
      </van-grid-item>
    </van-grid>
    <van-grid :border="false" :column-num="2">
      <van-grid-item>
        <van-image
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d692a30ee3d586c4274575eec255d3c5.jpg?f=webp&w=537&h=762&bg=C1DDE9"
        />
      </van-grid-item>
      <van-grid-item>
        <van-image
          style="height: 50% float: left; padding: 2% 0"
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0e32e68b1a554cd84af032d8ee03bf6d.jpeg?f=webp&w=537&h=378&bg=C1DDE9"
        />
        <van-image
          style="height: 50%; float: left; padding: 2% 0"
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e2dd638ceb36697af693973ff85a7a9b.jpg?f=webp&w=537&h=378&bg=E0FCFF"
        />
      </van-grid-item>
    </van-grid>
    <van-grid :border="false" :column-num="1">
      <van-grid-item style="width: 100%; height: 100%">
        <van-image
          style="width: 100%; height: 100%"
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/189acdf7e9b807cfc22d394df87c1958.jpg?f=webp&w=1080&h=420&bg=FEFEFE"
        />
      </van-grid-item>
    </van-grid>
    <van-grid :border="false" :column-num="1">
      <van-grid-item style="width: 100%; height: 100%">
        <van-image
          style="width: 100%; height: 100%"
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/10d5e0e2a319079549175a8831417edc.jpg?f=webp&w=1080&h=660&bg=FFFFFF"
        />
      </van-grid-item>
    </van-grid>
    <van-grid :border="false" :column-num="2">
      <van-grid-item style="width: 100%; height: 100%">
        <van-image
          style="width: 100%; height: 100%"
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/64a04d4f67a23c2d8643aaba52e2392b.jpg?thumb=1&w=344&h=280"
        />
        <h3 style="line-height: 1; padding: 0; margin: 5px">Redmi K30 4G</h3>
        <p style="line-height: 1; padding: 0; margin: 5px">
          120Hz流速屏，全速热爱
        </p>
        <span
          style="
            line-height: 1;
            padding: 0;
            margin: 5px;
            color: red;
            font-size: 16px;
          "
          >￥1399<i style="font-style: normal; font-size: 12px">起</i
          ><i
            style="
              font-style: normal;
              font-size: 12px;
              text-decoration: line-through;
              color: #666;
            "
            >￥1699</i
          ></span
        ><van-button type="danger" style="height: 30px">立即购买</van-button>
      </van-grid-item>
      <van-grid-item style="width: 100%; height: 100%">
        <van-image
          style="width: 100%; height: 100%"
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cf8c841ab5e52d443be110f6aa7e0d98.jpg?thumb=1&w=344&h=280"
        />
        <h3 style="line-height: 1; padding: 0; margin: 5px">Redmi K30 5G</h3>
        <p style="line-height: 1; padding: 0; margin: 5px">
          双模5G，120Hz流速屏
        </p>
        <span
          style="
            line-height: 1;
            padding: 0;
            margin: 5px;
            color: red;
            font-size: 16px;
          "
          >￥1599<i style="font-style: normal; font-size: 12px">起</i
          ><i
            style="
              font-style: normal;
              font-size: 12px;
              text-decoration: line-through;
              color: #666;
            "
            >￥2299</i
          ></span
        ><van-button type="danger" style="height: 30px">立即购买</van-button>
      </van-grid-item>
      <van-grid-item style="width: 100%; height: 100%">
        <van-image
          style="width: 100%; height: 100%"
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/53e729d30746033a042d8ae9399553a7.jpg?thumb=1&w=344&h=280"
        />
        <h3 style="line-height: 1; padding: 0; margin: 5px">Note 8 Pro</h3>
        <p style="line-height: 1; padding: 0; margin: 5px">6400万全场景四摄</p>
        <span
          style="
            line-height: 1;
            padding: 0;
            margin: 5px;
            color: red;
            font-size: 16px;
          "
          >￥1099<i style="font-style: normal; font-size: 12px">起</i
          ><i
            style="
              font-style: normal;
              font-size: 12px;
              text-decoration: line-through;
              color: #666;
            "
            >￥1399</i
          ></span
        ><van-button type="danger" style="height: 30px">立即购买</van-button>
      </van-grid-item>
      <van-grid-item style="width: 100%; height: 100%">
        <van-image
          style="width: 100%; height: 100%"
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8025107813883a20d3f2d956ad80ea38.jpg?thumb=1&w=344&h=280"
        />
        <h3 style="line-height: 1; padding: 0; margin: 5px">Redmi Note 8</h3>
        <p style="line-height: 1; padding: 0; margin: 5px">千元4800万四摄</p>
        <span
          style="
            line-height: 1;
            padding: 0;
            margin: 5px;
            color: red;
            font-size: 16px;
          "
          >￥899<i style="font-style: normal; font-size: 12px">起</i
          ><i
            style="
              font-style: normal;
              font-size: 12px;
              text-decoration: line-through;
              color: #666;
            "
            >￥999</i
          ></span
        >
        <van-button type="danger" style="height: 30px">立即购买</van-button>
      </van-grid-item>
    </van-grid>
    <van-grid :border="false" :column-num="1">
      <div
        style="height: 40px; text-align: center; width: 100%; line-height: 40px"
      >
        更多小米手机产品 >
      </div>
    </van-grid>
  </div>
</template>
<script>
import Vue from "vue";
import { Lazyload } from "vant";

Vue.use(Lazyload);
export default {
  data() {
    return {
      active: 2,
      images: [
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/fcfc2e1245bbf972d4eb29a4528488d2.jpg?thumb=1&w=720&h=360",
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4bd3dde9e8c82e87e3f4342de038d897.jpg?thumb=1&w=720&h=360",
      ],
      nan: [
        {
          imgurl:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?w=216&h=228&bg=FDF1E6",
          to: "/",
        },
        {
          imgurl:
            "//i8.mifile.cn/v1/a1/eb5024fe-dfe3-6e53-3e18-675bef5fa06e.webp?w=216&h=228&bg=EAF6FD",
          to: "/my",
        },
        {
          imgurl:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d436f30612651fffe1d6c5aaa3fdb816.png?f=webp&w=216&h=228&bg=FFFFFF",
          to: "/",
        },
        {
          imgurl:
            "//i8.mifile.cn/v1/a1/e8bc849a-0a3b-21a0-6810-7da3a3903dee.webp?w=216&h=228&bg=FDEFDE",
          to: "/",
        },
        {
          imgurl:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/eb4cbd9dabf2c2aef15e43f5bcab5cb9.jpg?f=webp&w=216&h=228&bg=FFFFFF",
          to: "/",
        },
        {
          imgurl:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/64f3988b6216e4c1ab62a7f50df3e816.png?f=webp&w=216&h=228&bg=FFFFFF",
          to: "/",
        },
        {
          imgurl:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ea68dee2bfa0e55a82236b0d968e975.png?w=216&h=228&bg=FCEAEA",
          to: "/",
        },
        {
          imgurl:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/96c780016ea196743905dc93f9249c39.png?w=216&h=228&bg=FDF5E5",
          to: "/",
        },
        {
          imgurl:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9425031cdd7af22d9a23a5ae16d1f57c.jpg?f=webp&w=216&h=228&bg=FFFFFF",
          to: "/",
        },
        {
          imgurl:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f11f9df6b0b0b428f8c8fc3267131830.png?w=216&h=228&bg=FDEDE8",
          to: "/",
        },
      ],
    };
  },
  computed: {},
  watch: {},
  methods: {
    onClickLeft() {
      alert("返回");
    },
    onClickRight() {
      alert("按钮");
    },
  },
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
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.van-swipe-item img {
  width: 100%;
  height: 100%;
}
</style>