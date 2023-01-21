import { createSlice } from "@reduxjs/toolkit";
import {
  IFifthStep,
  IFirstStep,
  IFourthStep,
  ISecondStep,
  IThirdStep,
} from "../../types";

const firstStep: IFirstStep = {
  login: "",
  password: "",
};
const secondStep: ISecondStep = {
  subscription: "",
};
const thirdStep: IThirdStep = {
  firstName: "",
  lastName: "",
  email: "",
  gender: "",
  isOlderEighteen: false,
};
const fourthStep: IFourthStep = {
  cardNumber: 0,
};
const fifthStep: IFifthStep = {
  isAgreePersonalData: false,
  isAgreeCookies: false,
};

const initialState = {
  step: 1,
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateForms: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    clearForms: () => {
      return initialState;
    },
  },
});

export const { clearForms, updateForms } = formSlice.actions;
export default formSlice.reducer;
