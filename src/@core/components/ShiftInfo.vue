<script setup>
import axiosIns from "@axios";
import moment from "moment";
const props = defineProps({
  shiftData: {
    type: Object,
    required: true,
  },
  isDialogVisible: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits([
  'update:modelValue',
  'submit',
  'update:isDialogVisible',
])

const shiftData = ref(structuredClone(toRaw(props.shiftData)))

watch(props, () => {
  shiftData.value = structuredClone(toRaw(props.shiftData))
})
const startAndEndTime= computed(() => (shiftData.value?.start_time || 'N/A') + ' - ' + (shiftData.value?.end_time || 'N/A'))
const isLiked = ref(false)
const isDisliked = ref(false)
const enjoyementRatingError = ref('')
const status = computed(() => shiftData.value?.us_action === 1 ? 'Active' : 'Inactive')
const formatedDate = computed(() =>   moment(new Date(shiftData.value?.shift_date)).isValid()===true ? moment(shiftData.value?.shift_date).format("DD/MM/YYYY"):'' )
const submitForm = (actionType) => {
  axiosIns.post('recomended_shifts/'+shiftData.value.id, {
    ...(shiftData.value || {}),
    us_action: actionType,
    enjoyment_rating: isLiked.value ? 1 : isDisliked.value ? 0 : 0
  }).then(response => {
    emit( 'update:isDialogVisible', false)
    emit('submit', shiftData.value)
  }).catch(error => {
    console.log(error)
  })
}
const isPastAndAcceptedShift = (shift) => {
  const shiftDayArr = shift?.shift_date?.split('-')
  const shiftDay = shiftDayArr?.[shiftDayArr?.length - 1] ? parseInt(shiftDayArr?.[shiftDayArr?.length - 1]) : 0
  console.log(new Date().getHours(), parseInt(shift?.end_time?.split(':')[0]), shiftDay)
  return shift?.us_action === 1 && (shiftDay < new Date().getDate() ? parseInt(shift?.end_time?.split(':')[0]) < new Date().getHours() ? true : true : false)
}
const onFormReset = () => {
  shiftData.value = structuredClone(toRaw(props.shiftData))
  emit('update:isDialogVisible', false)
}
const acceptShift = () => {

}
const dialogModelValueUpdate = val => {
  emit('update:isDialogVisible', val)
}

</script>

<template>
  <VDialog
    :width="$vuetify.display.smAndDown ? 'auto' : 700"
    :model-value="isDialogVisible"
    @update:model-value="dialogModelValueUpdate"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="dialogModelValueUpdate(false)" />

    <VCard class="pa-sm-14" style="padding: 0 !important;">
      <VCardItem class="text-center">
        <VCardTitle class="text-h5 mb-3">
          Shift Details
        </VCardTitle>
      </VCardItem>

      <VCardText>
        <!-- 👉 Form -->
        <VForm
          class="mt-6"
        >
          <VRow>
            <VCol
              cols="12"
              md="6"
              lg="4"
            >
              <VTextField
                v-model="shiftData.location.address"
                label="Location"
                readonly
              />
            </VCol>
            <!-- 👉 date -->
            <VCol
              cols="12"
              md="6"
              lg="4"
            >
              <VTextField
                v-model="formatedDate"
                label="Date"
                readonly
              />
            </VCol>
            <!-- 👉 start and end time -->
            <VCol
              cols="12"
              md="6"
              lg="4"
            >
              <VTextField
                v-model="startAndEndTime"
                label="Start/End Time"
                readonly
              />
            </VCol>
            <!--            status -->
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="status"
                label="Status"
                readonly
              />
            </VCol>

            <VCol v-if="isPastAndAcceptedShift(shiftData)" cols="12">
              <VCardText
                class="pa-0 pb-2"
              >
                Did you enjoy this shift?
                <VCol cols="12">
                    <VIcon
                      class="mr-2"
                      :color="isLiked ? 'primary' : 'grey'"
                      icon="mdi-thumbs-up"
                      @click="isLiked = !isLiked , isDisliked = false"
                    />
                    <VIcon
                      class="mr-2"
                      :color="isDisliked ? 'primary' : 'grey'"
                      icon="mdi-thumb-down"
                      @click="isDisliked = !isDisliked , isLiked = false"
                    />
                </VCol>
                <VCol v-if="enjoyementRatingError" class="mt-0 pt-0 text-error" style="font-weight: 600" cols="12">
                  <span>{{ enjoyementRatingError }}</span>
                </VCol>
              </VCardText>
            </VCol>
            <!-- 👉 Submit and Cancel -->
            <VCol
              cols="12"
              class="d-flex flex-wrap justify-start gap-4"
            >
              <VBtn @click.stop="submitForm(1)">
                Accept
              </VBtn>

              <VBtn
                @click="submitForm(2)"
              >
                Reject
              </VBtn>
              <VBtn @click="submitForm(3)">
                Not Interested
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </VDialog>
</template>

<style scoped lang="scss">
#inspire {
  ::v-deep {
    .v-input__control {
      display: none;
    }
  }
}
</style>
