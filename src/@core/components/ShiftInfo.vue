<script setup>
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

const onFormSubmit = () => {
  emit('update:modelValue', false)
  emit('submit', shiftData.value)
}

const onFormReset = () => {
  shiftData.value = structuredClone(toRaw(props.shiftData))
  emit('update:isDialogVisible', false)
}

const dialogModelValueUpdate = val => {
  emit('update:isDialogVisible', val)
}
</script>

<template>
  <VDialog
    :width="$vuetify.display.smAndDown ? 'auto' : 700"
    :model-value="props.isDialogVisible"
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
          @submit.prevent="onFormSubmit"
        >
          <VRow>
            <VCol
              cols="12"
              md="6"
              lg="4"
            >
              <VTextField
                v-model="shiftData.location"
                label="Location"
              />
            </VCol>
            <!-- 👉 date -->
            <VCol
              cols="12"
              md="6"
              lg="4"
            >
              <VTextField
                v-model="shiftData.date"
                label="Date"
              />
            </VCol>
            <!-- 👉 start and end time -->
            <VCol
              cols="12"
              md="6"
              lg="4"
            >
              <VTextField
                v-model="shiftData.time"
                label="Start/End Time"
              />
            </VCol>
            <!--            status -->
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="shiftData.status"
                label="Status"
              />
            </VCol>

            <VCol cols="12">
              <VCardText
                class=""
              >
                Did you enjoy this shift?
                <VCol cols="12">
                    <VIcon
                      class="mr-2"
                      color="primary"
                      icon="mdi-thumbs-up"
                    />
                    <VIcon
                      class="mr-2"
                      color="primary"
                      icon="mdi-thumb-down"
                    />
                </VCol>
              </vcardtext>
            </VCol>
            <!-- 👉 Submit and Cancel -->
            <VCol
              cols="12"
              class="d-flex flex-wrap justify-start gap-4"
            >
              <VBtn type="submit">
                Accept
              </VBtn>

              <VBtn
                @click="onFormReset"
              >
                Reject
              </VBtn>
              <VBtn>
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
