import './style.scss';
import React, { Component } from 'react'
import { connect } from "react-redux"

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showNavigation: false,
    }
  }
  statusNavigation = (status) => {
    let finalStatus = (status==='show') ? true : (status==='hide') ? false : !this.state.showNavigation
    this.setState({ showNavigation: finalStatus })
  }
  render() {
    return (
      <nav className="t-header">HEADER</nav>
    )
  }
}

const mapStateToProps = (state) => {
  const { cart } = state
  return {
    cart
  }
}
export default connect(mapStateToProps)( Header );
