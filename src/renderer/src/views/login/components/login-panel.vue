<script setup lang="ts">
import { ref } from 'vue';
import AccountForm from './account-form.vue';
import PhoneForm from './phone-form.vue';

type PanelType = 'account' | 'phone'

const activeTab = ref<PanelType>('account')


</script>

<template>
  <div class="w-96">
    <div class="mb-3 text-center font-bold">客户关系管理系统</div>
    <v-card>
      <v-tabs alignTabs="center" v-model="activeTab" color="deep-purple-accent-4">
        <v-tab :value="'account'">账号登录</v-tab>
        <v-tab :value="'phone'">手机登录</v-tab>
      </v-tabs>

      <v-card-text>
        <v-tabs-window v-model="activeTab">
          <v-tabs-window-item value="account">
            <account-form />
          </v-tabs-window-item>

          <v-tabs-window-item value="phone">
            <phone-form />
          </v-tabs-window-item>

        </v-tabs-window>
      </v-card-text>
    </v-card>
    <div class="login-more font-bold text-xs mt-3 flex items-center gap-2">
      <span class="login-panel-line"></span>
      <span class="text-gray-400">
        其他登录方式
      </span>
      <span class="login-panel-line"></span>
    </div>
    <div class="text-center py-2">
      <v-icon icon="mdi-wechat" class="cursor-pointer"></v-icon>
    </div>
    <!-- <v-divider class="border-opacity-50"></v-divider> -->

  </div>
</template>

<style scoped lang="scss">
.login-panel-line {
  @apply h-[1px] inline-block flex-1 bg-gray-200;
}
</style>
