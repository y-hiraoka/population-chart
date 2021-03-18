import { Grid } from "@material-ui/core";
import "./App.css";
import { PrefCheckBox } from "./components/PrefCheckBox";
import { PopulationChart } from "./components/PopulationChart";
import { usePrefectures } from "./state/prefectures";
import { Suspense } from "react";

const App: React.FC = () => {
  const prefectures = usePrefectures();

  return (
    <div className="App">
      <div className="App-container">
        <header>
          <h1>Population Chart</h1>
        </header>
        <Grid container spacing={1}>
          {prefectures.map(prefecture => (
            <Grid item key={prefecture.prefCode} xs={4} sm={3} md={2}>
              <PrefCheckBox prefCode={prefecture.prefCode} />
            </Grid>
          ))}
        </Grid>
        <div className="App-blank" />
        <Suspense fallback={<div>loading...</div>}>
          <PopulationChart />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
