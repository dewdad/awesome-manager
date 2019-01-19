import { Model } from "@vuex-orm/core";
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
    // 数据对象的定义模型
    Model(): Model {
      return models[this.modelName];
    },
    // 数据对象的实例数组
    items(): any[] {
      return this.Model.query().get();
    },
    // 数据键值的数组
    fields(): string[] {
      return this.Model.fieldsKeys();
    },
    // 关系型数据键值的数组
    relationFields(): string[] {
      return this.Model.relationFields();
    },
    // 非关系型数据键值的数组
    nonRelationFields(): string[] {
      return this.Model.nonRelationFields();
    },
    // 关系型数据键值中包括_id的
    relationFieldsWithId(): string[] {
      return this.Model.relationFieldsWithId();
    },
    // 关系型数据键值中不包括_id的
    nonRelationFieldsNoId(): string[] {
      return this.Model.nonRelationFieldsNoId();
    },
  },
  async mounted() {
    await this.Model.$fetch();
  },
  created() {
    this.model = new this.Model();
    this.$on("SET_EDITING", item => {
      this.editing = true;
      this.model = item;
    });
  },
  methods: {
    reset() {
      this.editing = false;
      this.model = new this.Model();
    },
    deleteItem() {
      // this.Model.delete(this.model._id);
      this.Model.$delete({ _id: this.model._id });
    },
    saveItem() {
      if (this.editing) {
        this.updateItem();
      } else {
        this.createItem();
      }
    },
    updateItem() {
      if (this.editing) {
        // this.Model.update(this.model);
        this.Model.$update({
          data: this.model,
        });
        this.editing = false;
        this.model = new this.Model();
      }
    },
    createItem() {
      if (!this.editing) {
        // this.Model.insert({
        //   data: this.model,
        // });
        this.Model.$create({
          data: this.model,
        });
        // reset default
        this.model = new this.Model();
      }
    },
    editItem(item) {
      // this.$emit("SET_EDITING", item);
    },
    tryT(text: string) {
      if (this.$t !== undefined) {
        return this.$t(text);
      } else {
        return text;
      }
    },
  },
};
