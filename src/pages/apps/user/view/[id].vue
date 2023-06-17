<script setup>
import { useUserListStore } from '@/views/apps/user/useUserListStore'
import UserBioPanel from '@/views/apps/user/view/UserBioPanel.vue'
import UserTabBillingsPlans from '@/views/apps/user/view/UserTabBillingsPlans.vue'
import UserTabConnections from '@/views/apps/user/view/UserTabConnections.vue'
import UserTabNotifications from '@/views/apps/user/view/UserTabNotifications.vue'
import UserTabOverview from '@/views/apps/user/view/UserTabOverview.vue'
import UserTabSecurity from '@/views/apps/user/view/UserTabSecurity.vue'
import UserInfoCard from "@/views/pages/cards/card-advance/UserInfoCard.vue"
import avatar from '@/assets/images/avatars/avatar-1.png'

const userListStore = useUserListStore()
const route = useRoute()
const userData = ref()
const userTab = ref(null)

const tabs = [
  {
    icon: 'tabler-user-check',
    title: 'Overview',
  },
  {
    icon: 'tabler-lock',
    title: 'Security',
  },
]

//
// userListStore.fetchUser(Number(route.params.id)).then(response => {
//   userData.value = response.data
// })

const userInfo = {
  avatar: avatar,
  reference : '123456789',
  name : 'John Doe',
  email : 'john@gmai.com',
  phone : '1234567890',
  address : '1234 Main St',
  city : 'Anytown',
  postalCode : '12345',
  driver: 'Yes',
}
</script>

<template>
  <VRow v-if="userInfo">
    <VCol
      cols="12"
    >
      <UserBioPanel :user-data="userInfo" />
      <!--      <UserInfoCard :user-data="userData" /> -->
    </VCol>
  </VRow>
</template>
