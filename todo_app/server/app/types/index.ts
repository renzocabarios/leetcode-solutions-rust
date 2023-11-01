import { RESOURCE } from "../constants";

export interface ITodoModel {
  _id?: string | any;
  title: string;
  description: string;
  deleted?: Boolean;
}
