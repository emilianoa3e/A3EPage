import React from 'react'
import { Row, Col } from 'react-bootstrap'
import '../../assets/css/components/CustomTitle.css'
function CustomTitle({title, subtitle}) {
  return (
    <Row className="ms-4 mb-3  align-items-end">
        <Col
          lg={12}
          className="d-flex justify-content-start align-items-end flex-wrap"
        >
          <h3 className={"title mb-2 text-start me-2"}>{title}</h3>
          <h1 className="title-green mb-0 pb-0 text-start">{subtitle}</h1>
        </Col>
      </Row>
  )
}

export default CustomTitle