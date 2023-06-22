<script setup>

const userInfo = ref(JSON.parse(localStorage.getItem('userData')) || {})
// const userInfo = {
//   reference : '123456789',
//   name : 'John Doe',
//   email : 'john@gmai.com',
//   phone : '1234567890',
//   address : '1234 Main St',
//   city : 'Anytown',
//   postalCode : '12345',
//   driver: 'Yes',
// }
</script>

<template>
  <VCard
    title="Information"
    style="height: 550px; overflow-y: auto;"
  >
    <VSpacer />
    <VCardText>
      <VList class="card-list">
        <VListItem>
          <VListItemTitle>
            <h6 class="text-base font-weight-semibold w-25">
              Reference:
              <span class="ml-lg-15" />
              <span class="text-body-2">
                {{ userInfo.reference }}
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
                {{ userInfo.username }}
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
                {{ userInfo.email }}
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
                {{ userInfo.profile.phone_number }}
              </span>
            </h6>
          </VListItemTitle>
        </VListItem>
<!--        <VListItem>-->
<!--          <VListItemTitle>-->
<!--            <h6 class="text-base font-weight-semibold w-25">-->
<!--              Address:-->
<!--              <span class="ml-lg-15" />-->
<!--              <span class="text-body-2 ml-lg-3">-->
<!--                {{ userInfo.address }}-->
<!--              </span>-->
<!--            </h6>-->
<!--          </VListItemTitle>-->
<!--        </VListItem>-->
<!--        <VListItem>-->
<!--          <VListItemTitle>-->
<!--            <h6 class="text-base font-weight-semibold w-25">-->
<!--              City:-->
<!--              <span class="ml-lg-15" />-->
<!--              <span class="text-body-2 ml-lg-11">-->
<!--                {{ userInfo.city }}-->
<!--              </span>-->
<!--            </h6>-->
<!--          </VListItemTitle>-->
<!--        </VListItem>-->
<!--        <VListItem>-->
<!--          <VListItemTitle>-->
<!--            <h6 class="text-base font-weight-semibold w-25">-->
<!--              Postal Code:-->
<!--              <span class="ml-lg-11" />-->
<!--              <span class="text-body-2">-->
<!--                {{ userInfo.postalCode }}-->
<!--              </span>-->
<!--            </h6>-->
<!--          </VListItemTitle>-->
<!--        </VListItem>-->
        <VListItem>
          <VListItemTitle>
            <h6 class="text-base font-weight-semibold w-25">
              Driver:
              <span class="ml-lg-15" />
              <span class="text-body-2 ml-lg-8">
                {{ userInfo.profile?.is_driver ? 'Yes' : 'No' }}
              </span>
            </h6>
          </VListItemTitle>
        </vlistitem>
      </VList>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 19px;
}
</style>
