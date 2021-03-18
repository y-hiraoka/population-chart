import { selector, selectorFamily, useRecoilValue } from "recoil";
import { resasApiServiceAtom } from "./resasApiService";

const prefecturesSelector = selector({
  key: "prefectures selector",
  get: async ({ get }) => {
    const service = get(resasApiServiceAtom);

    return await service.prefectures();
  },
});

export function usePrefectures() {
  return useRecoilValue(prefecturesSelector);
}

type Params = { prefCode: number };
export const prefectureSelectorFamily = selectorFamily({
  key: "prefecture selector family",
  get: ({ prefCode }: Params) => ({ get }) => {
    const prefectures = get(prefecturesSelector);

    const prefecture = prefectures.find(pref => pref.prefCode === prefCode);

    if (prefecture === undefined) throw new Error("The prefecture was not found.");

    return prefecture;
  },
});

export function usePrefecture(prefCode: number) {
  return useRecoilValue(prefectureSelectorFamily({ prefCode }));
}
