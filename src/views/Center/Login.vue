<template>
    <div class="login_view">
        <div class="login_bg"></div>
        <div class="product">
            <div class="head">
                <div class="head_icon">
                    <a class="goback"></a>
                </div>
            </div>
        </div>
        <div class="login">
            <h3>会员登录</h3>
            <van-form @submit="onSubmit">
                <van-field
                    v-model="mobile"
                    name="mobile"
                    placeholder="手机号"
                    :rules="[{ pattern, message: '请填写正确的手机号' }]"
                />
                <van-field
                    v-model="password"
                    type="password"
                    name="password"
                    placeholder="请输入密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
                />
                <div style="margin: 16px;">
                    <van-button round block type="info" native-type="submit">登录</van-button>
                </div>
            </van-form>
        </div>
    </div>
</template>
<script>
import '@/assets/css/reset.css'
import '@/assets/css/login.css'
import Vue from 'vue';
import { Form , Field, Button, Toast} from 'vant';

Vue.use(Form);
Vue.use(Field)
Vue.use(Button)
Vue.use(Toast)
export default {
    data() {
    return {
      mobile: '',
      password: '',
      pattern:/^1[3-9]\d{9}$/
    };
  },
  methods: {
    onSubmit(values) {
    //   console.log('submit', values);
      this.$http
        .post("http://127.0.0.1:2004/backend/login", values)
        .then((ret) => {
            if(ret.error_code == 0){
                Toast.success('登录成功')
                if(this.$route.query.callback){
                    this.$router.push(this.$route.query.callback)
                }else{
                    this.$router.push('/center')
                }
            }else{
                Toast.fail('登录失败')
            }
        });
    },
  },
}
</script>