<script setup>
import ShiftInfo from "@core/components/ShiftInfo.vue"

const recomendedShifts = [
  {
    avatarIcon: 'tabler-plus',
    location: 'Loction 1',
    time: '8:00 AM',
    date: '11/11/2021',
    updated: '2hr ago',
    status: 'Pending',
  },
  {
    avatarIcon: 'tabler-plus',
    location: 'Loction 2',
    time: '8:00 AM',
    date: '11/11/2021',
    updated: '2hr ago',
    status: 'Pending',
  },
  {
    avatarIcon: 'tabler-plus',
    location : 'Loction 3',
    time: '8:00 AM',
    date: '11/11/2021',
    updated: '22min ago',
    status: 'Pending',
  },
  {
    avatarIcon: 'tabler-check',
    location: 'Loction 4',
    time: '8:00 AM',
    date: '11/11/2021',
    updated: '22min ago',
    status: 'Accepted',
  },
  {
    avatarIcon: 'tabler-plus',
    location: 'Loction 5',
    time: '8:00 AM',
    date: '11/11/2021',
    updated: '22min ago',
    status: 'Pending',
  },
  {
    avatarIcon: 'tabler-check',
    location: 'Loction 6',
    time: '8:00 AM',
    date: '11/11/2021',
    updated: '22min ago',
    status: 'Accepted',
  },
  {
    avatarIcon: 'tabler-plus',
    location: 'Loction 7',
    time: '8:00 AM',
    date: '11/11/2021',
    updated: '22min ago',
    status: 'Pending',
  },
  {
    avatarIcon: 'tabler-plus',
    location: 'Loction 8',
    time: '8:00 AM',
    date: '11/11/2021',
    updated: '22min ago',
    status: 'Pending',
  },
  {
    avatarIcon: 'tabler-check',
    location: 'Loction 9',
    time: '8:00 AM',
    date: '11/11/2021',
    updated: '22min ago',
    status: 'Accepted',
  },
  {
    avatarIcon: 'tabler-plus',
    location: 'Loction 10',
    time: '8:00 AM',
    date: '11/11/2021',
    updated: '22min ago',
    status: 'Pending',
  },
]

const isShiftDialogVisible = ref(false)

const shiftToEdit = ref ()
const openShiftToEditDialog = (shift) => {
  isShiftDialogVisible.value = true
  shiftToEdit.value = shift
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
          :key="shift.title"
        >
          <template #prepend>
            <VAvatar
              :border="false"
              size="34"
              :color="shift.avatarIcon === 'tabler-plus' ? 'primary' : 'success'"
              circle
            >
              <VIcon
                :icon="
                  shift.avatarIcon"
                @click="shift.avatarIcon === 'tabler-plus' ? openShiftToEditDialog(shift) : null"
              />
            </VAvatar>
          </template>

          <VListItemTitle class="font-weight-semibold">
            {{ shift.location }}
          </VListItemTitle>
          <VListItemSubtitle>
            {{ shift.date }} @ {{ shift.time }}
          </VListItemSubtitle>
          <VListItemSubtitle>
            {{ shift.updated }}
          </vlistitemsubtitle>
        </VListItem>
      </VList>
    </VCardText>
    <ShiftInfo
      v-model:isDialogVisible="isShiftDialogVisible"
      :shift-data="shiftToEdit"
    />
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 19px;
}
</style>
