import React, { Component } from 'react'
import loading from '../Images/Spinner-200px-200px.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" />
      </div>
    )
  }
}

export default Spinner
