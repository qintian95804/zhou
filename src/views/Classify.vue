<!--
  商品展示组件
-->
<template>
  <div>
    <div class="goods">
      <!--左侧菜单-->
      <div class="menu-wrapper" ref="menuWrapper">
        <!-- 使用ref:绑定要获取的元素-->
        <!--遍历所有商品大分类(菜单)-->
        <ul>
          <!--这里绑定一个对象，根据currentIndex返回当额值设置class，当currentIndex===index 就设置选中样式-->
          <li
            v-for="(item, index) in list"
            class="menu-item"
            :key="index"
            :class="{ current: currentIndex === index }"
            @click="selectMenu(index, $event)"
          >
            {{ item }}
          </li>
        </ul>
      </div>
      <!--右侧商品-->
      <div class="foods-wrapper" ref="foodsWrapper">
        <!-- <ul>
          <li
            v-for="(item, index) in list2"
            :key="index"
            class="foods-list food-list-hook"
          >
            <h1 class="title"></h1>
            <ul>
              <li
                class="food-list-hook"
                v-for="(items, index) in item.data.items"
                :key="index"
              >
                <a :href="items.jump_url"
                  ><img style="width: 100%" :src="items.pic_url"
                /></a>
              </li>
            </ul> -->
        <ul>
          <li
            v-for="(item, index) in list1"
            :key="index"
            class="foods-list food-list-hook"
          >
            <h1 class="title"></h1>
            <ul
              style="
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
              "
            >
              <li
                class="food-list-hook"
                v-for="(items, index) in item.data"
                :key="index"
                style="width: 30%; text-align: center"
              >
                <a :href="items.jump_url"
                  ><img style="width: 100%" :src="items.pic_url"
                /></a>
                <h3
                  style="
                    width: 80%;
                    margin-left: 10%;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                  "
                >
                  {{ items.name }}
                </h3>
                <span
                  style="
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                    -webkit-box-orient: vertical;
                    width: 90%;
                    margin-left: 5%;
                  "
                  >{{ items.summary }}</span
                >
                <p style="text-align: center; width: 100%; color: #fb7d34">
                  ￥{{ parseFloat(items.price / 100).toFixed(2) }}
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!--使用购物车组件，并传递配送费和起送费-->
      <!-- ref自定的名字 用来访问子组件 在方法里面使用this.$refs.xxxx 获取 -->
      <!-- <shopcart
        :selectFoods="selectFoods"
        :deliveryPrice="seller.deliveryPrice"
        :minPrice="seller.minPrice"
        ref="shopcart"
      ></shopcart> -->
    </div>

    <!-- 使用food组件 ，并传入一个选中的商品 -->
    <!-- ref 用来调用 子组件的方法 show  -->
    <!-- <food @add="addFood" :food="selectedFood" ref="foods"></food> -->
  </div>
</template>

<script>
import BScroll from "better-scroll"; // 导入滚动类库
// import shopcart from "components/shopcart/shopcart"; // 导入购物车组件
// import cartcontrol from "components/cartcontrol/cartcontrol"; // 引入增加按钮组件
// import food from "components/food/food";
// import goodData from "common/json/goods.js"; // 引入模拟的商品信息文件

