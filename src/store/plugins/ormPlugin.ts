import { Database } from "@vuex-orm/core";
import VuexORM from "@vuex-orm/core";
import models from "@/api/models";
import modules from "@/store/modules";

const database = new Database();

database.register(models["Activity"], modules["activity"]);

const ormPlugin = VuexORM.install(database);

export default ormPlugin;
