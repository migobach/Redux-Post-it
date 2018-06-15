import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { togglePostIt } from '../reducers/postit'
import { deletePostIt } from '../reducers/postit';

const styles = {
  complete: {
    textDecoration: 'line-through', 
    color: 'green'
  }
}

const PostIt = ({ id, title, complete, dispatch }) => (
  <Fragment>
    <li
      onClick={() => dispatch(togglePostIt(id))}
      style={ complete ? styles.complete : {}}
      >
    {title}
    </li>
    <button onClick={() => dispatch(deletePostIt(title))}>Delete</button>
  </Fragment>
)

export default connect()(PostIt)