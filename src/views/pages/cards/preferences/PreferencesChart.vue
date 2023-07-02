<script setup>
import axiosIns from "@axios";
import moment from "moment";

const days = ref([
  {
    id: 1,
    name: 'Monday',
    morning: false,
    afternoon: false,
    evening: false,
    awakeNight: false,
    sleepNight: false,
  },
  {
    id: 2,
    name: 'Tuesday',
    morning: false,
    afternoon: false,
    evening: false,
    awakeNight: false,
    sleepNight: false,
  },
  {
    id: 3,
    name: 'Wednesday',
    morning: false,
    afternoon: false,
    evening: false,
    awakeNight: false,
    sleepNight: false,
  },
  {
    id: 4,
    name: 'Thursday',
    morning: false,
    afternoon: false,
    evening: false,
    awakeNight: false,
    sleepNight: false,
  },
  {
    id: 5,
    name: 'Friday',
    morning: false,
    afternoon: false,
    evening: false,
    awakeNight: false,
    sleepNight: false,
  },
  {
    id: 6,
    name: 'Saturday',
    morning: false,
    afternoon: false,
    evening: false,
    awakeNight: false,
    sleepNight: false,
  },
  {
    id: 7,
    name: 'Sunday',
    morning: false,
    afternoon: false,
    evening: false,
    awakeNight: false,
    sleepNight: false,
  }
])
const preferredLocation = ref([])
const preferredTowns = ref([])
const lastUpdated = ref('')
const locations = ref([])
const towns = ref([])
// watch(preferredLocation, (val) => {
//   console.log('preferredLocation', val)
// })
// watch(preferredTowns, (val) => {
//   console.log('preferredTowns', val)
// })
// watch(lastUpdated, (val) => {
//   console.log('lastUpdated', val)
// })
onMounted(() => {
  getLocations()
  getTowns()
  getPreferences()
})

function getLocations() {
  axiosIns.get('/locations')
    .then(response => {
      locations.value = response.data.data
    })
    .catch(error => {
      console.log(error)
    })
}

function getTowns() {
  axiosIns.get('/towns')
    .then(response => {
      towns.value = response.data.data
    })
    .catch(error => {
      console.log(error)
    })
}

const myPreferences = ref({})

function getPreferences() {
  axiosIns.get('/my_preferencs')
    .then(response => {
      myPreferences.value = response.data.data?.[0]
      preferredLocation.value = response.data?.data[0]?.preferred_locations?.split(',')?.map((id) => locations.value.find((location) => location.id === parseInt(id)))?.filter(Boolean)
      preferredTowns.value = response.data?.data[0]?.preferred_towns?.split(',')?.map((id) => towns.value.find((town) => town.id === parseInt(id)))?.filter(Boolean)
      lastUpdated.value = response.data.data[0].updated_at ? moment(response.data.data[0].updated_at).format('DD/MM/YYYY') : moment(response.data.data[0].created_at).format('DD/MM/YYYY')
      formatData(response.data.data)
    })
    .catch(error => {
      console.log(error)
    })
}

function formatData(data) {
  days.value.forEach((day, index) => {
    const item = data[index]
    if (item?.Monday) {
      days.value[0].morning = item.Monday.includes('1')
      days.value[0].afternoon = item.Monday.includes('2')
      days.value[0].evening = item.Monday.includes('3')
      days.value[0].awakeNight = item.Monday.includes('4')
      days.value[0].sleepNight = item.Monday.includes('5')
    }
    if (item?.Tuesday) {
      days.value[1].morning = item.Tuesday.includes('1')
      days.value[1].afternoon = item.Tuesday.includes('2')
      days.value[1].evening = item.Tuesday.includes('3')
      days.value[1].awakeNight = item.Tuesday.includes('4')
      days.value[1].sleepNight = item.Tuesday.includes('5')
    }
    if (item?.Wednesday) {
      days.value[2].morning = item.Wednesday.includes('1')
      days.value[2].afternoon = item.Wednesday.includes('2')
      days.value[2].evening = item.Wednesday.includes('3')
      days.value[2].awakeNight = item.Wednesday.includes('4')
      days.value[2].sleepNight = item.Wednesday.includes('5')
    }
    if (item?.Thursday) {
      days.value[3].morning = item.Thursday.includes('1')
      days.value[3].afternoon = item.Thursday.includes('2')
      days.value[3].evening = item.Thursday.includes('3')
      days.value[3].awakeNight = item.Thursday.includes('4')
      days.value[3].sleepNight = item.Thursday.includes('5')
    }
    if (item?.Friday) {
      days.value[4].morning = item.Friday.includes('1')
      days.value[4].afternoon = item.Friday.includes('2')
      days.value[4].evening = item.Friday.includes('3')
      days.value[4].awakeNight = item.Friday.includes('4')
      days.value[4].sleepNight = item.Friday.includes('5')
    }
    if (item?.Saturday) {
      days.value[5].morning = item.Saturday.includes('1')
      days.value[5].afternoon = item.Saturday.includes('2')
      days.value[5].evening = item.Saturday.includes('3')
      days.value[5].awakeNight = item.Saturday.includes('4')
      days.value[5].sleepNight = item.Saturday.includes('5')
    }
    if (item?.Sunday) {
      days.value[6].morning = item.Sunday.includes('1')
      days.value[6].afternoon = item.Sunday.includes('2')
      days.value[6].evening = item.Sunday.includes('3')
      days.value[6].awakeNight = item.Sunday.includes('4')
      days.value[6].sleepNight = item.Sunday.includes('5')
    }
  })
}

