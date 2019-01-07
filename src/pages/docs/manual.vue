<template>
  <div id="pageCard">
    <v-container
        grid-list-xl
        fluid>
      <v-layout
          row
          wrap>
        <v-flex sm12>
          <h3>常用功能</h3>
        </v-flex>
        <v-flex
            lg4
            sm12>
          <v-card
              color="purple"
              dark>
            <v-card-title class="pb-0">
              <h2>开始人员管理</h2>
            </v-card-title>
            <v-card-text>
              {{cardText}}
            </v-card-text>
            <v-card-actions>
              <v-btn
                  @click="$router.push('/users/user-table')"
                  flat
                  small>查看</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex
            lg4
            sm12>
          <v-card
              color="teal"
              dark>
            <v-card-title class="pb-0">
              <h2>开始机构管理</h2>
            </v-card-title>
            <v-card-text>
              {{cardText}}
            </v-card-text>
            <v-card-actions>
              <v-btn
                  @click="$router.push('/entity-table')"
                  flat
                  small>查看</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex
            lg4
            sm12>
          <v-card>
            <v-card-title class="pb-0">
              <h2>开始文件管理</h2>
            </v-card-title>
            <v-card-text>
              {{cardText}}
            </v-card-text>
            <v-card-actions>
              <v-btn
                  flat
                  small>查看</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout
          row
          wrap>
        <v-flex sm12>
          <h3>查看实例</h3>
        </v-flex>
        <v-flex
            lg4
            sm12>
          <v-card>
            <v-card-media
                :src="`${baseUrl}/bg/1.jpg`"
                height="250">
              <h2 class="white--text pa-3">
                制作标准的人员编制表格
              </h2>
            </v-card-media>
            <v-card-text>
              <div>
                {{cardText}}
              </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn
                  @click="$router.push('/users/user-table')"
                  flat
                  small>查看</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex
            lg4
            sm12>
          <v-card>
            <v-card-media
                :src="`${baseUrl}bg/10.jpg`"
                height="250">
              <h2 class="white--text pa-3">
                记录每一份文档,并用Word模板输出打印
              </h2>
            </v-card-media>
            <v-card-text>
              <v-avatar
                  size="64px"
                  class="right mt-56">
                <img
                    :src="`{baseUrl}avatar/man_4.jpg`"
                    alt="">
              </v-avatar>
              <div>
                {{cardText}}
              </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn
                  @click="$router.push('/document-table')"
                  flat
                  small>查看</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex
            lg4
            sm12>
          <v-card>
            <v-card-media
                :src="`{baseUrl}bg/4.jpg`"
                height="250">
              <h2 class="white--text pa-3">
                党员信息采集,组织关系转接,从未如此方便
              </h2>
            </v-card-media>
            <v-card-text>
              <v-btn
                  icon
                  fab
                  color="red"
                  dark
                  class="right mt-45">
                <v-icon>favorite</v-icon>
              </v-btn>
              <div>
                {{cardText}}
              </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn
                  @click="$router.push('/users/militant')"
                  flat
                  small>查看</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout
          row
          wrap>
        <v-flex sm12>
          <h3>已有自己的历史数据,导入导出帮助你事半功倍</h3>
        </v-flex>
        <v-flex
            lg4
            sm12>
          <v-carousel
              hide-controls
              hide-delimiters
              class="fill-height">
            <v-carousel-item>
              <v-card
                  color="indigo"
                  dark>
                <v-card-title class="pb-0">
                  <h3>导入数据</h3>
                </v-card-title>
                <v-card-text>
                  {{cardText}}
                </v-card-text>
                <v-card-actions>
                  <v-btn
                      @click="$router.push('/database-manager')"
                      flat
                      small>查看</v-btn>
                </v-card-actions>
              </v-card>
            </v-carousel-item>
            <v-carousel-item>
              <v-card
                  color="teal"
                  dark>
                <v-card-title class="pb-0">
                  <h3>导出数据</h3>
                </v-card-title>
                <v-card-text>
                  {{cardText}}
                </v-card-text>
                <v-card-actions>
                  <v-btn
                      @click="$router.push('/database-manager')"
                      flat
                      small>查看</v-btn>
                </v-card-actions>
              </v-card>
            </v-carousel-item>
            <v-carousel-item>
              <v-card
                  color="purple"
                  dark>
                <v-card-title class="pb-0">
                  <h3>导出到文档的template目录</h3>
                </v-card-title>
                <v-card-text>
                  {{cardText}}
                </v-card-text>
                <v-card-actions>
                  <v-btn
                      @click="$router.push('/database-manager')"
                      flat
                      small>查看</v-btn>
                </v-card-actions>
              </v-card>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import VWidget from "@/components/VWidget";
import baseUrlMixin from "@/mixins/baseUrlMixin";
export default {
  mixins: [
    baseUrlMixin
  ],
  components: {
    VWidget,
  },
  data() {
    return {
      show: true,
      baseUrl: process.env.BASE_URL,
      cardText: "请查看手册, 了解具体使用方法",
    };
  },
  computed: {},
  methods: {},
};
</script>
<style lang="stylus" scoped>
  .mt-45
    margin-top: -45px
  .mt-56
    margin-top: -56px
</style>
