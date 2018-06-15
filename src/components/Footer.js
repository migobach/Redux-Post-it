import React from 'react'
import FilterLinks from './FilterLinks'

const Footer = () => (
  <div>
    <FilterLinks>All</FilterLinks>
    {' '}
    <FilterLinks>Completed</FilterLinks>
    {' '}
    <FilterLinks>Active</FilterLinks>
  </div>
)

export default Footer
