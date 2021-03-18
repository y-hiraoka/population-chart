import { selector, useRecoilValue } from "recoil";
import { selectedPrefCodesAtom } from "./selectedPrefCodes";
import { populationSelectorFamily } from "./populations";
import { prefectureSelectorFamily } from "./prefectures";
import { ChartData } from "../models";

const chartDataSelector = selector<ChartData[]>({
  key: "chart data atom",
  get: ({ get }) => {
    const selectedPrefCodes = get(selectedPrefCodesAtom);

    const populations = selectedPrefCodes.map(prefCode => {
      const population = get(populationSelectorFamily({ prefCode }));
      const prefecture = get(prefectureSelectorFamily({ prefCode }));

      return { population: population.data[0].data, prefecture };
    });

    // 人口データからグラフ用データに変換
    return populations.reduce<ChartData[]>((prev, current) => {
      current.population.forEach(populationPerYear => {
        const targetYear = prev.find(
          preData => preData.year === populationPerYear.year,
        );

        if (targetYear) {
          targetYear[current.prefecture.prefName] = populationPerYear.value;
        } else {
          prev.push({
            year: populationPerYear.year,
            [current.prefecture.prefName]: populationPerYear.value,
          });
        }
      });

      return prev;
    }, []);
  },
});

export function useChartData() {
  return useRecoilValue(chartDataSelector);
}
