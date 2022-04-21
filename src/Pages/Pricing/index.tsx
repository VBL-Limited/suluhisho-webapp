import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Pricing = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <Grid container spacing={1} xs={12}>
          <Grid item xs={12}>
            <Typography variant="h2"> Choisissez votre forfait:</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={3} />

          <Grid item xs={3}>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#5f656e", px: 4 }}
              size="large"
              fullWidth
            >
              Gratuit
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="outlined"
              fullWidth
              sx={{ color: "#5f656e", px: 4 }}
              size="large"
            >
              Individuel
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="outlined"
              fullWidth
              sx={{ color: "#5f656e", px: 4 }}
              size="large"
            >
              Entreprise
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ pt: 2 }}>
          <Grid item xs={3}>
            Price per month
          </Grid>

          <Grid item xs={3}>
            <Typography variant="body1">US 0$</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body1">Starting at US$7.95</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body1">Starting at US$7.95</Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Pricing;
