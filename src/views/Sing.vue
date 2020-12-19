<template>
  <div class="aboout">
    <van-nav-bar
      title="注册"
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
      <van-field
        v-model="text"
        type="text"
        name="昵称"
        label="昵称"
        placeholder="昵称"
        :rules="[{ required: true, message: '请填写昵称' }]"
      />
      <van-field name="uploader" label="文件上传">
        <template #input>
          <van-uploader v-model="uploader" />
        </template>
      </van-field>
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">
          注册
        </van-button>
      </div>
      <div style="margin: 16px">
        <van-button round block type="info" @click="Sunmy">
          已有账号！去登陆
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
      text: "",
      uploader: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    // afterRead(file) {
    //   // 此时可以自行将文件上传至服务器
    //   console.log(file);
    //   let img=FormData()
    //   img.append(file,file.file)

    // },
    onSubmit() {
      console.log(this.uploader);
      axios
        .post("http://localhost:8888/none", {
          username: this.username,
          password: this.password,
          nickname: this.text,
          avaent: this.uploader[0].file.name,
        })
        .then((res) => {
          console.log(res);
        });
    },
    Sunmy() {
      this.$router.push({ path: "/home" });
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