<script setup lang="ts">
import UserTabSecurity from "@/views/apps/user/view/UserTabSecurity.vue"
import UserTabOverview from "@/views/apps/user/view/UserTabOverview.vue"
import CardAnalyticsTotalEarning from "@/views/pages/cards/card-analytics/CardAnalyticsTotalEarning.vue"
import OverView from "@/views/pages/cards/over-view/OverView.vue"
import UserAvatar from "@/assets/images/avatars/avatar-1.png"
import QualificationCharts from "@/views/pages/cards/qualifications/QualificationCharts.vue"
import PreferencesChart from "@/views/pages/cards/preferences/PreferencesChart.vue"


const userTab = ref(null)

const tabs = [
  {
    title: 'Home',
    isDisabled: false,
  },
  {
    title: 'Qualifications',
    isDisabled: true,
  },
  {
    title: 'Preferences',
    isDisabled: true,
  },
]
</script>

<template>
  <VCard>
    <VCol cols="12">
      <VRow>
        <VCol
          cols="12"
          md="3"
          lg="2"
          class="d-flex justify-center"
        >
          <VAvatar
            rounded
            :size="120"
            color="primary"
            variant="tonal"
          >
            <VImg
              v-if="UserAvatar"
              :src="UserAvatar"
            />
          </VAvatar>
        </VCol>
        <VCol
          cols="12"
          md="9"
          lg="10"
        >
          <VCardText>
            <h4 class="text-h4">
              Ali
            </h4>

            <p class="text-body-2">
              0912312312
            </p>
          </VCardText>
        </VCol>
      </VRow>
    </VCol>
  </VCard>
  <VCard class="mt-4">
    <VCol
      cols="12"
      md="7"
      lg="8"
    >
      <VTabs
        v-model="userTab"
        class="v-tabs--grow"
      >
        <VTab
          v-for="tab in tabs"
          :key="tab.title"
        >
          <span>{{ tab.title }}</span>
        </VTab>
      </VTabs>
    </VCol>
  </VCard>
  <VCol cols="12" class="ma-0 pa-0">
    <VWindow
      v-model="userTab"
      class="mt-6 ma-0 pa-0"
    >
      <VWindowItem>
        <OverView />
      </VWindowItem>

      <VWindowItem>
        <QualificationCharts />
      </VWindowItem>

      <VWindowItem>
        <PreferencesChart />
      </VWindowItem>
    </VWindow>
  </VCol>
</template>

<style scoped lang="scss">

</style>
