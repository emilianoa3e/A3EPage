import { Col, Row } from "react-bootstrap";
import React from "react";
import "../../assets/css/components/News/NewsCategories.css";

const types = [
  {
    _id: "1",
    type: "Novedades",
  },
  {
    _id: "2",
    type: "Cursos",
  },

  {
    _id: "3",
    type: "Convocatorias",
  },
];
//Categories for News
function NewsCategories({ handleFilterChange, filter }) {
  return (
    <Row className="noticeCategories justify-content-center mt-4 w-100">
      {types.map((type) => (
        <Col
          key={type._id}
          xs={6}
          md={3}
          lg={3}
          className={`pt-3 pb-3 ms-1 me-1 justify-content-center text-center ${
            filter === type.type ? "selected" : "noSelected"
          }`}
          onClick={() => handleFilterChange(`${type.type}`)}
        >
          {type.type}
        </Col>
      ))}
    </Row>
  );
}

export default NewsCategories;
