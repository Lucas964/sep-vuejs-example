<template>
  <div id="app">
    <md-toolbar>
      <h1 class="md-title">Vue Material Example</h1>
    </md-toolbar>
    <div class="main-content">
      <md-layout>
        <md-layout md-align="left">
          <md-card md-with-hover>
            <md-card-header>
              <div class="md-title">Card example</div>
              <div class="md-subhead">Subtitle</div>
            </md-card-header>

            <md-card-content>
              <md-button class="md-primary md-raised" @click="openDialog('alert')">Open Alert</md-button>
            </md-card-content>

            <md-card-actions>
              <md-button>Action 1</md-button>
              <md-button>Action 2</md-button>
            </md-card-actions>
          </md-card>

        </md-layout>

        <md-layout md-align="center">
          <md-card md-with-hover>
            <md-card-content>
              <md-rating-bar class="md-primary" v-model="rating" :md-max-rating="5"></md-rating-bar>
              <p>You voted {{rating}} stars</p>
            </md-card-content>

          </md-card>
        </md-layout>

        <md-layout md-align="end">
          <md-card md-with-hover>
            <md-card-content>
              <md-table v-once>
                <md-table-header>
                  <md-table-row>
                    <md-table-head>Col 1</md-table-head>
                    <md-table-head>Col 2</md-table-head>
                  </md-table-row>
                </md-table-header>

                <md-table-body>
                  <md-table-row v-for="(row, index) in tableData" :key="index">
                    <md-table-cell v-for="(col, index) in row" :key="index">
                      {{col}}
                    </md-table-cell>
                  </md-table-row>
                </md-table-body>
              </md-table>
            </md-card-content>

          </md-card>
        </md-layout>
      </md-layout>

      <md-dialog-alert md-content="Example Alert" md-ok-text="OK" ref="alert">
      </md-dialog-alert>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => {
    return {
      rating: 0,
      tableData: [
        ["Row 1", "Test 1"],
        ["Row 2", "Test 2"]
      ]
    }
  },
  methods: {
    openDialog(ref) {
      this.$refs[ref].open();
    }
  }
}
</script>

<style>
.main-content {
  padding: 20px;
}
</style>