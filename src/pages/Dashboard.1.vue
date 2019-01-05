<template>
  <div id="pageDashboard">
    <v-container
        grid-list-xl
        fluid>
      <v-layout
          row
          wrap>
        <!-- mini statistic start -->
        <v-flex
            v-for="(value, index) in socialData"
            :key="index"
            lg3
            sm6
            xs12>
          <mini-statistic
              icon="fab fa-facebook"
              title="100+"
              sub-title="Likes"
              color="indigo"
            >
          </mini-statistic>
        </v-flex>
        <!-- mini statistic  end -->
        <v-flex
            lg8
            sm12
            xs12>
          <v-widget
              title="内外活动次数"
              content-bg="white">
            <v-btn
                icon
                slot="widget-header-action">
              <v-icon class="text--secondary">refresh</v-icon>
            </v-btn>
            <div slot="widget-content">
              <e-chart
                  :path-option="[
                    ['dataset.source', siteTrafficData],
                    ['color', [color.lightBlue.base, color.green.lighten1]],
                    ['legend.show', true],
                    ['xAxis.axisLabel.show', true],
                    ['yAxis.axisLabel.show', true],
                    ['grid.left', '2%'],
                    ['grid.bottom', '5%'],
                    ['grid.right', '3%'],
                    ['series[0].type', 'bar'],
                    ['series[0].areaStyle', {}],
                    ['series[0].smooth', true],
                    ['series[1].smooth', true],
                    ['series[1].type', 'bar'],
                    ['series[1].areaStyle', {}],
                  ]"
                  height="400px"
                  width="100%"
                >
              </e-chart>
            </div>
          </v-widget>
        </v-flex>
        <v-flex
            lg4
            sm12
            xs12>
          <v-widget
              title="休假路线统计"
              content-bg="white">
            <div slot="widget-content">
              <e-chart
                  :path-option="[
                    ['dataset.source', locationData],
                    ['legend.bottom', '0'],
                    ['color', [color.lightBlue.base, color.indigo.base, color.pink.base, color.green.base, color.cyan.base, color.teal.base]],
                    ['xAxis.show', false],
                    ['yAxis.show', false],
                    ['series[0].type', 'pie'],
                    ['series[0].avoidLabelOverlap', true],
                    ['series[0].radius', ['50%', '70%']],
                  ]"
                  height="400px"
                  width="100%"
                >
              </e-chart>
            </div>
          </v-widget>
        </v-flex>

        <!-- Trending chart -->
        <v-flex
            lg4
            sm12
            xs12>
          <box-chart
              card-color="indigo"
              title="趋势"
              sub-title="10%"
              icon="trending_up"
              :data="siteTrafficData"
              :chart-color="[color.indigo.lighten1]"
              type="line"
            >
          </box-chart>
          <box-chart
              class="mt-4"
              card-color="pink"
              title="分页"
              sub-title="10%"
              icon="trending_up"
              :data="siteTrafficData"
              :chart-color="[color.pink.darken1, 'rgba(255,255,255,0.3)']"
              gradient
              type="area"
            >
          </box-chart>
        </v-flex>
        <!-- statistic section -->
        <!-- acitivity/chat widget -->
        <v-flex
            lg6
            sm12
            xs12>
          <v-widget
              title="活动安排"
              contentBg="white">
            <div slot="widget-content">
              <ol class="timeline timeline-activity timeline-point-sm timeline-content-right">
                <li
                    class="timeline-block"
                    v-for="(item, index) in activityData"
                    :key="index">
                  <div class="timeline-point">
                    <v-circle
                        dot
                        large
                        color="red"></v-circle>
                  </div>
                  <div class="timeline-content">
                    <time
                        datetime="2018"
                        class="subheading">{{item.applicant}}</time>
                    <div
                        class="py-2 text--secondary"
                    >{{item.ocurrenceDate}}</div>
                  </div>
                </li>
              </ol>
            </div>
          </v-widget>
        </v-flex>

      </v-layout>
    </v-container>
  </div>
</template>

<script>
// General Components
import EChart from "@/components/chart/echart";
import MiniStatistic from "@/components/widgets/statistic/MiniStatistic";
import WeatherCard from "@/components/widgets/card/WeatherCard";
import VWidget from "@/components/VWidget";
import Material from "vuetify/es5/util/colors";
import VCircle from "@/components/circle/VCircle";
import BoxChart from "@/components/widgets/chart/BoxChart";
import ChatWindow from "@/components/chat/ChatWindow";

// Statistic Components
import CircleStatistic from "@/components/widgets/statistic/CircleStatistic";
import LinearStatistic from "@/components/widgets/statistic/LinearStatistic";

// ORM Models
import Activity from "@/api/models/Activity";
import Trending from "@/api/models/Trending";
import MonthVisit from "@/api/models/MonthVisit";
import Generic from "@/api/models/Generic";
import Social from "@/api/models/Social";

export default {
  components: {
    VWidget,
    MiniStatistic,
    ChatWindow,
    VCircle,
    WeatherCard,
    EChart,
    BoxChart,
    CircleStatistic,
    LinearStatistic,
  },
  data: () => ({
    color: Material,
    selectedTab: "tab-1",
  }),
  created() {
    Trending.new();
    MonthVisit.new();
    Generic.new();
    Activity.new();
    Social.new();
  },
  computed: {
    activityData: () => Activity.all(),
    siteTrafficData: () => MonthVisit.all(),
    locationData: () => Generic.all(),
    trendingData: () => Trending.all(),
    socialData: () => Social.all(),
    linearTrendingData: () => Trending.all(),
  },
};
</script>
