import "./App.css";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import TypeAnimation from "react-type-animation";
import { red, lightBlue, grey } from "@mui/material/colors";
import AboutMeCard from "./components/AboutMeCard";
import { Grid, Typography } from "@mui/material";
import ProjectCard from "./components/ProjectCard";
import SkillCard from "./components/SkillCard";
import Career from "./components/Career";
import Footer from './components/Footer'
import rabi from "./assets/rabi.png";
import lzarchery from "./assets/lzarchery.png";
import clearcorrect from "./assets/clearcorrect.png";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const projects = [
  { title: "Game event SPA", href: "https://crespirit.games/", content: "Using React, Canvas, Mongodb, Express to build this project ", src: rabi },
  { title: "Archery homepage", href: "https://lzarchery.com/", content: "Using Next.js, Mongodb, Express to build this project. Also utilized some SEO skills", src: lzarchery },
  { title: "Dentist homepage", href: "https://www.clearcorrect.tw/", content: "Using Next.js, Wordpress to build this project.", src: clearcorrect },
];

const skills = [
  { skill: "HTML 5", skillIcon: "html5-plain" },
  { skill: "CSS 3", skillIcon: "css3-plain" },
  { skill: "Javascript", skillIcon: "javascript-plain" },
  { skill: "React", skillIcon: "react-original" },
  { skill: "Bootstrap", skillIcon: "bootstrap-plain" },
  { skill: "NodeJS", skillIcon: "nodejs-plain" },
  { skill: "MongoDB", skillIcon: "mongodb-plain" },
  { skill: "Python", skillIcon: "python-plain" },
];

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: red,
          divider: red[200],
          background: {
            default: "#f5f5f5",
            paper: "#f5f5f5",
          },
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: lightBlue,
          divider: lightBlue[700],
          background: {
            default: grey[700],
            paper: grey[600],
          },
          text: {
            primary: grey[100],
            secondary: grey[800],
          },
        }),
  },
});

function MyApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: 1,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 3 }}>
        {theme.palette.mode} mode
        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>
      <Box>
        <div className="App">
          <div>
            <FontAwesomeIcon className="header-icon" icon={faRobot} size="xl" />
            <TypeAnimation cursor={true} sequence={["Hey! Its me, Jim", 2000]} wrapper="h1" repeat={1} />
          </div>

          <Grid container sx={{ maxWidth: "500px", margin: "auto", marginTop: "36px", marginBottom: "36px" }} spacing={2}>
            <AboutMeCard></AboutMeCard>
          </Grid>
        </div>
      </Box>
      <Box pt={4} pb={6} sx={{ backgroundColor: "rgba(0, 0, 0, 0.2)", textAlign: "center" }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Projects
        </Typography>

        <Grid container spacing={2}>
          {projects.map((el) => {
            return (
              <Grid key={el.title} item mb={2} mt={4} xs={12} md={4} lg={4}>
                <ProjectCard src={el.src} href={el.href} title={el.title} content={el.content}></ProjectCard>
              </Grid>
            );
          })}
        </Grid>
      </Box>

      <Box pt={4} sx={{ textAlign: "center" }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Skills
        </Typography>

        <Grid pb={6} sx={{ maxWidth: "600px", margin: "auto" }} container spacing={0}>
          {skills.map((el) => {
            return (
              <Grid key={el.skill} item mb={2} mt={4} xs={6} md={3} lg={3}>
                <SkillCard skill={el.skill} skillIcon={el.skillIcon}></SkillCard>
              </Grid>
            );
          })}
        </Grid>
      </Box>

      <Box pt={4} sx={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        <Typography mb={6} textAlign="center" variant="h4" component="h1" gutterBottom>
          Career
        </Typography>
        <Career></Career>
      </Box>

      <Footer></Footer>
    </Box>
  );
}

const darkModeTheme = createTheme(getDesignTokens("dark"));

function App() {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <MyApp />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
