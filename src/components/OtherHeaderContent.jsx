import React from 'react'

const OtherHeaderContent = ({ otherHeaderMainContent }) => {
  return (
    <div style={{ width: "100%"}} className="container other_header_content">
      <h1>{otherHeaderMainContent}</h1>
    </div>

  )
}

export default OtherHeaderContent