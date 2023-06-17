
<template>
  <VCard
    title="Qualifications"
  >
    <VSpacer />
    <VRow class="px-5 d-flex justify-space-between">
      <VCol
        cols="3"
      >
        <VTextField
          v-model="filterData"
          placeholder="0 - 10 of 1000"
          outlined
        />
      </VCol>

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
      :items="qualificationTable"
      :search="searchValue"
      :filter="filterData"
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
          v-for="qualification in qualificationTable"
          :key="qualification.id"
          style="height: 3.75rem;"
        >
          <td>
            <div class="d-flex align-center">
              <div>
                <p class="text-base mb-0">
                  {{ qualification.qualification }}
                </p>
              </div>
            </div>
          </td>
          <td>
            <div class="d-flex align-center">
              <div>
                <p class="text-base mb-0">
                  {{ qualification.certificateNumber }}
                </p>
              </div>
            </div>
          </td>
          <td>
            <div class="d-flex align-center">
              <div>
                <p class="text-base mb-0">
                  {{ qualification.issueDate }}
                </p>
              </div>
            </div>
          </td>
          <td>
            <div class="d-flex align-center">
              <div>
                <p class="text-base mb-0">
                  {{ qualification.expiryDate }}
                </p>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </VTable>
  </VCard>
</template>

<script>
export default {
  name: 'QualificationCharts',
  layout: 'default',
  middleware: ['auth'],
  data() {
    return {
      searchValue: '',
      filterData: '',
      qualificationTable: [
        {
          id: 1,
          qualification: 'CNA',
          certificateNumber: '123456789',
          issueDate: '11/11/2021',
          expiryDate: '11/11/2021',
        },
        {
          id: 2,
          qualification: 'CNA',
          certificateNumber: '123456789',
          issueDate: '11/11/2021',
          expiryDate: '11/11/2021',
        },
        {
          id: 3,
          qualification: 'CNA',
          certificateNumber: '123456789',
          issueDate: '11/11/2021',
          expiryDate: '11/11/2021',
        },
        {
          id: 4,
          qualification: 'CNA',
          certificateNumber: '123456789',
          issueDate: '11/11/2021',
          expiryDate: '11/11/2021',
        },
        {
          id: 5,
          qualification: 'CNA',
          certificateNumber: '123456789',
          issueDate: '11/11/2021',
          expiryDate: '11/11/2021',
        },
        {
          id: 6,
          qualification: 'CNA',
          certificateNumber: '123456789',
          issueDate: '11/11/2021',
          expiryDate: '11/11/2021',
        },
        {
          id: 7,
          qualification: 'CNA',
          certificateNumber: '123456789',
          issueDate: '11/11/2021',
          expiryDate: '11/11/2021',
        },
        {
          id: 8,
          qualification: 'CNA',
          certificateNumber: '123456789',
          issueDate: '11/11/2021',
          expiryDate: '11/11/2021',
        },
        {
          id: 9,
          qualification: 'CNA',
          certificateNumber: '123456789',
          issueDate: '11/11/2021',
          expiryDate: '11/11/2021',
        },
        {
          id: 10,
          qualification: 'Test',
          certificateNumber: '123456789',
          issueDate: '11/11/2021',
          expiryDate: '11/11/2021',
        },
      ],
    }
  },
  watch: {
    filterData(val) {
      if (val) {
        this.qualificationTable = this.qualificationTable.filter(item => {
          return item.id <= val
        })
      }
    },
    searchValue(val) {
      if (val) {
        this.qualificationTable = this.qualificationTable.filter(item => {
          return item.qualification.toLowerCase().includes(val.toLowerCase())
        })
      }
    },
  },
  methods:{
    // add methods here


  },
}
</script>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 19px;
}
</style>
