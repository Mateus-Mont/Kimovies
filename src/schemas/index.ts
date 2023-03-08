import { createUserSchema } from "./users/users.schema";
import { loginUserSchema } from "./login/login.schema";
import { returnCreateUserSchema } from "./users/users.schema";
import { dataCategorySchema, returnDataCategorySchema } from "./categories/categories.schema";
import { returnMultipleUserSchema } from "./users/users.schema";
import { updateUserSchema } from "./users/users.schema";
import { categoriesReturnSchema } from "./categories/categories.schema"
import { createRealEstateSchema } from "./realEstate/realState.schema"
import { returnCreateRealEstate } from "./realEstate/realState.schema"
import { returnMultipleRealEstateSchema } from "./realEstate/realState.schema"
import { createSchedulesSchema } from "./scheadules/schedules.schema"

export {
  loginUserSchema,
  createUserSchema,
  returnCreateUserSchema,
  dataCategorySchema,
  returnDataCategorySchema,
  returnMultipleUserSchema,
  updateUserSchema,
  categoriesReturnSchema,
  createRealEstateSchema,
  returnCreateRealEstate,
  returnMultipleRealEstateSchema,
  createSchedulesSchema
};
