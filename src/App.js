import React, { Fragment } from 'react';
import PostItForm from './components/PostItForm'
import PostItList from './components/PostItList'
import Footer from './components/Footer'


const App = () => (
  <Fragment>
    <PostItForm />
    <PostItList />
    <Footer />
    
  </Fragment>
)

export default App;
