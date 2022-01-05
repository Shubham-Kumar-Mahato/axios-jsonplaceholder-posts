import React from 'react'
import "./Pagination.css"
import { Pagination } from 'react-bootstrap'

const Page = () => {
    
    return (
      <div className='paginate'>
<Pagination >
 
  <Pagination.Prev />
  <Pagination.Item>{1}</Pagination.Item>
  <Pagination.Item>{2}</Pagination.Item>
  <Pagination.Item>{3}</Pagination.Item>
  <Pagination.Ellipsis />
  <Pagination.Next />
 
</Pagination>
      </div>
    )
}

export default Page
