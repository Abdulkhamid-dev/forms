import React from "react";
import { Button, Checkbox, FormControl, FormControlLabel, FormLabel, Grid, MenuItem, Radio, RadioGroup, TextField } from "@mui/material";
import { StyledStep } from "../styles";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { clearForms } from "../store/forms/formSlice";
import dayjs from "dayjs";
import { genderOptions } from "../constants";
import InputMask from "react-input-mask";

function FinalStep() {
    const store = useAppSelector((state: any) => state.form)
    const dispatch = useAppDispatch();

    const resetData = () => {
        dispatch(clearForms())
    }
    return (
        <StyledStep>
            <h2>All Informations</h2>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField
                        label="Login"
                        variant="outlined"
                        value={store.firstStep.login}
                        inputProps={
                            { readOnly: true, }
                        }
                        autoComplete="off"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Password"
                        variant="outlined"
                        type="password"
                        value={store.firstStep.password}
                        inputProps={
                            { readOnly: true, }
                        }
                        autoComplete="off"
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControl >
                        <FormLabel id="demo-radio-buttons-group-label">
                            Subscription
                        </FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-radio-buttons-group-label"
                            value={store.secondStep.subscription}
                            name="radio-buttons-group"
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
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="First name"
                        variant="outlined"
                        type="text"
                        value={store.thirdStep.firstName}
                        inputProps={
                            { readOnly: true, }
                        }
                        autoComplete="off"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Last name"
                        variant="outlined"
                        type="text"
                        value={store.thirdStep.lastName}
                        inputProps={
                            { readOnly: true, }
                        }
                        autoComplete="off"
                    />
                </Grid>
                {
                    store.thirdStep.middleName && <Grid item xs={6}>
                        <TextField
                            label="Middle name"
                            variant="outlined"
                            type="text"
                            value={store.thirdStep.middleName}
                            inputProps={
                                { readOnly: true, }
                            }
                            autoComplete="off"
                        />
                    </Grid>
                }
                {
                    store.thirdStep.birthdate ?? (<Grid item xs={6}>

                        <TextField
                            label="Birth Date"
                            InputLabelProps={{ shrink: true }}
                            inputProps={
                                { readOnly: true, }
                            }
                            type="date"
                            defaultValue={dayjs(store.thirdStep.birthDate).format('YYYY-MM-DD')}
                        />
                    </Grid>)
                }
                <Grid item xs={12}>
                    <TextField
                        label="Email"
                        variant="outlined"
                        type="text"
                        value={store.thirdStep.email}
                        inputProps={
                            { readOnly: true, }
                        }
                        autoComplete="off"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Gender"
                        variant="outlined"
                        value={store.thirdStep.gender}
                        inputProps={
                            { readOnly: true, }
                        }
                        select
                        autoComplete="off"
                    >
                        {genderOptions.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={6}>
                    <FormControlLabel
                        control={<Checkbox inputProps={
                            { readOnly: true, }
                        } checked={store.thirdStep.isOlderEighteen} />}
                        label="Are you older than 18"
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputMask
                        mask="9999 9999 9999 9999"
                        value={store.fourthStep.cardNumber}
                    >
                        {
                            <TextField
                                inputProps={
                                    { readOnly: true }
                                }
                                label="Card number"
                                value={store.fourthStep.cardNumber}
                            />
                        }
                    </InputMask>
                </Grid>
                <Grid item xs={6}>
                    <FormControlLabel
                        control={<Checkbox inputProps={
                            { readOnly: true, }
                        } checked={store.fifthStep.isAgreePersonalData} />}
                        label="Personal data processing"
                    />

                </Grid>
                <Grid item xs={6}>
                    <FormControlLabel
                        control={<Checkbox inputProps={
                            { readOnly: true, }
                        } checked={store.fifthStep.isAgreeCookies} />}
                        label="Accept Cookies"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={resetData}>
                        Reset all
                    </Button>
                </Grid>
            </Grid>
        </StyledStep>
    );
}

export default FinalStep;
