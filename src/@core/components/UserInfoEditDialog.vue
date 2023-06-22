<script setup>
import {
  avatarText,
  kFormatter,
} from '@core/utils/formatters'
import axios from "axios";
import axiosIns from "@axios";
import {requiredValidator, emailValidator} from '@core/utils/validators'

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
const token = ref(JSON.parse(localStorage.getItem('accessToken')))
// Remove double quotes from the token string
const tokenToSendForAuth = token.value.replace(/"/g, '');
//
// watch(props, () => {
//   userData.value = structuredClone(toRaw(props.userData))
// })

const onFormSubmit = () => {
  emit('update:modelValue', userData.value)
  // emit('submit', userData.value)
  submit(JSON.parse(JSON.stringify(userData.value)))
}

const onFormReset = () => {
  userData.value = structuredClone(toRaw(props.userData))
  emit('update:isDialogVisible', true)
}

const dialogModelValueUpdate = val => {
  emit('update:isDialogVisible', val)
}

const submit = (data) => {
  axiosIns.post(`/profile/${data.profile.id}`, data.profile)
    .then(response => {
      localStorage.setItem('userData', JSON.stringify(data))
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  emit('submit', data)
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
          ref="editUserForm"
          @submit.prevent="onFormSubmit"
        >
          <VRow>
            <VCol
              cols="12"
              class="d-flex justify-center align-baseline"
            >
              <!-- 👉 Avatar -->
              <VImg
                v-if="userData?.profile?.picture"
                :src="userData?.profile?.picture"
                max-width="80"
                max-height="80"
              />
              <VAvatar
                v-else
                rounded
                :size="80"
                color="primary"
                variant="tonal"
              >
                <span
                  v-if="!userData?.profile?.picture"
                  class="text-5xl font-weight-semibold"
                >
                  {{ avatarText(userData.username) }}
                </span>
              </VAvatar>
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
<!--            &lt;!&ndash; 👉 Reference Id &ndash;&gt;-->
<!--            <VCol-->
<!--              cols="12"-->
<!--              md="6"-->
<!--            >-->
<!--              <VTextField-->
<!--                v-model="userData.reference"-->
<!--                label="Reference Id"-->
<!--              />-->
<!--            </VCol>-->
            <!-- 👉 Name -->
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="userData.username"
                label="Name"
                :rules="[requiredValidator]"
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
                :rules="[requiredValidator, emailValidator]"
              />
            </VCol>

            <!-- 👉 Contact -->
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="userData.profile.phone_number"
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