// const ERR_OK = 0;
import axios from "axios";
export default {
  props: {
    seller: {
      //  seller: ['seller'] 简写形式
      type: Object,
    },
  },
  data() {
    return {
      goods: [], // 所有商品的大分类
      listHeight: [], // 用来存放右侧每一个分类/li的商品高度
      scrollY: 0, // 当期滚动的高度
      selectedFood: {}, // 刚开始选中的商品为空，经过方法设置值传递给food组件
      list2: [],
      list1: [],
      list: [
        "小米手机",
        "小米手机",
        "小米手机",
        "小米手机",
        "小米手机",
        "小米手机",
        "小米手机",
        "小米手机",
        "小米手机",
        "小米手机",
        "小米手机",
        "小米手机",
        "小米手机",
        "小米手机",
        "小米手机",
        "小米手机",
        "小米手机",
        "小米手机",
      ],
    };
  },
  computed: {
    currentIndex() {
      // 计算当前右侧的距离，决定决定左侧哪一个分类高亮（选中的意思）
      for (let i = 0; i < this.listHeight.length; i++) {
        // 这两个高度就是一个li从上到下整个的高度
        let height1 = this.listHeight[i]; // 获取当前的上高度
        let height2 = this.listHeight[i + 1]; // 获取当前的下高度
        // if (this.scrollY > height1 && this.scrollY < height2)  这样子height2会超出listHeight的索引，需要加一个条件
        // console.log("y:" + this.scrollY);
        // console.log(height1 + "...." + height2);
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i; // 返回当前索引
        }
      }
      return 0; // 如果什么的都没有就返回 0
    },
    // selectFoods() {
    //   // 循环遍历所有选中的商品
    //   let foods = [];
    //   this.goods.forEach((good) => {
    //     good.foods.forEach((food) => {
    //       if (food.count) {
    //         foods.push(food);
    //       }
    //     });
    //   });
    //   return foods;
    // },
  },
  created() {
    // 类别图标样式
    // this.classMap = ["decrease", "discount", "special", "invoice", "guarantee"];
    // console.log("goods");
    // console.log(goodData);
    // this.goods = goodData;
    this.$nextTick(() => {
      // 原始写法 this.$nextTick(function () {});
      // 调用滚动的初始化方法
      this._initScroll();
      this._calculateHeight();
    });
    this.coo();

    /* 使用webpack模拟的后端请求 */
    // 使用vue-resource 获取商品数据
    // this.$http.get('/api/goods').then(function (response) {
    //   response = response.body;
    //   if (response.errno === ERR_OK) {
    //     this.goods = response.data;
    //     // console.log('商品信息：' + this.goods);

    //     // vue 数据改变dom也会跟着数据做映射（更新），vue在更新dom的时候是异步的调用nextTick回调函数才会做dom的更新，所以我们这里虽然改变了数据，但是dom没有变化，我们初始化_initScroll 高度的计算就有问题，导致滚动不了，
    //     // 调用vue的接口 $nextTick ，触发视图更新，保证dom渲染好了再执行我们的dom操作
    //     this.$nextTick(() => { // 原始写法 this.$nextTick(function () {});
    //       // 调用滚动的初始化方法
    //       this._initScroll();
    //       this._calculateHeight();
    //     });
    //   }
    // }, function (response) {
    //   console.log('get resource fail......');
    // });
  },
  methods: {
    // 左侧菜单点击右侧内容滚动到对应区域事件
    selectMenu(index, event) {
      // 这里多传递一个事件 ,event 就是click传递的event，当设置 click为 true时，默认就派发了一个点击事件，而pc端本身也有click事件
      if (!event._constructed) {
        return; // 原生的浏览器的event没有 vue的这个 _constructed 属性，所以当没有这个时，直接return。避免在pc端点击时事件执行（触发）2次的效果
      }
      console.log(index);
      let foodList = this.$refs.foodsWrapper.getElementsByClassName(
        "food-list-hook"
      );
      let el = foodList[index]; // 滚动到响应的元素
      console.log(el);
      this.foodsScroll.scrollToElement(el, 300);
    },
    // 初始化滚动事件
    _initScroll() {
      // 第一个参数是dom对象，第二个参数是options(json格式)
      // vue 中获取指定对象的方式
      // 获取左侧菜单区域
      // BScroll计算dom高度，如果获取不到高度会没有效果，所以上面要调用ick
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        click: true, // 一开始的点击事件被bscroll阻止了，设置这个才能点击
      });
      // 获取右侧商品区域
      this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
        click: true, // 这里也要设置为true增加减少按钮才能点击
        probeType: 3, // 获取实时滚动的位置，详见bscroll API
      });
      // 监听右侧食品区域滚动的事件
      this.foodsScroll.on("scroll", (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y)); // 四舍五入得到的y值
        // console.log('当前滚动的Y值：' + this.scrollY);
      });
    },
    _calculateHeight: function () {
      // 获取右侧一个商品的整个li，一个li里面包含了该分类下的所有商品
      let foodList = this.$refs.foodsWrapper.getElementsByClassName(
        "food-list-hook"
      );
      let height = 0;
      this.listHeight.push(height);
      for (let i = 0; i < foodList.length; i++) {
        let item = foodList[i];
        height += item.clientHeight; // 获取每一个li的可视区域的高度
        this.listHeight.push(height); // 这样就得到了每一个商品分类下的所有商品对应的高度
      }
    },
    _drop: function (target) {
      // 处理小球动画的方法
      // 体验优化，异步执行下落动画
      // 使用这个接口缓解抛物线小球动画立即执行导致和减按钮两个动画同时执行的卡顿
      this.$nextTick(() => {
        this.$refs.shopcart.drop(target); // 访问子组件的方法
      });
    },
    selectFood(food, event) {
      // 设置选中的商品以便传递给 food组件
      if (!event._constructed) {
        return;
      }
      this.selectedFood = food;
      this.$refs.foods.show(); // 调用 子组件 food 的show方法
    },
    addFood(target) {
      // 监听到的组件的事件回调
      this._drop(target);
    },
    coo() {
      axios
        .get("https://www.xiaomiyoupin.com/homepage/main/v1002?platform=pc")
        .then((res) => {
          this.list2 = res.data.data.homepage.floors;
          this.list1 = res.data.data.recommend.floors;
          console.log(res.data.data.recommend.floors);
        });
    },
  },
  components: {
    // shopcart: shopcart, // 注册购物车组件
    // cartcontrol: cartcontrol, // 注册加减按钮组件
    // food: food, // 注册food组件
  },
};
</script>

<style rel="stylesheet/stylus">
.menu-wrapper {
  width: 20%;
  height: 640px;
  position: absolute;
  left: 0;
  top: 50px;
  overflow-y: scroll;
}
.foods-wrapper {
  width: 80%;
  height: 640px;
  position: absolute;
  left: 20%;
  top: 50px;
  overflow-y: scroll;
}
.menu-item {
  line-height: 40px;
}
</style>