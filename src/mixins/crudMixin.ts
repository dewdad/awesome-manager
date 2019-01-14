import models from "@/api/models";
export default {
  data() {
    return {
      editing: false,
      model: {},
      modelName: string,
    };
  },
  computed: {
    Model: function() {
      return models[modelName];
    },
    readItems: function () {
      this.Model.query().get(),
    }
  },
  created() {
    this.model = new Model();
  },
  methods: {
    deleteItem() {
      Model.delete(this.model._id);
    },
    updateItem() {
      if (this.editing) {
        Model.update(this.model);
        this.editing = false;
        this.model = new Model();
      }
    },
    createItem() {
      if (!this.editing) {
        Model.insert({
          data: this.model,
        });
        this.model = new Model();
      }
    },
  },
};
