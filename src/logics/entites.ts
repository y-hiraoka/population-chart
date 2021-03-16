export interface Prefecture {
  prefCode: number;
  prefName: string;
}

export interface PopulationPerYear {
  year: number;
  value: number;
  rate?: number;
}

export interface Population {
  boundaryYear: number;
  data: {
    label: string;
    data: PopulationPerYear[];
  }[];
}

export interface ChartData {
  year: number;
  [prefName: string]: number;
}
