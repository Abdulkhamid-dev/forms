import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FirstStep from "./components/FirstStep";
import { useAppSelector } from "./store/hooks";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";
import FourthStep from "./components/FourthStep";
import FifthStep from "./components/FifthStep";
import { Step, StepLabel, Stepper } from "@mui/material";
import FinalStep from "./components/FinalStep";

function App() {
  const store = useAppSelector((state) => state);

  const steps = [
    {
      label: "First step",
      comp: <FirstStep />,
      stepNum: 1,
    },
    {
      label: "Second step",
      comp: <SecondStep />,
      stepNum: 2,
    },
    {
      label: "Third step",
      comp: <ThirdStep />,
      stepNum: 3,
    },
    {
      label: "Fourth step",
      comp: <FourthStep />,
      stepNum: 4,
    },
    {
      label: "Fifth step",
      comp: <FifthStep />,
      stepNum: 5,
    },
    {
      label: "All informations",
      comp: <FinalStep />,
      stepNum: 6,
    },
  ];
  return (
    <div className="wrapper">
      <Stepper activeStep={store.form.step - 1} alternativeLabel>
        {steps.map((step) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {
        steps.filter((step) => step.stepNum === store.form.step).map((activeItem) => (
          activeItem.comp
        ))
      }
    </div>
  );
}

export default App;
