import { atom, useRecoilCallback, useRecoilValue } from "recoil";

export const selectedPrefCodesAtom = atom<number[]>({
  key: "selected prefCodes atom",
  default: [],
});

export function usePrefCodeIsSelected(prefCode: number) {
  return useRecoilValue(selectedPrefCodesAtom).includes(prefCode);
}

export function useTogglePrefCodeSelected(prefCode: number) {
  const toggle = useRecoilCallback(
    ({ set }) => () => {
      set(selectedPrefCodesAtom, prev => {
        if (prev.includes(prefCode)) {
          return prev.filter(code => code !== prefCode);
        } else {
          return prev.concat(prefCode);
        }
      });
    },
    [prefCode],
  );

  return toggle;
}
