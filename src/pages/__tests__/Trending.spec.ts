import Trending from "@/api/models/Trending";
import CircleStatistic from "@/components/widgets/statistic/CircleStatistic.vue";

const store = (global as any).createORMStore([{ model: Trending }], "entities");
const TrendingTemplate = `
  <div>
    <v-flex
        v-for="(item,index) in trending"
        :key="'c-trending'+index">
      <circle-statistic
          :title="item.subheading"
          :sub-title="item.headline"
          :caption="item.caption"
        >
      </circle-statistic>
    </v-flex>
  </div>
`;

const TrendingComponent = {
  components: {
    CircleStatistic,
  },
  template: TrendingTemplate,
    computed:; {
    trending: () => Trending.all(),
  },
  created() {
    Trending.new();
  },
};

function mountTrendingComponent() {
  return (global as any).mountView(TrendingComponent, {
    ...(global as any).createComponentMocks({
      store,
    }),
    stubs: {
      "v-flex": true,
      "circle-statistic": true,
    },
  });
}

describe("Tesint CircleStatistic Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mountTrendingComponent();
  });
  it("Testing Trending Model", () => {
    expect(wrapper.vm.trending).not.toBeUndefined();
    expect(wrapper.vm.trending.length).toBe(1);
  });
  it("Testing Trending Component contains CircleStatistic", () => {
    expect(wrapper.contains(CircleStatistic)).toBe(true);
    expect(wrapper.find(CircleStatistic).text()).toBe("");
    expect(wrapper.find(CircleStatistic).attributes("title")).toBe("Sales");
  });
  it("Testing Trending Component contains two CircleStatistic", () => {
    let statisticWrappers = wrapper.findAll(CircleStatistic);
    expect(statisticWrappers.length).toBe(3);
  });
});
