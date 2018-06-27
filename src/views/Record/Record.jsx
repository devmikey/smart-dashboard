import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import patientRecordStyle from "assets/jss/material-dashboard-react/views/patientRecordStyle.jsx";

class Record extends React.Component {
 
  frame = {
    position: 'absolute',
    height: '100%',
    width: '100%',
    src: 'https://smart-nexus-apps.azurewebsites.net/launch?iss=https://smart-resource-server.azurewebsites.net&launch=eyJtcGlpZCI6IjEwMDAwMDAzOCJ9',
    title: 'GP Record'
  }

  render() {
    return (
             <iframe  frameBorder="0" overflow-y="scroll" overflow-x="hidden" style={{position: this.frame.position}} height="100%" width="100%" title={this.frame.title} src={this.frame.src}></iframe>
    );
  }
}

export default withStyles(patientRecordStyle)(Record);