<script setup>
import {
  avatarText,
  kFormatter,
} from '@core/utils/formatters'
import UserInfoEditDialog from "@core/components/UserInfoEditDialog.vue";
const props = defineProps({
  userData: {
    type: Object,
    required: true,
  },
})
const emit = defineEmits(['update:user-data'])
const reload = (data) => {
  console.log(data)
  // window.location.reload()
  emit('update:user-data', data)
}
// props.userData = computed(() => JSON.parse(localStorage.getItem('userData') || 'null'))
// watch(props, () => {
//   props.userData = JSON.parse(localStorage.getItem('userData') || 'null')
// })

const isUserInfoEditDialogVisible = ref(false)
const isUpgradePlanDialogVisible = ref(false)

</script>

<template>
  <VRow class="d-flex justify-center">
    <!-- SECTION User Details -->
    <VCol cols="12"
          lg="8"
          xl="9"
          sm="12"
          md="12"
    >
      <VCard v-if="props.userData">
        <VCardText class="text-center pt-15">
          <!-- 👉 Avatar -->
          <VAvatar
            rounded
            :size="120"
            color="primary"
            variant="tonal"
          >
            <VImg
              v-if="props.userData?.profile?.picture"
              :src="'data:image/jpeg;base64,'+props.userData?.profile?.picture"
            />
            <span
              v-else
              class="text-5xl font-weight-semibold"
            >
              {{avatarText(props.userData.username) }}
<!--              {{ avatarText(props.userData.first_name) }}{{ avatarText(props.userData.last_name) }}-->
            </span>
          </VAvatar>

          <!-- 👉 User fullName -->
          <h6 class="text-h6 mt-4">
            {{ props.userData.username }}
<!--            {{ props.userData.first_name }} {{ props.userData.last_name }}-->
          </h6>
        </VCardText>

        <VCardText class="d-flex flex-column justify-center flex-wrap mt-3">
          <VDivider />

          <!-- 👉 Details -->
          <VCardText>
            <p class="text-sm text-uppercase text-disabled">
              Details
            </p>

            <!-- 👉 User Details list -->
            <VList class="card-list">
              <VListItem>
                <VListItemTitle>
                  <h6 class="text-base font-weight-semibold w-25">
                    Reference:
                    <span class="ml-lg-15" />
                    <span class="text-body-2">
                      {{ props.userData.reference }}
                    </span>
                  </h6>
                </VListItemTitle>
              </VListItem>
              <VListItem>
                <VListItemTitle>
                  <h6 class="text-base font-weight-semibold w-25">
                    Name:
                    <span class="ml-lg-15" />
                    <span class="text-body-2 ml-lg-8">
                      {{ props.userData.username }}
<!--                      {{ props.userData.first_name }} {{ props.userData.last_name }}-->
                    </span>
                  </h6>
                </VListItemTitle>
              </VListItem>
              <VListItem>
                <VListItemTitle>
                  <h6 class="text-base font-weight-semibold w-25">
                    Email:
                    <span class="ml-lg-15" />
                    <span class="text-body-2 ml-lg-9">
                      {{ props.userData.email }}
                    </span>
                  </h6>
                </VListItemTitle>
              </VListItem>
              <VListItem>
                <VListItemTitle>
                  <h6 class="text-base font-weight-semibold w-25">
                    Phone:
                    <span class="ml-lg-15" />
                    <span class="text-body-2 ml-lg-7">
                      {{ props.userData?.profile?.phone_number }}
                    </span>
                  </h6>
                </VListItemTitle>
              </VListItem>
