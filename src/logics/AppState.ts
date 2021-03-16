import React from "react";
import { Prefecture, Population, ChartData } from "./entites";
import { ResasApiService } from "./ResasApiService";
import { ResasApiError } from "./ResasApiError";

const resasApiService = new ResasApiService(
  "25BO76EGI4g8ugQJGIAqzWk93rVrWVxZuxW02TJp",
);

export default () => {
  const [checkedPrefs, setCheckedPrefs] = React.useState<
    { prefecture: Prefecture; checked: boolean }[]
  >([]);
  const [populations, setPopulations] = React.useState<
    { prefecture: Prefecture; population: Population }[]
  >([]);
  const [chartData, setChartData] = React.useState<ChartData[]>([]);
  const [apiError, setApiError] = React.useState<ResasApiError>();

  React.useEffect(() => {
    resasApiService
      .prefectures()
      .then(prefs =>
        setCheckedPrefs(prefs.map(pref => ({ prefecture: pref, checked: false }))),
      )
      .catch(error => {
        if (error instanceof ResasApiError) {
          setApiError(error);
        } else {
          console.error(error);
        }
      });
  }, []);

  React.useEffect(() => {
    const newChartData = populations.reduce<ChartData[]>((accum, current) => {
      // Population.data[0].label is equal to "総人口".
      current.population.data[0].data.forEach(d => {
        const objectYear = accum.find(a => a.year === d.year);
        if (objectYear) {
          objectYear[current.prefecture.prefName] = d.value;
        } else {
          accum.push({
            year: d.year,
            [current.prefecture.prefName]: d.value,
          });
        }
      });

      return accum;
    }, []);
    setChartData(newChartData);
  }, [populations]);

  const checkboxClickHandler = (prefCode: number) => () => {
    setCheckedPrefs(prev => {
      const changedState = prev.find(
        state => state.prefecture.prefCode === prefCode,
      );
      if (changedState) {
        if (changedState.checked) {
          // It will be unchecked. So remove it from `populations` state.
          setPopulations(prev =>
            prev.filter(
              state =>
                state.prefecture.prefCode !== changedState.prefecture.prefCode,
            ),
          );
        } else {
          // It will be checked. So add it to `populations` state.
          resasApiService
            .populationCompositionPerYear(changedState.prefecture.prefCode)
            .then(population => {
              setPopulations(prev =>
                prev.concat({
                  prefecture: changedState.prefecture,
                  population: population,
                }),
              );
            })
            .catch(error => {
              if (error instanceof ResasApiError) {
                setApiError(error);
              } else {
                console.error(error);
              }
            });
        }
      }

      return prev.map(state => {
        if (state.prefecture.prefCode === prefCode) {
          return {
            prefecture: state.prefecture,
            checked: !state.checked,
          };
        } else {
          return state;
        }
      });
    });
  };

  return {
    checkedPrefs,
    apiError,
    chartData,
    checkboxClickHandler,
  };
};