const submitPreferences = () => {
  const profile_id = JSON.parse(localStorage.getItem('userProfile') || '{}').id
  const Monday = [days.value[0].morning ? '1' : null, days.value[0].afternoon ? '2' : null, days.value[0].evening ? '3' : null, days.value[0].awakeNight ? '4' : null, days.value[0].sleepNight ? '5' : null].filter(Boolean).join(',')
  const Tuesday = [days.value[1].morning ? '1' : null, days.value[1].afternoon ? '2' : null, days.value[1].evening ? '3' : null, days.value[1].awakeNight ? '4' : null, days.value[1].sleepNight ? '5' : null].filter(Boolean).join(',')
  const Wednesday = [days.value[2].morning ? '1' : null, days.value[2].afternoon ? '2' : null, days.value[2].evening ? '3' : null, days.value[2].awakeNight ? '4' : null, days.value[2].sleepNight ? '5' : null].filter(Boolean).join(',')
  const Thursday = [days.value[3].morning ? '1' : null, days.value[3].afternoon ? '2' : null, days.value[3].evening ? '3' : null, days.value[3].awakeNight ? '4' : null, days.value[3].sleepNight ? '5' : null].filter(Boolean).join(',')
  const Friday = [days.value[4].morning ? '1' : null, days.value[4].afternoon ? '2' : null, days.value[4].evening ? '3' : null, days.value[4].awakeNight ? '4' : null, days.value[4].sleepNight ? '5' : null].filter(Boolean).join(',')
  const Saturday = [days.value[5].morning ? '1' : null, days.value[5].afternoon ? '2' : null, days.value[5].evening ? '3' : null, days.value[5].awakeNight ? '4' : null, days.value[5].sleepNight ? '5' : null].filter(Boolean).join(',')
  const Sunday = [days.value[6].morning ? '1' : null, days.value[6].afternoon ? '2' : null, days.value[6].evening ? '3' : null, days.value[6].awakeNight ? '4' : null, days.value[6].sleepNight ? '5' : null].filter(Boolean).join(',')

  const data = {
    ...(myPreferences.value ? myPreferences.value : {}),
    profile_id: profile_id,
    preferred_locations: preferredLocation.value?.join(','),
    preferred_towns: preferredTowns.value?.join(','),
    updated_at: moment().format('YYYY-MM-DD HH:mm:ss'),
    created_at: myPreferences.value?.created_at || moment().format('YYYY-MM-DD HH:mm:ss'),
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  if (!myPreferences.value?.id) {
  axiosIns.post('my_preferencs/' + myPreferences.value?.id, data)
    .then((res) => {
      if (res.data.status === 'success') {
        alert('Preferences updated successfully')
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }else {
    axiosIns.post('my_preferencs/save', data)
      .then((res) => {
        if (res.data.status === 'success') {
          alert('Preferences updated successfully')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>

<template>
  <VCard
    title="Preferences"
  >
    <VSpacer/>
    <VRow class="pa-5">
      <VCol cols="4">
        <v-text>
          Preferred Location
          </v-text>
<v-select
          label=""
          v-model="preferredLocation"
          :items="locations"
          item-value="id"
          item-title="address"
          multiple
          outlined
          clearable
        ></v-select>
      </VCol>
      <VCol cols="4">
        <v-text>
          Preferred Towns
          </v-text>
        <VSelect
          v-model="preferredTowns"
          :items="towns"
          item-title="town"
          item-value="id"
          label=""
          outlined
          multiple
          clearable
        />
      </VCol>
      <VCol cols="4">
        <v-text>
          Last Updated
          </v-text>
        <VTextField
          v-model="lastUpdated"
          readonly
          placeholder=""
          outlined
        />
      </VCol>
    </VRow>
    <VTable
      hover
      class="text-no-wrap pa-8"
    >
      <thead>
      <tr>
        <th
          scope="col"
        />
        <th scope="col">
          Morning
        </th>
        <th scope="col">
          Afternoon
        </th>
        <th scope="col">
          Evening
        </th>
        <th scope="col">
          Awake Night
        </th>
        <th scope="col">
          Sleep Night
        </th>
      </tr>
      </thead>
      <tbody>
      <tr
        v-for="day in days"
        :key="day.id"
      >
        <td>
          {{ day.name }}
        </td>
        <td>
          <VCheckbox
            v-model="day.morning"
          />
        </td>
        <td>
          <VCheckbox
            v-model="day.afternoon"
          />
        </td>
        <td>
          <VCheckbox
            v-model="day.evening"
          />
        </td>
        <td>
          <VCheckbox
            v-model="day.awakeNight"
          />
        </td>
        <td>
          <VCheckbox
            v-model="day.sleepNight"
          />
        </td>
      </tr>
      </tbody>
    </VTable>
    <VRow class="pa-5">
      <VCol cols="12">
        <VBtn
          color="primary"
          class="ml-4"
          @click="submitPreferences"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 19px;
}
</style>
