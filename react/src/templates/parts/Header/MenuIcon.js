import React from 'react'
import Icon from 'components/Icon/'

const MenuIcon = (props) => {
  return (
      <div className="c-menuicon nav-link dropdown-toggle" onClick={props.toggleDropdown}>
        <Icon {...props}
              icon={props.icon}
              text={ (props.badgeNumber > 0) &&
                      <span className="badge badge-success">{props.badgeNumber}</span> }
              iconStyle={( props.showMenu && 'is-active' )} />
      </div>
  )
}
export default MenuIcon

/*

<div className="nav-link dropdown-toggle" onClick={this.toggleDropdown}>
  <Icon icon={'icon-bars'} iconStyle={( showMenu ? 'is-active' : '' )}/>
</div>

*/
