<script setup lang='ts'>
import { SvgIcon } from '@/components/common'
import ChatRecord from '@/components/common/Setting/ChatRecord.vue'
import { useBasicLayout } from '@/hooks/useBasicLayout'
import { useUserStore } from '@/store'
import About from './About.vue'
import Advanced from './Advanced.vue'
import Announcement from './Anonuncement.vue'
import Audit from './Audit.vue'
import General from './General.vue'
import Gift from './Gift.vue'
import Key from './Keys.vue'
import Mail from './Mail.vue'
import Password from './Password.vue'
import Search from './Search.vue'
import Site from './Site.vue'
import Statistics from './Statistics.vue'
import TwoFA from './TwoFA.vue'
import User from './User.vue'

const props = defineProps<Props>()

const emit = defineEmits<Emit>()

const { t } = useI18n()

const userStore = useUserStore()
const { isMobile } = useBasicLayout()

interface Props {
  visible: boolean
}

interface Emit {
  (e: 'update:visible', visible: boolean): void
}

const active = ref('General')

const show = computed({
  get() {
    return props.visible
  },
  set(visible: boolean) {
    emit('update:visible', visible)
  },
})
</script>

<template>
  <NModal v-model:show="show" :auto-focus="false" preset="card" :style="{ 'width': !isMobile ? '80%' : '100%', 'min-height': !isMobile ? '800px' : 'auto' }">
    <div>
      <NTabs v-model:value="active" type="line" animated>
        <NTabPane name="General" tab="General">
          <template #tab>
            <SvgIcon class="text-lg" icon="ri:file-user-line" />
            <span class="ml-2">{{ t('setting.general') }}</span>
          </template>
          <div class="min-h-[100px]">
            <General />
          </div>
        </NTabPane>
        <NTabPane name="PasswordConfig" tab="PasswordConfig">
          <template #tab>
            <SvgIcon class="text-lg" icon="ri-key-2-line" />
            <span class="ml-2">{{ t('setting.passwordConfig') }}</span>
          </template>
          <Password />
        </NTabPane>
        <NTabPane name="TwoFAConfig" tab="TwoFAConfig">
          <template #tab>
            <SvgIcon class="text-lg" icon="ri-key-2-line" />
            <span class="ml-2">{{ t('setting.twoFAConfig') }}</span>
          </template>
          <TwoFA />
        </NTabPane>
        <NTabPane name="Advanced" tab="Advanced">
          <template #tab>
            <SvgIcon class="text-lg" icon="ri:equalizer-line" />
            <span class="ml-2">{{ t('setting.advanced') }}</span>
          </template>
          <div class="min-h-[100px]">
            <Advanced />
          </div>
        </NTabPane>
        <NTabPane name="Statistics" tab="Statistics">
          <template #tab>
            <SvgIcon class="text-lg" icon="ri:bar-chart-box-line" />
            <span class="ml-2">{{ t('setting.statistics') }}</span>
          </template>
          <div class="min-h-[100px]">
            <Statistics />
          </div>
        </NTabPane>
        <NTabPane v-if="userStore.userInfo.root" name="Config" tab="Config">
          <template #tab>
            <SvgIcon class="text-lg" icon="ri:list-settings-line" />
            <span class="ml-2">{{ t('setting.config') }}</span>
          </template>
          <About />
        </NTabPane>
        <NTabPane v-if="userStore.userInfo.root" name="ChatRecord" tab="ChatRecord">
          <template #tab>
            <SvgIcon class="text-lg" icon="ic:outline-chat" />
            <span class="ml-2">{{ t('setting.chatRecord') }}</span>
          </template>
          <ChatRecord />
        </NTabPane>
        <NTabPane v-if="userStore.userInfo.root" name="KeysConfig" tab="KeysConfig">
          <template #tab>
            <SvgIcon class="text-lg" icon="ri-key-2-line" />
            <span class="ml-2">{{ t('setting.keysConfig') }}</span>
          </template>
          <Key />
        </NTabPane>
        <NTabPane v-if="userStore.userInfo.root" name="SiteConfig" tab="SiteConfig">
          <template #tab>
            <SvgIcon class="text-lg" icon="ri:settings-line" />
            <span class="ml-2">{{ t('setting.siteConfig') }}</span>
          </template>
          <Site />
        </NTabPane>
        <NTabPane v-if="userStore.userInfo.root" name="AnnounceConfig" tab="AnnounceConfig">
          <template #tab>
            <SvgIcon class="text-lg" icon="ri:settings-line" />
            <span class="ml-2">{{ t('setting.announceConfig') }}</span>
          </template>
          <Announcement />
        </NTabPane>
        <NTabPane v-if="userStore.userInfo.root" name="MailConfig" tab="MailConfig">
          <template #tab>
            <SvgIcon class="text-lg" icon="ri:mail-line" />
            <span class="ml-2">{{ t('setting.mailConfig') }}</span>
          </template>
          <Mail />
        </NTabPane>
        <NTabPane v-if="userStore.userInfo.root" name="AuditConfig" tab="AuditConfig">
          <template #tab>
            <SvgIcon class="text-lg" icon="ri:settings-line" />
            <span class="ml-2">{{ t('setting.auditConfig') }}</span>
          </template>
          <Audit />
        </NTabPane>
        <NTabPane v-if="userStore.userInfo.root" name="SearchConfig" tab="SearchConfig">
          <template #tab>
            <SvgIcon class="text-lg" icon="mdi:web" />
            <span class="ml-2">{{ t('setting.searchConfig') }}</span>
          </template>
          <Search />
        </NTabPane>
        <NTabPane v-if="userStore.userInfo.root" name="UserConfig" tab="UserConfig">
          <template #tab>
            <SvgIcon class="text-lg" icon="ri-user-5-line" />
            <span class="ml-2">{{ t('setting.userConfig') }}</span>
          </template>
          <User />
        </NTabPane>
        <NTabPane v-if="userStore.userInfo.root" name="GiftCardConfig" tab="GiftCardConfig">
          <template #tab>
            <SvgIcon class="text-lg" icon="mdi-gift" />
            <span class="ml-2">{{ t('setting.uploadgifts') }}</span>
          </template>
          <Gift />
        </NTabPane>
      </NTabs>
    </div>
  </NModal>
</template>
