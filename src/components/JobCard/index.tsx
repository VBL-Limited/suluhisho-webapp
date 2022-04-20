import job from "../../img/job.jpeg";
import { Jobstype } from "../../types";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));
type jobTypes = {
  jobs?: any;
  handleApply?: any;
};
const JobCard = ({ jobs, handleApply }: jobTypes) => {
  return (
    <>
      <Grid container spacing={2} sx={{ px: 2, pt: 2 }}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography
                gutterBottom
                variant="body1"
                sx={{ color: "#101928" }}
              >
                Date de publication: 29/03/2022
              </Typography>
              <Typography
                variant="h5"
                sx={{ color: "#101928", fontStyle: "bold" }}
              >
                Seinor Product Designer
              </Typography>
              <Typography variant="body1" sx={{ py: 2 }} color="primary">
                Kinshasa
              </Typography>
              <BorderLinearProgress variant="determinate" value={50} />
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography variant="body1" color="primary">
                  50 postulants
                </Typography>
                <Typography variant="body1">20 en demande</Typography>
              </Stack>
            </CardContent>
            <CardActions sx={{ px: 2 }}>
              <Typography variant="body1">Expire le 30/04/2022</Typography>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography
                gutterBottom
                variant="body1"
                sx={{ color: "#101928" }}
              >
                Date de publication: 29/03/2022
              </Typography>
              <Typography
                variant="h5"
                sx={{ color: "#101928", fontStyle: "bold" }}
              >
                Seinor Product Designer
              </Typography>
              <Typography variant="body1" sx={{ py: 2 }} color="primary">
                Kinshasa
              </Typography>
              <BorderLinearProgress variant="determinate" value={50} />
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography variant="body1" color="primary">
                  50 postulants
                </Typography>
                <Typography variant="body1">20 en demande</Typography>
              </Stack>
            </CardContent>
            <CardActions sx={{ px: 2 }}>
              <Typography variant="body1">Expire le 30/04/2022</Typography>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography
                gutterBottom
                variant="body1"
                sx={{ color: "#101928" }}
              >
                Date de publication: 29/03/2022
              </Typography>
              <Typography
                variant="h5"
                sx={{ color: "#101928", fontStyle: "bold" }}
              >
                Seinor Product Designer
              </Typography>
              <Typography variant="body1" sx={{ py: 2 }} color="primary">
                Kinshasa
              </Typography>
              <BorderLinearProgress variant="determinate" value={50} />
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography variant="body1" color="primary">
                  50 postulants
                </Typography>
                <Typography variant="body1">20 en demande</Typography>
              </Stack>
            </CardContent>
            <CardActions sx={{ px: 2 }}>
              <Typography variant="body1">Expire le 30/04/2022</Typography>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
export default JobCard;
