import { Suspense } from "react";
import styles from "./App.module.css";
import { Fallback } from "./components/Fallback";
import { PopulationChart } from "./components/PopulationChart";
import { Prefectures } from "./components/Prefectures";

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <Suspense fallback={<Fallback />}>
        <header>
          <h1>Population Chart</h1>
        </header>
        <div className={styles.prefectures}>
          <Prefectures />
        </div>
        <div className={styles.chart}>
          <Suspense fallback={<Fallback />}>
            <PopulationChart />
          </Suspense>
        </div>
      </Suspense>
    </div>
  );
};

export default App;
