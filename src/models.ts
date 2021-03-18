export type Prefecture = {
  prefCode: number;
  prefName: string;
};

export type PopulationPerYear = {
  year: number;
  value: number;
  rate?: number;
};

export type Population = {
  boundaryYear: number;
  data: {
    label: string;
    data: PopulationPerYear[];
  }[];
};

export type ChartData = {
  year: number;
  [prefName: string]: number;
};
