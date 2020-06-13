import React, { Component } from "react"
import PropTypes from "prop-types"
class MyComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props
    return (
      <div>
        {name}
        <br />
        {children}
        <br />
        {favoriteNumber}
      </div>
    )
  }
}

MyComponent.defaultProps = {
  name: "기본이름",
}

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
}

export default MyComponent
