<template>
  <div id="page-carousels">
    <v-container
        grid-list-xl
        fluid>
      <v-layout
          row
          wrap>
        <v-flex
            lg6
            sm12
            xs12>
          <v-widget title="Basic Usage">
            <div slot="widget-content">
              <v-carousel>
                <v-carousel-item
                    v-for="(item,i) in items"
                    :src="item.src"
                    :key="i"></v-carousel-item>
              </v-carousel>
            </div>
          </v-widget>
        </v-flex>
        <v-flex
            lg6
            sm12
            xs12>
          <v-widget title="Hide Controls">
            <div slot="widget-content">
              <v-carousel
                  hide-controls
                  hide-delimiters>
                <v-carousel-item
                    v-for="(item,i) in items"
                    :src="item.src"
                    :key="i">
                </v-carousel-item>
              </v-carousel>
            </div>
          </v-widget>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import VWidget from "@/components/VWidget";
import baseUrlMixin from "@/mixins/baseUrlMixin";
export default {
  components: {
    VWidget,
  },
  mixins: [baseUrlMixin],
  computed: {
    items: () => {
      return [
        {
          src: join(process.env.BASE_URL, "bg/1.jpg"),
        },
        {
          src: join(process.env.BASE_URL, "bg/2.jpg"),
        },
        {
          src: join(process.env.BASE_URL, "bg/3.jpg"),
        },
        {
          src: join(process.env.BASE_URL, "bg/4.jpg"),
        },
      ],
    }
  },
  methods: {},
};
</script>
