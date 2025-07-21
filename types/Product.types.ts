import { IProductRecord, ITrendWithRelations } from "tbh-shared-types";

export interface TrendProduct extends ITrendWithRelations {
  product: IProductRecord;
}
