<template>
  <div id="page-statistic">
    <v-container
        grid-list-xl
        fluid>
      <v-layout
          row
          wrap>
        <v-flex sm12>
          <h4>Social</h4>
        </v-flex>
        <!-- mini statistic start -->
        <v-flex
            lg3
            sm6
            xs12>
          <mini-statistic
              icon="fa fa-facebook"
              title="100+"
              sub-title="Likes"
              color="indigo"
            >
          </mini-statistic>
        </v-flex>
        <v-flex
            lg3
            sm6
            xs12>
          <mini-statistic
              icon="fa fa-google"
              title="150+"
              sub-title="Connections"
              color="red"
            >
          </mini-statistic>
        </v-flex>
        <v-flex
            lg3
            sm6
            xs12>
          <mini-statistic
              icon="fa fa-twitter"
              title="200+"
              sub-title="Followers"
              color="light-blue"
            >
          </mini-statistic>
        </v-flex>
        <v-flex
            lg3
            sm6
            xs12>
          <mini-statistic
              icon="fa fa-instagram"
              title="50+"
              sub-title="Shots"
              color="purple"
            >
          </mini-statistic>
        </v-flex>
        <!-- linear statistic  end -->
        <v-flex sm12>
          <h4>Linear Trending</h4>
        </v-flex>
        <v-flex
            lg4
            sm12
            v-for="(item,index) in trending"
            :key="'trending'+index">
          <linear-statistic
              :title="item.subheading"
              :sub-title="item.caption"
              :icon="item.icon.label"
              :color="item.icon.color"
              :value="item.linear.value"
            >
          </linear-statistic>

        </v-flex>
        <!-- circle statistic  end -->
        <v-flex sm12>
          <h4>Circle Trending</h4>
        </v-flex>
        <v-flex
            lg4
            sm12
            v-for="(item,index) in trending2"
            :key="'c-trending'+index">
          <circle-statistic
              :title="item.subheading"
              :sub-title="item.headline"
              :caption="item.caption"
              :icon="item.icon.label"
              :color="item.linear.color"
              :value="item.linear.value"
            >
          </circle-statistic>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import MiniStatistic from "@/components/widgets/statistic/MiniStatistic";
import LinearStatistic from "@/components/widgets/statistic/LinearStatistic";
import CircleStatistic from "@/components/widgets/statistic/CircleStatistic";

import Trending from "@/api/models/Trending";

export default {
  components: {
    CircleStatistic,
    MiniStatistic,
    LinearStatistic,
  },
  computed: {
    trending: () => Trending.all,
    trending2: () => Trending.all,
  },
};
</script>
<style lang="stylus" scoped>

</style>
