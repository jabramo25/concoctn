import React from 'react'
class Recipe extends React.Component {
  render() {
    const { params } = this.props.match
    return (
      <div id="mainContent">
        <h1>Recipe</h1>
        <p>{params.id}</p>
      </div>
    )
  }
}
export default Recipe