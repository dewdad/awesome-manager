import { Query, Model } from "@vuex-orm/core";
import models from "@/api/models";
export default {
  data() {
    return {
      editing: false,
      model: {},
      modelName: "",
    };
  },
  computed: {
    Model: function(): Model {
      return models[this.modelName];
    },
    items: function(): any[] {
      return this.Model.query().get();
    },
  },
  created() {
    this.model = new this.Model();
  },
  methods: {
    deleteItem() {
      this.Model.delete(this.model._id);
    },
    updateItem() {
      if (this.editing) {
        this.Model.update(this.model);
        this.editing = false;
        this.model = new this.Model();
      }
    },
    createItem() {
      if (!this.editing) {
        this.Model.insert({
          data: this.model,
        });
        this.model = new this.Model();
      }
    },
  },
};
