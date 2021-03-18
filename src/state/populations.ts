import { selectorFamily } from "recoil";
import { resasApiServiceAtom } from "./resasApiService";

type Params = { prefCode: number };

export const populationSelectorFamily = selectorFamily({
  key: "population selector family",
  get: ({ prefCode }: Params) => async ({ get }) => {
    const service = get(resasApiServiceAtom);

    return await service.populationCompositionPerYear(prefCode);
  },
});
