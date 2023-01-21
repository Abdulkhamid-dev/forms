import React from "react";
import { Button, Grid, TextField } from "@mui/material";
import InputMask from "react-input-mask";
import { useForm, Controller } from "react-hook-form";
import { StyledStep } from "../styles";
import { updateForms } from "../store/forms/formSlice";
import { useAppDispatch } from "../store/hooks";

function FourthStep() {
  const dispatch = useAppDispatch();
  const { handleSubmit, control } = useForm();

  const onSubmit = (data: any) => {
    dispatch(updateForms({ step: 5, fourthStep: data }));
  };
  return (
    <StyledStep>
      <h2>Fourth step</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container rowSpacing={2}>
          <Grid item xs={12}>
            <Controller
              name="cardNumber"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <InputMask
                  mask="9999 9999 9999 9999"
                  value={value}
                  onChange={onChange}
                >
                  {
                    <TextField
                      error={!!error}
                      label="Card number"
                      value={value}
                      helperText={error ? error.message : null}
                    />
                  }
                </InputMask>
              )}
              rules={{
                required: "Card number required",
                pattern: {
                  value: /\b\d{4}[ -]?\d{4}[ -]?\d{4}[ -]?\d{4}\b/g,
                  message: "Card number is not valid",
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Next
            </Button>
          </Grid>
        </Grid>
      </form>
    </StyledStep>
  );
}

export default FourthStep;
