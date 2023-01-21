import React from "react";
import dayjs from "dayjs";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  MenuItem,
  TextField,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { useForm, Controller } from "react-hook-form";
import { StyledStep } from "../styles";
import { updateForms } from "../store/forms/formSlice";
import { useAppDispatch } from "../store/hooks";
import { genderOptions } from "../constants";

function ThirdStep() {
  const dispatch = useAppDispatch();
  const { handleSubmit, control } = useForm();

  const onSubmit = (data: any) => {
    dispatch(
      updateForms({
        step: 4,
        thirdStep: {
          ...data,
          birthDate: dayjs(data.birthDate).format("YYYY-MM-DD"),
        },
      })
    );
  };


  return (
    <StyledStep>
      <h2>Third step</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container rowSpacing={2} spacing={2}>
          <Grid item xs={12}>
            <Controller
              name="firstName"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label="First name"
                  variant="outlined"
                  value={value}
                  autoComplete="off"
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
              rules={{
                required: "First name required",
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="lastName"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label="Last name"
                  variant="outlined"
                  value={value}
                  autoComplete="off"
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
              rules={{
                required: "Last name required",
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              name="middleName"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label="Middle name"
                  variant="outlined"
                  value={value}
                  autoComplete="off"
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              name="birthDate"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    label="Birth date"
                    inputFormat="MM/DD/YYYY"
                    value={value}
                    onChange={onChange}
                    renderInput={(params) => {
                      params.error = false;
                      return <TextField {...params} />;
                    }}
                  />
                </LocalizationProvider>
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label="Email"
                  variant="outlined"
                  value={value}
                  autoComplete="off"
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
              rules={{
                required: "Email required",
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g,
                  message: "Email is not valid",
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="gender"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label="Gender"
                  variant="outlined"
                  value={value}
                  select
                  autoComplete="off"
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                >
                  {genderOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              )}
              rules={{
                required: "Gender required",
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="isOlderEighteen"
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
                    label="Are you older than 18"
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

export default ThirdStep;
