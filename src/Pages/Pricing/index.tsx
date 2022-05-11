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
                  Recrutement (Conception de l’offre d’emploi, Publication des
                  offres, Visualisation, test, interview et sélection)
                </ListItemText>
              </ListItem>
              <Divider />
              <ListItem button divider>
                <ListItemText>
                  Intégration du candidat (La gestion des informations lors de
                  l&#39;intégration de chaque employé, leur entrée, leur
                  départ et facilite le chargement des données et de les
                  sauvegarder des images et documents (photo, cv, Attestation
                  des services rendus…)
                </ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemText>
                  La facilitation de régénérer automatiquement les contrats liés
                  à chaque type d&#39;employés, ensemble des salariés de tous
                  statuts (ouvriers, employés, cadres) faisant partie de
                  l&#39;organisation mais également et de plus en plus liés à
                  elle par des rapports de sujétion (ainsi, les prestataires
                  extérieurs ou sous-traitant sont considérés comme faisant
                  partie de fait du périmètre des ressources humaines de
                  l&#39;entreprise)
                </ListItemText>
              </ListItem>
              <Divider light />
              <ListItem button>
                <ListItemText>
                  Conservation des données sur le cloud et facilite la
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
                  Recrutement (Conception de l’offre d’emploi, Publication des
                  offres, Visualisation, test, interview et sélection.)
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
                  type d’employé
                </ListItemText>
              </ListItem>
              <Divider light />
              <ListItem button>
                <ListItemText>
                  La gestion rapide de la fiscalité sur le calcul des taxes
                  déclaratives liées aux rémunérations
                </ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemText>
                  La facilitation de régénérer automatiquement les contrats liés
                  à chaque type d&#39;employés, ensemble des salariés de tous
                  statuts (ouvriers, employés, cadres...) faisant partie de
                  l&#39;organisation mais également et de plus en plus liés à
                  elle par des rapports de sujétion (ainsi, les prestataires
                  extérieurs ou sous-traitant sont considérés comme faisant
                  partie de fait du périmètre des ressources humaines de
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
                  évaluer les mouvements des employés
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
                  L’évaluation des performances pour chaque employé selon une
                  période données, en se basant sur les tâches quotidiennes
                </ListItemText>
              </ListItem>
              <Divider light />
              <ListItem button>
                <ListItemText>
                  La gestion rapide de la fiscalité sur le calcul des taxes
                  déclaratives liées aux rémunérations
                </ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemText>
                  La facilitation de régénérer automatiquement les contrats liés
                  à chaque type d&#39;employés, ensemble des salariés de tous
                  statuts (ouvriers, employés, cadres...) faisant partie de
                  l&#39;organisation mais également et de plus en plus liés à
                  elle par des rapports de sujétion (ainsi, les prestataires
                  extérieurs ou sous-traitant sont considérés comme faisant
                  partie de fait du périmètre des ressources humaines de
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
