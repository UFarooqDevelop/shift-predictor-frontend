<script setup>
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
    },
  ]
)
const shifts = [
  {
    id: 1,
    shift: 'Morning',
  },
  {
    id: 2,
    shift: 'Afternoon',
  },
  {
    id: 3,
    shift: 'Evening',
  },
  {
    id: 4,
    shift: 'Awake Night',
  },
  {
    id: 5,
    shift: 'Sleep Night',
  },
]

const submitPreferences = () => {
  console.log('submitPreferences')

  //   add sweet alert
  return true
}
</script>

<template>
  <VCard
    title="Preferences"
  >
    <VSpacer />
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
