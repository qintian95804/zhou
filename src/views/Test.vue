<ul>
              <li
                @click="selectFood(food, $event)"
                v-for="(food, index) in item.foods"
                :key="index"
                class="food-item border-1px"
              >
                <!--商品的左右两侧-->
                <div class="icon">
                  <!--商品小图标-->
                  <img
                    width="57"
                    height="57"
                    :src="food.icon"
                    alt="food.name"
                  />
                </div>
                <div class="content">
                  <!-- 商品名称和描述-->
                  <h2 class="name">{{ food.name }}</h2>
                  <!--商品名称-->
                  <p class="desc">{{ food.description }}</p>
                  <!--描述-->
                  <div class="extra">
                    <!--销售-->
                    <span class="count">月售{{ food.sellCount }}</span
                    ><span>好评率{{ food.rating }}%</span>
                  </div>
                  <div class="price">
                    <!--价格-->
                    <span class="now">￥{{ food.price }}</span>
                    <span class="old" v-show="food.oldPrice"
                      >￥{{ food.oldPrice }}</span
                    >
                  </div>
                  <!-- 引入增加按钮组件  -->
                  <div class="cartcontrol-wrapper">
                    <!-- 上面遍历的是时候顺便传递food对象  -->
                    <cartcontrol @add="addFood" :food="food"></cartcontrol>
                  </div>
                </div>
              </li>
            </ul>
            <div class="foods-wrapper" ref="foodsWrapper">
        <ul>
          <!--遍历所有商品 food-list-hook 也是一个变成习惯，表明他是被js选择的元素-->
          <li
            v-for="(item, index) in list2"
            :key="index"
            class="foods-list food-list-hook"
          >
            <h1 class="title"></h1>
            <ul>
              <li v-for="(items, index) in item.data.items" :key="index">
                <img style="width: 100%" :src="items.pic_url" />
              </li>
            </ul>
            <!--右侧商品分割标题（分类）-->
          </li>
        </ul>
      </div>