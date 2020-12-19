<template>
  <div class="home">
    <van-nav-bar
      title="发现"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">
          登录
        </van-button>
      </div>
      <div style="margin: 16px">
        <van-button round block type="info" @click="Sunlist">
          没有账号！去注册
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    onSubmit() {
      var username = this.username;
      var password = this.password;
      axios
        .post("http://localhost:8888/get", {
          username,
          password,
        })
        .then((res) => {
          if (res.data.code == 200) {
            this.id = res.data.users[0]._id;
            console.log(this.id);
            this.$router.push({
              path: "/my",
              query: {
                benid2: this.id, //我们要传递的参数
              },
            });
          }
        });
    },
    Sunlist() {
      this.$router.push({ path: "/about" });
    },
    onClickLeft() {
      window.history.go("-1");
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

<style lang='scss' scoped>
</style>