<!--              <VListItem>-->
<!--                <VListItemTitle>-->
<!--                  <h6 class="text-base font-weight-semibold w-25">-->
<!--                    Address:-->
<!--                    <span class="ml-lg-15" />-->
<!--                    <span class="text-body-2 ml-lg-3">-->
<!--                      {{ props.userData.address }}-->
<!--                    </span>-->
<!--                  </h6>-->
<!--                </VListItemTitle>-->
<!--              </VListItem>-->
<!--              <VListItem>-->
<!--                <VListItemTitle>-->
<!--                  <h6 class="text-base font-weight-semibold w-25">-->
<!--                    City:-->
<!--                    <span class="ml-lg-15" />-->
<!--                    <span class="text-body-2 ml-lg-11">-->
<!--                      {{ props.userData.city }}-->
<!--                    </span>-->
<!--                  </h6>-->
<!--                </VListItemTitle>-->
<!--              </VListItem>-->
<!--              <VListItem>-->
<!--                <VListItemTitle>-->
<!--                  <h6 class="text-base font-weight-semibold w-25">-->
<!--                    Postal Code:-->
<!--                    <span class="ml-lg-11" />-->
<!--                    <span class="text-body-2">-->
<!--                      {{ props.userData.postalCode }}-->
<!--                    </span>-->
<!--                  </h6>-->
<!--                </VListItemTitle>-->
<!--              </VListItem>-->
              <VListItem>
                <VListItemTitle>
                  <h6 class="text-base font-weight-semibold w-25">
                    Driver:
                    <span class="ml-lg-15" />
                    <span class="text-body-2 ml-lg-8">
                      {{ props.userData?.profile?.is_driver ? 'Yes' : 'No' }}
                    </span>
                  </h6>
                </VListItemTitle>
              </vlistitem>
            </VList>
          </VCardText>

          <!-- 👉 Edit and Suspend button -->
          <VCardText class="d-flex justify-center mt-sm-2">
            <VBtn
              variant="elevated"
              class="me-3"
              @click="isUserInfoEditDialogVisible = true"
            >
              Edit
            </VBtn>
          </VCardText>
        </vcardtext>
      </VCard>
    </VCol>
    <!-- !SECTION -->

    <!--    &lt;!&ndash; SECTION Current Plan &ndash;&gt; -->
    <!--    <VCol cols="12"> -->
    <!--      <VCard> -->
    <!--        <VCardText class="d-flex"> -->
    <!--          &lt;!&ndash; 👉 Standard Chip &ndash;&gt; -->
    <!--          <VChip -->
    <!--            label -->
    <!--            color="primary" -->
    <!--            size="small" -->
    <!--          > -->
    <!--            Standard -->
    <!--          </VChip> -->

    <!--          <VSpacer /> -->

    <!--          &lt;!&ndash; 👉 Current Price  &ndash;&gt; -->
    <!--          <div class="d-flex align-center"> -->
    <!--            <sup class="text-primary text-sm font-weight-regular">$</sup> -->
    <!--            <h3 class="text-h3 text-primary font-weight-semibold"> -->
    <!--              99 -->
    <!--            </h3> -->
    <!--            <sub class="mt-3"><h6 class="text-sm font-weight-regular">/ month</h6></sub> -->
    <!--          </div> -->
    <!--        </VCardText> -->

    <!--        <VCardText> -->
    <!--          &lt;!&ndash; 👉 Price Benefits &ndash;&gt; -->
    <!--          <VList class="card-list"> -->
    <!--            <VListItem -->
    <!--              v-for="benefit in standardPlan.benefits" -->
    <!--              :key="benefit" -->
    <!--            > -->
    <!--              <VIcon -->
    <!--                size="12" -->
    <!--                color="#A8AAAE" -->
    <!--                class="me-2" -->
    <!--                icon="tabler-circle" -->
    <!--              /> -->
    <!--              <span>{{ benefit }}</span> -->
    <!--            </VListItem> -->
    <!--          </VList> -->

    <!--          &lt;!&ndash; 👉 Days &ndash;&gt; -->
    <!--          <div class="my-6"> -->
    <!--            <div class="d-flex font-weight-semibold mt-3 mb-2"> -->
    <!--              <h6 class="text-base font-weight-semibold"> -->
    <!--                Days -->
    <!--              </h6> -->
    <!--              <VSpacer /> -->
    <!--              <h6 class="text-base font-weight-semibold"> -->
    <!--                26 of 30 Days -->
    <!--              </h6> -->
    <!--            </div> -->

    <!--            &lt;!&ndash; 👉 Progress &ndash;&gt; -->
    <!--            <VProgressLinear -->
    <!--              rounded -->
    <!--              rounded-bar -->
    <!--              :model-value="65" -->
    <!--              height="8" -->
    <!--              color="primary" -->
    <!--            /> -->

    <!--            <p class="mt-2"> -->
    <!--              4 days remaining -->
    <!--            </p> -->
    <!--          </div> -->

    <!--          &lt;!&ndash; 👉 Upgrade Plan &ndash;&gt; -->
    <!--          <VBtn -->
    <!--            block -->
    <!--            @click="isUpgradePlanDialogVisible = true" -->
    <!--          > -->
    <!--            Upgrade Plan -->
    <!--          </VBtn> -->
    <!--        </VCardText> -->
    <!--      </VCard> -->
    <!--    </VCol> -->
    <!-- !SECTION -->
  </VRow>

  <!-- 👉 Edit user info dialog -->
  <UserInfoEditDialog
    v-model:isDialogVisible="isUserInfoEditDialogVisible"
    :user-data="props.userData"
    @submit="isUserInfoEditDialogVisible = false"
    @update:modelValue="reload"
  />

  <!-- 👉 Upgrade plan dialog -->
<!--  <UserUpgradePlanDialog v-model:isDialogVisible="isUpgradePlanDialogVisible" /> -->
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 0.7rem;
}

.text-capitalize {
  text-transform: capitalize !important;
}
</style>
