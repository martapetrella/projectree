import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import React, { Component } from 'react';
import { connect } from "react-redux";
import withTemplate from 'templates/'
import { Button } from 'reactstrap';

class Home extends Component {
  render() {
    const { project } = this.props;
    console.log( project );
    return (
      <div className="p-home d-flex w-100">
        <div className="d-flex flex-wrap w-100">
          HOME
          <Button color="danger">Danger!</Button>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  const { project } = state
  return { project }
}
export default connect(mapStateToProps)( withTemplate(Home) );
