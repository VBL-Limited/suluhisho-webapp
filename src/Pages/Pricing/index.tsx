import { Typography, Grid, Button, Box } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const Pricing = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <Grid container spacing={1} xs={12}>
          <Grid item xs={12} sx={{ mb: 10 }}>
            <Typography variant="h2" sx={{ fontWeight: "bold" }}>
              {" "}
              Choisissez votre forfait:
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={3} />
          <Grid item xs={3}>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#D7A86E", px: 4 }}
              size="large"
              fullWidth
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {" "}
                Bronze
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="outlined"
              fullWidth
              sx={{ backgroundColor: "#F1EEE9", px: 4, color: "#fff" }}
              size="large"
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {" "}
                Argent
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="outlined"
              fullWidth
              sx={{ backgroundColor: "#F0A500", color: "#fff", px: 4 }}
              size="large"
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Or
              </Typography>
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ pt: 2 }}>
          <Grid item xs={3}></Grid>

          <Grid item xs={3}>
            <List component="nav" aria-label="mailbox folders">
              <ListItem button>
                <ListItemText>
                  <Typography
                    variant="body2"
                    color="initial"
                    sx={{ fontStyle: "italic" }}
                  >
                    A partir de
                  </Typography>
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: "bold",
                      color: "#008FDD",
                      fontFamily: "'Roboto', sans-serif",
                    }}
                  >
                    $20
                  </Typography>
                  <Typography variant="body2" color="initial">
                    Par an
                  </Typography>
                </ListItemText>
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText>
                  Recrutement (Conception de l???offre d???emploi, Publication des
                  offres, Visualisation, test, interview et s??lection)
                </ListItemText>
              </ListItem>
              <Divider />
              <ListItem button divider>
                <ListItemText>
                  Int??gration du candidat (La gestion des informations lors de
                  l&#39;int??gration de chaque??employ??,??leur entr??e, leur
                  d??part??et facilite le chargement des donn??es et de les
                  sauvegarder des images et documents (photo, cv, Attestation
                  des services rendus???)
                </ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemText>
                  La facilitation de r??g??n??rer automatiquement les contrats li??s
                  ?? chaque type d&#39;employ??s,??ensemble des salari??s de tous
                  statuts (ouvriers, employ??s,??cadres) faisant partie de
                  l&#39;organisation mais ??galement et de plus en plus li??s ??
                  elle par des rapports de suj??tion (ainsi, les prestataires
                  ext??rieurs ou sous-traitant??sont consid??r??s comme faisant
                  partie de fait du p??rim??tre des ressources humaines de
                  l&#39;entreprise)
                </ListItemText>
              </ListItem>
              <Divider light />
              <ListItem button>
                <ListItemText>
                  Conservation des donn??es sur le cloud et facilite la
                  production du rapport rapidement
                </ListItemText>
              </ListItem>
              <Divider light />
            </List>
          </Grid>
          <Grid item xs={3}>
            <List component="nav" aria-label="mailbox folders">
              <ListItem button>
                <ListItemText>
                  <Typography
                    variant="body2"
                    color="initial"
                    sx={{ fontStyle: "italic" }}
                  >
                    A partir de
                  </Typography>
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: "bold",
                      color: "#008FDD",
                      fontFamily: "'Roboto', sans-serif",
                    }}
                  >
                    $40
                  </Typography>
                  <Typography variant="body2" color="initial">
                    Par an
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemText>
                  Recrutement (Conception de l???offre d???emploi, Publication des
                  offres, Visualisation, test, interview et s??lection.)
                </ListItemText>
              </ListItem>
              <Divider />
              <ListItem button divider>
                <ListItemText>
                  Production automatique du bulletin de paie
                </ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemText>
                  Facilite le calcul de la paie selon la prestation de chaque
                  type d???employ??
                </ListItemText>
              </ListItem>
              <Divider light />
              <ListItem button>
                <ListItemText>
                  La gestion rapide de la fiscalit?? sur le calcul des taxes
                  d??claratives li??es aux r??mun??rations
                </ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemText>
                  La facilitation de r??g??n??rer automatiquement les contrats li??s
                  ?? chaque type d&#39;employ??s,??ensemble des salari??s de tous
                  statuts (ouvriers, employ??s,??cadres...) faisant partie de
                  l&#39;organisation mais ??galement et de plus en plus li??s ??
                  elle par des rapports de suj??tion (ainsi, les prestataires
                  ext??rieurs ou sous-traitant??sont consid??r??s comme faisant
                  partie de fait du p??rim??tre des ressources humaines de
                  l&#39;entreprise)
                </ListItemText>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={3}>
            <List component="nav" aria-label="mailbox folders">
              <ListItem button>
                <ListItemText>
                  <Typography
                    variant="body2"
                    color="initial"
                    sx={{ fontStyle: "italic" }}
                  >
                    A partir de
                  </Typography>
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: "bold",
                      color: "#008FDD",
                      fontFamily: "'Roboto', sans-serif",
                    }}
                  >
                    $64
                  </Typography>
                  <Typography variant="body2" color="initial">
                    Par an
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemText>
                  Production automatique des nombres total des salaries pour
                  ??valuer les mouvements des employ??s
                </ListItemText>
              </ListItem>
              <Divider />
              <ListItem button divider>
                <ListItemText>
                  Production automatique du bulletin de paie
                </ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemText>
                  L?????valuation des performances pour chaque employ?? selon une
                  p??riode donn??es, en se basant sur les t??ches quotidiennes
                </ListItemText>
              </ListItem>
              <Divider light />
              <ListItem button>
                <ListItemText>
                  La gestion rapide de la fiscalit?? sur le calcul des taxes
                  d??claratives li??es aux r??mun??rations
                </ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemText>
                  La facilitation de r??g??n??rer automatiquement les contrats li??s
                  ?? chaque type d&#39;employ??s,??ensemble des salari??s de tous
                  statuts (ouvriers, employ??s,??cadres...) faisant partie de
                  l&#39;organisation mais ??galement et de plus en plus li??s ??
                  elle par des rapports de suj??tion (ainsi, les prestataires
                  ext??rieurs ou sous-traitant??sont consid??r??s comme faisant
                  partie de fait du p??rim??tre des ressources humaines de
                  l&#39;entreprise)
                </ListItemText>
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ pt: 2 }}>
          <Grid item xs={3}>
            <Typography variant="body1"></Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ pt: 2 }}>
          <Grid item xs={3}>
            <Typography variant="body1"></Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Pricing;
