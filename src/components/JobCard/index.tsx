import {
  Grid,
  Stack,
  Typography,
  CardContent,
  CardActions,
  LinearProgress,
  Card,
  styled,
  linearProgressClasses,
} from "@mui/material/";

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

const JobCard = () => {
  return (
    <>
      <Grid container justifyContent="center"></Grid>
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
