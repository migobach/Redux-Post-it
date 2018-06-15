import React, { Fragment } from 'react'
import { connect } from 'react-redux'

class SubPostForm extends React.Component {
  state = { heading: '' }

}

const mapStateToProps = state => {
  return { id: state.nextId} // this needs to be changed
}

export default connect(mapStateToProps)(SubPostForm)
