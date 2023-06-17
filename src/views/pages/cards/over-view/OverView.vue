<script setup lang="ts">
import UserTabOverview from "@/views/apps/user/view/UserTabOverview.vue"
import CardAdvanceSourceVisits from "@/views/pages/cards/card-advance/CardAdvanceSourceVisits.vue"
import UserInfoCard from "@/views/pages/cards/card-advance/UserInfoCard.vue"
import Calendar from "@/pages/apps/calendar.vue"
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex flex-row pa-0"
    >
      <!-- SECTION User Details -->
      <VCol
        cols="6"
      >
        <UserInfoCard />
      </VCol>
      <VDivider class="mx-2" />
      <VCol cols="6">
        <VCard>
          <VRow>
            <VCol cols="12">
              <CardAdvanceSourceVisits />
            </VCol>
          </VRow>
        </VCard>
      </VCol>
    </VCol>
    <VCol cols="12">
      <Calendar />
    </VCol>
  </VRow>
</template>
