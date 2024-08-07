<script setup lang="ts">
import { loginByMobile, loginCaptcha } from '@renderer/api/login';
import { errorAlert, successAlert, warningAlert } from '@renderer/components/custom-alert/alert';
import { Encrypt } from '@renderer/utils/aes';
import { ref } from 'vue';
import { VForm, VTextField } from 'vuetify/lib/components/index.mjs';

const formRef = ref<InstanceType<typeof VForm>>()
const formData = ref({
  mobile: '',
  captcha: ''
})
const countdown = ref(0)
const formRules = {
  mobile: [
    (value: string) => {
      if (!value) return '请输入手机号'
      // 判断是不是有效手机号。
      if (!/^1[3-9]\d{9}$/.test(value)) return '请输入正确的手机号'
      return true
    }
  ],
  captcha: [
    (value: string) => {
      if (!value) return '请输入验证码'
      return true
    }
  ]
}
const textFieldRef = ref<InstanceType<typeof VTextField>>()


// 获取验证码
const handleGetCaptcha = async () => {
  textFieldRef.value?.validate()!
  if (!textFieldRef.value?.isValid) return '手机号输入错误'
  const res = await loginCaptcha({
    mobile: Encrypt(formData.value.mobile)
  })
  if (res.code != '200') return errorAlert(res.msg);
  else {
    successAlert('发送成功')
    countdown.value = 60
    let timer = setInterval(() => {
      countdown.value--
      if (countdown.value === 0) clearTimeout(timer)
    }, 1000)
  }
}



const handleSubmit = async () => {
  const { valid } = await formRef.value?.validate()!
  if (!valid) return
  const res = await loginByMobile({
    mobile: Encrypt(formData.value.mobile),
    captcha: Encrypt(formData.value.captcha)
  })
  if (res.code === '200') {

  } else {
    warningAlert(res.msg)
  }
}

</script>

<template>
  <div class="phone-form">
    <v-sheet class="mx-auto" width="300">
      <v-form fast-fail @submit.prevent ref="formRef">
        <v-text-field variant="solo-filled" ref="textFieldRef" v-model="formData.mobile" :rules="formRules.mobile"
          label="手机号"></v-text-field>

        <div class="flex gap-2 items-center">
          <v-text-field variant="solo-filled" v-model="formData.captcha" :rules="formRules.captcha" label="验证码">
            <template #append>
              <v-btn :disabled="!!countdown" @click="handleGetCaptcha">{{ countdown === 0 ? '获取验证码' : countdown
                }}</v-btn>
            </template>
          </v-text-field>
        </div>
        <v-btn color="indigo-darken-3" @click="handleSubmit" class="mt-2" type="submit" block>登录</v-btn>
      </v-form>
    </v-sheet>
  </div>
</template>

<style scoped lang="scss"></style>
