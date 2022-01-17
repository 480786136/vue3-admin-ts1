<template>
  <div class="account">
    <div class="from-wrap">
      <a-form
    ref="formRef"
    name="custom-validation"
  >
    <a-form-item>
      <label>用户名</label>
      <a-input type="text" autocomplete="off" />
    </a-form-item>

    <a-form-item>
      <label>密码</label>
      <a-input type="password" block autocomplete="off" />
    </a-form-item>

    <a-form-item>
      <a-button type="primary" block html-type="submit">登录</a-button>
    </a-form-item>
  </a-form>
  <div class="fs-12 text-center">
    <a href="" class="color-white" >忘记密码</a >|
    <a href="" class="color-white">注册</a >
    {{count}}
  </div>
    </div>
  </div>
</template>

<script lang="ts">
import "./captcha.js";
import {onMounted, reactive,defineComponent,ref,toRefs} from "vue";
export default defineComponent({
  name: 'Login',
  setup(props){

const count=ref<string>("10");//强类型
console.log(count.value)

const Fromconfig=reactive<any>({
  layout :{
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
    },
    aa:10,
    bb:20
})

const data=toRefs (Fromconfig);
return{
  ...data,
  count
}
  }
})
</script>
<style lang="scss">
@import './style.scss'
</style>