<script setup lang="ts">
import { loginByMobile, loginCaptcha } from '@renderer/api/login';
import { errorAlert, successAlert, warningAlert } from '@renderer/components/custom-alert/alert';
import useLogin from '@renderer/hooks/useLogin';
import { Encrypt } from '@renderer/utils/aes';
import { getCurrentInstance } from 'vue';
import { reactive } from 'vue';
import { ref } from 'vue';
import { VForm, VTextField } from 'vuetify/lib/components/index.mjs';


const { proxy } = getCurrentInstance()!

const formRef = ref<InstanceType<typeof VForm>>()
const formData = ref({
  mobile: '',
  captcha: ''
})
const countdown = ref(0)
const formRules = reactive({
  mobile: [
    (value: string) => {
      if (!value) return proxy!.$t('login.mobileError')
      // 判断是不是有效手机号。
      if (!/^1[3-9]\d{9}$/.test(value)) return proxy!.$t('login.phoneError')
      return true
    }
  ],
  captcha: [
    (value: string) => {
      if (!value) return proxy!.$t('login.captchaTip')
      return true
    }
  ]
})
const textFieldRef = ref<InstanceType<typeof VTextField>>()


// 获取验证码
const handleGetCaptcha = async () => {
  textFieldRef.value?.validate()!
  if (!textFieldRef.value?.isValid) return proxy!.$t('login.phoneError')
  const res = await loginCaptcha({
    mobile: Encrypt(formData.value.mobile)
  })
  if (res.code != '200') return errorAlert(res.msg);
  else {
    successAlert(proxy!.$t('login.sendSuccess'))
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
    useLogin(res.data)
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
          :label="$t('login.mobilePlaceholder')"></v-text-field>

        <div class="flex gap-2 items-center">
          <v-text-field variant="solo-filled" v-model="formData.captcha" :rules="formRules.captcha"
            :label="$t('login.captcha')">
            <template #append>
              <v-btn :disabled="!!countdown" @click="handleGetCaptcha">{{ countdown === 0 ? $t('login.smsGet') :
          countdown
                }}</v-btn>
            </template>
          </v-text-field>
        </div>
        <v-btn color="indigo-darken-3" @click="handleSubmit" class="mt-2" type="submit" block>{{ $t('login.signIn')
          }}</v-btn>
      </v-form>
    </v-sheet>
  </div>
</template>

<style scoped lang="scss"></style>
