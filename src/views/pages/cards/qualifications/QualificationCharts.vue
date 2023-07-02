
<script setup>
import axiosIns from "@axios";
const  searchValue= ref('')
const filterData= ref('')
const qualificationTable= ref([])
const page= ref(1)
const currentPage = ref(1);
const itemsPerPage = 10;
const start = computed(() => (currentPage.value - 1) * itemsPerPage);
const end = computed(() => start.value + itemsPerPage);
const totalItems = computed(() => qualificationTable.value.length);
const totalPages = computed(() => Math.ceil(totalItems.value / itemsPerPage));

onMounted(()=> {
  getQualificationTable()
})
const initialDisplayedData = computed(() => qualificationTable.value.slice(start.value, end.value));
const displayedData = computed(() => {
  if (!searchValue.value) {
    return initialDisplayedData.value;
  }

  const query = searchValue.value.toLowerCase().trim();
  return qualificationTable.value.filter(item => {
    // Replace `fieldName` with the actual field name you want to search in
    return item.training?.name.toLowerCase().includes(query);
  }).slice(start.value, end.value);
});
watch(searchValue, (val) => {
    currentPage.value = 1;
});
function getQualificationTable(){
  axiosIns.get('/my_courses')
    .then(response => {
      qualificationTable.value = response.data.data
    }).catch(error => {
    console.log(error)
  })
}
</script>

<template>
  <VCard
    title="Qualifications"
  >
    <VSpacer />
    <VRow class="px-5 d-lg-flex justify-lg-end">
<!--      <VCol-->
<!--        cols="3"-->
<!--      >-->
<!--        <VTextField-->
<!--          v-model="filterData"-->
<!--          placeholder="0 - 10 of 1000"-->
<!--          outlined-->
<!--        />-->
<!--      </VCol>-->

      <VCol cols="3">
        <VTextField
          v-model="searchValue"
          placeholder="Search"
          prepend-inner-icon="tabler-search"
          outlined
        />
      </VCol>
    </VRow>
    <VTable
      v-if="qualificationTable.length"
      :items="displayedData"
      sortable
      hover
      class="text-no-wrap pa-8"
    >
      <thead>
        <tr>
          <th
            scope="col"
            aria-sort="ascending"
          >
            QUALIFICATION
          </th>
          <th scope="col">
            CERTIFICATE NUMBER
          </th>
          <th scope="col">
            ISSUE DATE
          </th>
          <th scope="col">
            EXPIRY DATE
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="qualification in displayedData"
          :key="qualification.id"
          style="height: 3.75rem;"
        >
          <td>
            <div class="d-flex align-center">
              <div>
                <p class="text-base mb-0">
                  {{ qualification.training?.name }}
                </p>
              </div>
            </div>
          </td>
          <td>
            <div class="d-flex align-center">
              <div>
                <p class="text-base mb-0">
                  {{ qualification.license_id }}
                </p>
              </div>
            </div>
          </td>
          <td>
            <div class="d-flex align-center">
              <div>
                <p class="text-base mb-0">
                  {{ $filters.CustomFormatDate(qualification?.created_at?.split('T')[0]) }}
                </p>
              </div>
            </div>
          </td>
          <td>
            <div class="d-flex align-center">
              <div>
                <p class="text-base mb-0">
                  {{ $filters.CustomFormatDate(qualification.expiry_date) }}
                </p>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </VTable>
    <VPagination
      v-if="qualificationTable.length"
      v-model="currentPage"
      :length="totalPages"
      prev-icon="mdi-chevron-left"
      next-icon="mdi-chevron-right"
      class="mt-8"
      @page-changed="currentPage = $event"
    >
    </VPagination>
  </VCard>
</template>
<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 19px;
}
</style>
