import React from "react";
import { Button, Grid, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { StyledStep } from "../styles";
import { updateForms } from "../store/forms/formSlice";
import { useAppDispatch } from "../store/hooks";

function FirstStep() {
  const dispatch = useAppDispatch();
  const { handleSubmit, control } = useForm();

  const onSubmit = (data: any) => {
    dispatch(updateForms({ step: 2, firstStep: data }));
  };
  return (
    <StyledStep>
      <h2>First step</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container rowSpacing={2}>
          <Grid item xs={12}>
            <Controller
              name="login"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label="Login"
                  variant="outlined"
                  value={value}
                  autoComplete="off"
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
              rules={{
                required: "Login required",
                pattern: {
                  value: /^[a-z][a-z0-9_.]*$/g,
                  message: " Login must be entered in lowercase",
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label="Password"
                  variant="outlined"
                  type="password"
                  value={value}
                  autoComplete="off"
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
              rules={{
                required: "Password required",
                minLength: {
                  value: 5,
                  message: "Password must be longer 5 character",
                },
                pattern: {
                  value: /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/g,
                  message:
                    "Password must contain at least one letter and one number",
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

export default FirstStep;
