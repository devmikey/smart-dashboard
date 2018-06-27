import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";

import Add from "@material-ui/icons/Add";


// core components
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Table from "components/Table/Table.jsx";

import avatar from "assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

function Management(props) {
  const { classes } = props;
  return (
    <div>
      <Grid container>
       <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="success">
                 <Grid container>
                    <GridItem xs={12} sm={9} md={9}>
                      <p className={classes.cardCategoryWhite}>
                        Your active SMART Applications 
                       </p>
                       <h4 className={classes.cardTitleWhite}>Active Applications</h4>
                    </GridItem>
                    <GridItem xs={12} sm={3} md={3}>
                      <a href="/newapp" className={classes.logoLink}>
                        <Button color="primary"><Add /> New Application</Button>
                       </a>
                    </GridItem>
                 </Grid>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="success"
                  tableHead={["CLIENT ID", "Name", "Supplier", "Country"]}
                  tableData={[
                    ["1ASDWEE-1", "Cross Appointment Scheduler", "TODO", "email address to contact supplier", "Short summary about"],
                    ["1ASDWEE-2", "GP Record Viewer", "NHS England", "email address to contact supplier", "Short summary about"],
                    ["1ASDWEE-4", "QRisk Calculator", "J2 Interactive", "email address to contact supplier", "Short summary about"]
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
         <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Disabled Applications</h4>
              <p className={classes.cardCategoryWhite}>
                Your disabled SMART Applications
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["CLIENT ID", "Name", "Supplier", "Country"]}
                tableData={[
                  ["1ASDWEE-5", "Health Forms", "TODO", "email address to contact supplier", "Short summary about"]
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Management);
