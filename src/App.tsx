import React from "react";
import { Grid } from "@material-ui/core";
import "./App.css";
import { PrefCheckBox } from "./components/PrefCheckBox";
import { PopulationChart } from "./components/PopulationChart";
import useAppState from "./logics/AppState";

const App: React.FC = () => {
  const { checkedPrefs, checkboxClickHandler, chartData, apiError } = useAppState();

  return (
    <div className="App">
      <div className="App-container">
        <header>
          <h1>Population Chart</h1>
        </header>
        <Grid container spacing={1}>
          {checkedPrefs.map(checkedPref => (
            <Grid item key={checkedPref.prefecture.prefCode} xs={4} sm={3} md={2}>
              <PrefCheckBox
                className="PrefCheckBox"
                checked={checkedPref.checked}
                prefName={checkedPref.prefecture.prefName}
                onClick={checkboxClickHandler(checkedPref.prefecture.prefCode)}
              />
            </Grid>
          ))}
        </Grid>
        {apiError && <p className="ErrorMessage">{apiError.message}</p>}
        <div className="App-blank" />
        <PopulationChart data={chartData} />
      </div>
    </div>
  );
};

export default App;
