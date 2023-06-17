<script setup>
const props = defineProps({
  userData: {
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

const userData = ref(structuredClone(toRaw(props.userData)))
const isUseAsBillingAddress = ref(false)

watch(props, () => {
  userData.value = structuredClone(toRaw(props.userData))
})

const onFormSubmit = () => {
  emit('update:modelValue', false)
  emit('submit', userData.value)
}

const onFormReset = () => {
  userData.value = structuredClone(toRaw(props.userData))
  emit('update:isDialogVisible', false)
}

const dialogModelValueUpdate = val => {
  emit('update:isDialogVisible', val)
}

const avatar = ref(1)
</script>

<template>
  <VDialog
    :width="$vuetify.display.smAndDown ? 'auto' : 700"
    :model-value="props.isDialogVisible"
    @update:model-value="dialogModelValueUpdate"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="dialogModelValueUpdate(false)" />

    <VCard class="pa-sm-14 pa-5">
      <VCardItem class="text-center">
        <VCardTitle class="text-h5 mb-3">
          Edit Information
        </VCardTitle>
        <!--        <p class="mb-0"> -->
        <!--          Updating user details will receive a privacy audit. -->
        <!--        </p> -->
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
              class="d-flex justify-center align-baseline"
            >
              <!-- 👉 Avatar -->
              <VImg
                v-if="userData.avatar"
                :src="userData.avatar"
                max-width="80"
                max-height="80"
              />
              <span id="inspire">
                <VFileInput
                  v-model="avatar"
                  accept="image/*"
                  show-size
                  class="ml-4"
                  prepend-icon="mdi-camera"
                  hide-input
                />
              </span>
            </VCol>
            <!-- 👉 Reference Id -->
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="userData.reference"
                label="Reference Id"
              />
            </VCol>
            <!-- 👉 Name -->
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="userData.name"
                label="first Name"
              />
            </VCol>
            <!-- 👉 Email -->
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="userData.email"
                label="Email"
              />
            </VCol>

            <!-- 👉 Contact -->
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="userData.phone"
                label="Contact"
              />
            </VCol>

            <!-- 👉 Submit and Cancel -->
            <VCol
              cols="12"
              class="d-flex flex-wrap justify-center gap-4"
            >
              <VBtn type="submit">
                Submit
              </VBtn>

              <VBtn
                color="secondary"
                variant="tonal"
                @click="onFormReset"
              >
                Cancel
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
