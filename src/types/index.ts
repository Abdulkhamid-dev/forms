export interface IFirstStep {
  login: string;
  password: string;
}
export interface ISecondStep {
  subscription: string;
}
export interface IThirdStep {
  firstName: string;
  lastName: string;
  middleName?: string;
  birthdate?: any;
  email: string;
  gender: string;
  isOlderEighteen: boolean;
}
export interface IFourthStep {
  cardNumber: number;
}
export interface IFifthStep {
  isAgreePersonalData: boolean;
  isAgreeCookies: boolean;
}
