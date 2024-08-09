<script setup lang="ts">
import { getCaptcha, loginByAccount } from '@renderer/api/login';
import { ref } from 'vue';
import { reactive } from 'vue';
import { VForm } from 'vuetify/lib/components/index.mjs';
import { Encrypt } from '@renderer/utils/aes'
import { warningAlert } from '@renderer/components/custom-alert/alert';
import { getCurrentInstance } from 'vue';
import useLogin from '@renderer/hooks/useLogin';

interface LoginFormType {
  username: string
  password: string
  key: string
  captcha: string
}

const { proxy } = getCurrentInstance()!

const accountForm = reactive<LoginFormType>({
  username: '',
  password: '',
  key: '',
  captcha: ''
})
const captchaUrl = ref<string>('')
const formRef = ref<InstanceType<typeof VForm>>()
const rememberPassword = ref(false)
const accountRules = reactive({
  username: [(value: string) => {
    if (!value) return proxy!.$t('login.accountTip')
    return true
  }],
  password: [
    (value: string) => {
      if (!value) return proxy!.$t('login.passwordTip')
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
const initCaptcha = async () => {
  const key = Date.now().toString()
  const res = await getCaptcha({ key })
  accountForm.key = key
  let blob = new Blob([res as any as ArrayBuffer], { type: 'image/jpeg' });

  let imgUrl = URL.createObjectURL(blob);
  captchaUrl.value = imgUrl;
}


const handleSubmit = async () => {
  const { valid } = await formRef.value?.validate()!
  if (!valid) return
  const res = await loginByAccount({
    ...accountForm,
    username: Encrypt(accountForm.username),
    password: Encrypt(accountForm.password),
  })
  if (res.code === '200') {
    useLogin(res.data)
  } else {
    warningAlert(res.msg)
  }
}


initCaptcha()


</script>

<template>
  <div class="account-form">
    <v-sheet class="mx-auto" width="300">
      <v-form @submit.prevent ref="formRef">
        <v-text-field variant="solo-filled" v-model="accountForm.username" :rules="accountRules.username"
          :label="$t('login.account')"></v-text-field>
        <v-text-field variant="solo-filled" type="password" v-model="accountForm.password"
          :rules="accountRules.password" :label="$t('login.password')"></v-text-field>
        <div class="flex gap-2 items-center">
          <v-text-field variant="solo-filled" v-model="accountForm.captcha" :rules="accountRules.captcha"
            :label="$t('login.captcha')"></v-text-field>
          <!-- <v-img @click="getCaptcha" :width="60" cover :src="captchaUrl"></v-img> -->
          <img @click="initCaptcha" :src="captchaUrl" class="w-[100px] h-[50px] mb-4 cursor-pointer" alt="">
        </div>

        <div class="account-opt flex justify-between items-center">
          <v-checkbox v-model:model-value="rememberPassword" :label="$t('login.rememberPassword')"></v-checkbox>
          <span class="forget-password cursor-pointer">{{ $t('login.forgetPassword') }}?</span>
        </div>
        <v-btn color="indigo-darken-3" @click="handleSubmit" class="mt-2" type="submit" block>{{
          $t('login.signIn') }}</v-btn>
      </v-form>
    </v-sheet>

  </div>
</template>

<style scoped lang="scss">
.account-form {
  --check-box-font-size: 14px;

  /* --v-selection-control-size: 30px; */
  .account-opt {
    font-size: var(--check-box-font-size);

    :deep(.v-input__details) {
      display: none;
    }

    :deep(.v-label.v-label--clickable) {
      font-size: var(--check-box-font-size);
    }

    .forget-password {
      color: rgba(0, 0, 0, .87);
      opacity: 0.6;
    }
  }
}
</style>
