import { atom } from "recoil";
import { ResasApiService } from "../service/ResasApiService";

export const resasApiServiceAtom = atom({
  key: "resasApiService atom",
  default: new ResasApiService("25BO76EGI4g8ugQJGIAqzWk93rVrWVxZuxW02TJp"),
});
