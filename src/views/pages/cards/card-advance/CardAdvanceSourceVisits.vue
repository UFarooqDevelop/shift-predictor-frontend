<script setup>
import ShiftInfo from "@core/components/ShiftInfo.vue"
import axiosIns from "@axios";
import moment from "moment";

const recomendedShifts = ref([
  // {
  //   avatarIcon: 'tabler-plus',
  //   location: 'Loction 1',
  //   time: '8:00 AM',
  //   date: '11/11/2021',
  //   updated: '2hr ago',
  //   status: 'Pending',
  // },
  // {
  //   avatarIcon: 'tabler-plus',
  //   location: 'Loction 2',
  //   time: '8:00 AM',
  //   date: '11/11/2021',
  //   updated: '2hr ago',
  //   status: 'Pending',
  // },
  // {
  //   avatarIcon: 'tabler-plus',
  //   location : 'Loction 3',
  //   time: '8:00 AM',
  //   date: '11/11/2021',
  //   updated: '22min ago',
  //   status: 'Pending',
  // },
  // {
  //   avatarIcon: 'tabler-check',
  //   location: 'Loction 4',
  //   time: '8:00 AM',
  //   date: '11/11/2021',
  //   updated: '22min ago',
  //   status: 'Accepted',
  // },
  // {
  //   avatarIcon: 'tabler-plus',
  //   location: 'Loction 5',
  //   time: '8:00 AM',
  //   date: '11/11/2021',
  //   updated: '22min ago',
  //   status: 'Pending',
  // },
  // {
  //   avatarIcon: 'tabler-check',
  //   location: 'Loction 6',
  //   time: '8:00 AM',
  //   date: '11/11/2021',
  //   updated: '22min ago',
  //   status: 'Accepted',
  // },
  // {
  //   avatarIcon: 'tabler-plus',
  //   location: 'Loction 7',
  //   time: '8:00 AM',
  //   date: '11/11/2021',
  //   updated: '22min ago',
  //   status: 'Pending',
  // },
  // {
  //   avatarIcon: 'tabler-plus',
  //   location: 'Loction 8',
  //   time: '8:00 AM',
  //   date: '11/11/2021',
  //   updated: '22min ago',
  //   status: 'Pending',
  // },
  // {
  //   avatarIcon: 'tabler-check',
  //   location: 'Loction 9',
  //   time: '8:00 AM',
  //   date: '11/11/2021',
  //   updated: '22min ago',
  //   status: 'Accepted',
  // },
  // {
  //   avatarIcon: 'tabler-plus',
  //   location: 'Loction 10',
  //   time: '8:00 AM',
  //   date: '11/11/2021',
  //   updated: '22min ago',
  //   status: 'Pending',
  // },
])

const isShiftDialogVisible = ref(false)

const shiftToEdit = ref ()
const openShiftToEditDialog = (shift) => {
  isShiftDialogVisible.value = true
  shiftToEdit.value = shift
}
onMounted(() => {
  getRecommendedList()
})
function getRecommendedList() {
  axiosIns.get('recomended_shifts').then((res) => {
    recomendedShifts.value = res.data?.data
  }).catch((err) => {
    console.log(err)
  })
}
</script>

<template>
  <VCard
    title="Recommended Shifts"
    max-height="550px"
    style="overflow-y: auto;"
  >
    <VCardText>
      <VList class="card-list">
        <VListItem
          v-for="shift in recomendedShifts"
          :key="shift.id"
        >
          <template #prepend>
            <VAvatar
              :border="false"
              size="34"
              :color="shift?.us_action === 0 ? 'primary' : 'success'"
              circle
            >
              <VIcon
                :icon="
                  shift?.us_action === 1 ? 'tabler-check' : 'tabler-plus'"
                @click="openShiftToEditDialog(shift)"
              />
            </VAvatar>
          </template>

          <VListItemTitle class="font-weight-semibold">
            {{ shift?.location?.address ? shift?.location?.address : '' }}
          </VListItemTitle>
          <VListItemSubtitle>
            Scheduled at:  {{ shift?.shift_date ? moment(shift?.shift_date).format('DD/MM/YYYY') : '' }} @ {{ shift?.start_time ? shift?.start_time : '' }}
          </VListItemSubtitle>
          <VListItemSubtitle>
            Last updated:   {{ shift?.updated_at ? moment(shift?.updated_at).format('DD/MM/YYYY') : '' }}
          </vlistitemsubtitle>
        </VListItem>
      </VList>
    </VCardText>
    <ShiftInfo
      v-model:isDialogVisible="isShiftDialogVisible"
      :shift-data="shiftToEdit"
      @submit="getRecommendedList"
    />
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 19px;
}
</style>
