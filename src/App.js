import { ThemeProvider, Container } from "@material-ui/core";

import theme from "./ThemaConfig";
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Index } from "./01-AdminPacientes/components";
import Header from "./Drawer";
import { Presupuesto } from "./02-Presupuesto/components/Presupuesto";


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '20px',
    display: "flex",
    justifyContent: "center",
  },


}));


function App() {

  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Router>

        <Header/>
        <Container maxWidth="md" className={classes.root}>
          <Switch>
            <Route exact path="/index" component={Index} />
            <Route exact path="/presupuesto" component={Presupuesto} />
            {/* <Route exact path="/products/edit/:id" component={EditProduct} /> */}
          </Switch>
        </Container>


      </Router>
    </ThemeProvider>


  );
}

export default App;