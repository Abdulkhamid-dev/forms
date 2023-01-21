import React from "react";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { StyledStep } from "../styles";
import { updateForms } from "../store/forms/formSlice";
import { useAppDispatch } from "../store/hooks";

function SecondStep() {
  const dispatch = useAppDispatch();
  const { handleSubmit, control } = useForm();

  const onSubmit = (data: any) => {
    dispatch(updateForms({ step: 3, secondStep: data }));
  };
  return (
    <StyledStep>
      <h2>Second step</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container rowSpacing={2}>
          <Grid item xs={12}>
            <Controller
              name="subscription"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <FormControl error={!!error}>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Subscription
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    value={value}
                    name="radio-buttons-group"
                    onChange={onChange}
                  >
                    <FormControlLabel
                      value="free"
                      control={<Radio />}
                      label="Free"
                    />
                    <FormControlLabel
                      value="monthly"
                      control={<Radio />}
                      label="Monthly"
                    />
                    <FormControlLabel
                      value="yearly"
                      control={<Radio />}
                      label="Yearly"
                    />
                  </RadioGroup>
                  <FormHelperText>
                    {error ? error.message : null}
                  </FormHelperText>
                </FormControl>
              )}
              rules={{
                required: "Subscription required",
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

export default SecondStep;
