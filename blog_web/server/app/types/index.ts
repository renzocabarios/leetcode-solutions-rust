export interface IEntryModel {
  _id?: string | any;
  title: string;
  content: string;
  user: IUserModel | string;
  deleted?: Boolean;
}

export interface IUserModel {
  _id?: string | any;
  firstName: string;
  lastName: string;
  entries: IEntryModel[] | any[];
  deleted?: Boolean;
}

export interface IAddUserDto {
  firstName: string;
  lastName: string;
  type?: string;
  deleted?: Boolean;
}
