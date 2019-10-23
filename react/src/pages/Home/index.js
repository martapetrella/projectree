import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import React, { Component } from 'react';
import { connect } from "react-redux";
import withTemplate from 'templates/'
// import { Button } from 'reactstrap'; // <Button color="danger">Danger!</Button>

class Home extends Component {
  render() {
    const { project } = this.props;
    return (
      <div className="p-home">
        <h1>PROJECT TREE</h1>
        <p>Read src/state/reducers/app.js for details</p>
        <hr />
        <pre className="p-3">
          { JSON.stringify(project, undefined, 2) }
        </pre>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  const { project } = state
  return { project }
}
export default connect(mapStateToProps)( withTemplate(Home) );
