<script setup lang="ts">
import { ref } from 'vue';
import LoginPanel from './components/login-panel.vue'
import useDrag from '@renderer/hooks/useDrag'


const loginRef = ref<HTMLDivElement>()

useDrag(loginRef)

</script>

<template>
  <div class="login relative" ref="loginRef">
    <header-tool />
    <div class="login-info">
      <div class="login-info__top login-text">
        <h2 class="text-white  font-bold text-xl leading-8">客户关系管理系统</h2>
        <p class="text-slate-300 text-sm leading-8">让业务再更高效，加速企业数字化升级。</p>
      </div>
      <img src="../../assets/images/data.png" alt="">
      <div class="login-info__bottom text-slate-300 text-sm leading-8 ">
        © 客户关系管理系统 1.0.0
      </div>
    </div>
    <div class="login-panel flex justify-center items-center">
      <login-panel></login-panel>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login {
  height: 100vh;
  width: 100vw;
  display: flex;

  &-info {
    flex: 4;
    position: relative;
    background: url('../../assets/images/auth_banner.jpg') no-repeat;

    &__top {
      padding: 40px 40px 20px 40px;

    }

    &__bottom {
      padding: 100px 40px 20px 40px;
    }
  }

  &-panel {
    flex: 6;
  }
}
</style>
