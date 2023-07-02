<script setup>
import { initialAbility } from '@/plugins/casl/ability'
import { useAppAbility } from '@/plugins/casl/useAppAbility'

const router = useRouter()
const ability = useAppAbility()
const userData = JSON.parse(localStorage.getItem('userData') || 'null')

const logout = () => {

  // Remove "userData" from localStorage
  localStorage.removeItem('userData')
  localStorage.removeItem('userProfile')
  // Remove "accessToken" from localStorage
  localStorage.removeItem('accessToken')
  router.push('/login').then(() => {

    // Remove "userAbilities" from localStorage
    localStorage.removeItem('userAbilities')

    // Reset ability to initial ability
    ability.update(initialAbility)
  })
}
</script>

<template>
  <div class="d-flex align-center gap-2">
    <span class="text-lg-heading"> {{ userData.username }} | </span>
    <VBadge
      dot
      location="bottom right"
      offset-x="3"
      offset-y="3"
      bordered
      color="success"
    >
      <VAvatar
        class="cursor-pointer"
        color="primary"
        variant="tonal"
      >
        <VImg
          v-if="userData && userData.avatar"
          :src="userData.avatar"
        />
        <VIcon
          v-else
          icon="tabler-user"
        />

        <!-- SECTION Menu -->
        <VMenu
          activator="parent"
          width="230"
          location="bottom end"
          offset="14px"
        >
          <VList>
            <!-- 👉 User Avatar & Name -->
            <VListItem>
              <template #prepend>
                <VListItemAction start>
                  <VBadge
                    dot
                    location="bottom right"
                    offset-x="3"
                    offset-y="3"
                    color="success"
                  >
                    <VAvatar
                      color="primary"
                      variant="tonal"
                    >
                      <VImg
                        v-if="userData && userData.avatar"
                        :src="userData.avatar"
                      />
                      <VIcon
                        v-else
                        icon="tabler-user"
                      />
                    </VAvatar>
                  </VBadge>
                </VListItemAction>
              </template>

              <VListItemTitle class="font-weight-semibold">
<!--                {{ userData.fullName }} -->
                    {{ userData.username }}
              </VListItemTitle>
              <!--              <VListItemSubtitle>{{ userData.role }}</VListItemSubtitle> -->
            </VListItem>


            <!-- 👉 Profile 
            <VListItem :to="{ name: 'apps-user-view-id', params: { id: userData.id } }">
                 <template #prepend>
             <VIcon
                  class="me-2"
                  icon="tabler-user"
                  size="22"
                />
              </template> 

           <VListItemTitle>Profile</VListItemTitle>
            </VListItem>-->

            <VDivider class="my-2" />

            <!-- 👉 Logout -->
            <VListItem
              link
              @click="logout"
            >
              <template #prepend>
                <VIcon
                  class="me-2"
                  icon="tabler-logout"
                  size="22"
                />
              </template>

              <VListItemTitle>Logout</VListItemTitle>
            </VListItem>
          </VList>
        </VMenu>
        <!-- !SECTION -->
      </VAvatar>
    </VBadge>
  </div>
</template>
