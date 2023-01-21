import React from "react";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  TextField,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { StyledStep } from "../styles";
import { updateForms } from "../store/forms/formSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

function FifthStep() {
  const dispatch = useAppDispatch();
  const store = useAppSelector((state) => state.form);
  const { handleSubmit, control } = useForm();

  const onSubmit = (data: any) => {
    dispatch(
      updateForms({
        step: 6,
        fifthStep: data,
      })
    );
  };

  return (
    <StyledStep>
      <h2>Fifth step</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container rowSpacing={2} spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Login"
              variant="outlined"
              value={store.firstStep.login}
              autoComplete="off"
              disabled={true}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              value={store.thirdStep.email}
              autoComplete="off"
              disabled={true}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="isAgreePersonalData"
              control={control}
              defaultValue={false}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <FormControl
                  error={!!error}
                  component="fieldset"
                  variant="standard"
                >
                  <FormControlLabel
                    control={<Checkbox checked={value} onChange={onChange} />}
                    label="Personal data processing"
                  />
                  {error ? (
                    <FormHelperText>{error.message}</FormHelperText>
                  ) : null}
                </FormControl>
              )}
              rules={{
                required: "This is required",
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="isAgreeCookies"
              control={control}
              defaultValue={false}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <FormControl
                  error={!!error}
                  component="fieldset"
                  variant="standard"
                >
                  <FormControlLabel
                    control={<Checkbox checked={value} onChange={onChange} />}
                    label="Accept Cookies"
                  />
                  {error ? (
                    <FormHelperText>{error.message}</FormHelperText>
                  ) : null}
                </FormControl>
              )}
              rules={{
                required: "This is required",
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

export default FifthStep;
