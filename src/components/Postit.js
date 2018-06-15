import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { togglePostIt } from '../reducers/postit'
import { deletePostIt } from '../reducers/postit';

const styles = {
  complete: {
    textDecoration: 'line-through', 
    color: 'red'
  }
}

const PostIt = ({ title, complete, dispatch }) => (
  <Fragment>
    <li>
      <hr />
    <h4 style={ complete ? styles.complete : {}}>{title}</h4>
    {'  '}
    <button onClick={() => dispatch(deletePostIt(title))}>Delete</button>
    <button
      onClick={() => dispatch(togglePostIt(title))}>Complete</button>
      <hr />

    </li>
  
  </Fragment>
)

export default connect()(PostIt)