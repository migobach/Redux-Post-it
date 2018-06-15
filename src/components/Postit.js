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
    <li
      onClick={() => dispatch(togglePostIt(title))}
      style={ complete ? styles.complete : {}}
      >
    {title}
    {'  '}
    <button onClick={() => dispatch(deletePostIt(title))}>Delete</button>
    </li>
  
  </Fragment>
)

export default connect()(PostIt)