import React from 'react'
import { useParams } from 'react-router-dom'

const Page = () => {
  const { pageId } = useParams();

  return (
    <div>
      Display Page No: {pageId}
    </div>
  )
}

export default Page
