import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../../assets/css/components/AreasApplication.css";
import mineria from "../../assets/img/Minería.jpg";
import refineria from "../../assets/img/Refinería.jpg";
import industria from "../../assets/img/Industria.jpg";
import comercial from "../../assets/img/Comercial.jpg";
import CustomTitle from "../shared/CustomTitle";
import { animated, useSpring } from "@react-spring/web";

const RotatingText = ({ areas, imageUrl }) => {
  console.log(areas)
  const [hovered, setHovered] = useState(false);

  const { opacity, transform } = useSpring({
    opacity: hovered ? 0 : 1,
    transform: `rotateY(${hovered ? 180 : 0}deg)`,
    config: { mass: 10, tension: 500, friction: 100 },
  });

  return (
    <div
    className="areasApplication"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <animated.div
      className={"animatedDiv"}
        style={{
          transform,
        }}
      >
        <div
        className="containerAnimation"
        >
          <animated.img
          className={"animatedImg"}
            src={imageUrl}
            alt="Image"
            style={{
              opacity,
            }}
          />
          <animated.div
          className={"animatedText"}
            style={{
              opacity: opacity.to(o => 1 - o),
            }}
          >
            <p className="text">{areas}</p>
          </animated.div>
        </div>
      </animated.div>
    </div>
  );
};


function AreasApplication() {
  const applications = [
    {
      _id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation.",
      area: "MINERIA",
      img: mineria,
    },
    {
      _id: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation.",
      area: "INDUSTRIA",
      img: industria,
    },
    {
      _id: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation.",
      area: "REFINERIA",
      img: refineria,
    },
    {
      _id: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation.",
      area: "COMERCIAL",
      img: comercial,
    },
  ];
  

  return (
    <Container className="mg-4 p-0 m-0" fluid>
      <CustomTitle title={"ÁREAS DE APLICACIÓN"} subtitle={"APLICACIÓN"}/>
      <Row className="p-0 m-0" >
        {applications.map((area, index) => (
          <Col key={index} md={6} lg={3} xs={12} className="justify-content-center">
            <RotatingText areas={area.text} imageUrl={area.img} />
          </Col>
        ))}
      </Row>
    </Container>
    //primero
    // <Container className="areasApplication mb-4" fluid>
    //   <CustomTitle title={"CAMPOS DE APLICACIÓN"} subtitle={"APLICACIÓN"} />
    //   <Row>
    //     {applications.map((areas, index) => (
    //       <Col
    //         key={index}
    //         md={6}
    //         lg={3}
    //         className="d-flex justify-content-center  p-0"
    //       >
    //         <div className="image-container ">
    //           <div className="front">
    //             <Image src={areas.img} alt="Image" className="p-0 m-0 " fluid />
    //             <div
    //              className="area"
    //             >
    //               {areas.area}
    //             </div>
    //           </div>
    //           <div className="back h-100">
    //             <span className="text">{areas.text}</span>
    //           </div>
    //         </div>
    //       </Col>
    //     ))}
    //   </Row>
    // </Container>

    //funcional
    // <Container className="mg-4" fluid>
    //   <CustomTitle title={"CAMPOS DE APLICACIÓN"} subtitle={"APLICACIÓN"} />
    //   <Row>
    //     {applications.map((areas, index) => (
    //       <Col key={index} md={6} lg={3}>
    //         <div
    //           onMouseEnter={() => setHovered(true)}
    //           onMouseLeave={() => setHovered(false)}
    //           style={{
    //             width: "335px",
    //             height: "300px",
    //             position: "relative",
    //             cursor: "pointer",
    //           }}
    //         >
    //           <animated.div
    //             style={{
    //               position: "absolute",
    //               width: "100%",
    //               height: "100%",
    //               transformOrigin: "center",
    //               transform,
    //             }}
    //           >
    //             <div
    //               style={{
    //                 width: "100%",
    //                 height: "100%",
    //                 display: "flex",
    //                 alignItems: "center",
    //                 justifyContent: "center",
    //                 backgroundColor: "lightblue",
    //               }}
    //             >
    //               <animated.img
    //                 src={refineria}
    //                 alt="Image"
    //                 style={{
    //                   width: "100%",
    //                   height: "100%",
    //                   objectFit: "cover",
    //                   opacity,
    //                 }}
    //               />
    //               <animated.div
    //                 style={{
    //                   position: "absolute",
    //                   width: "100%",
    //                   height: "100%",
    //                   display: "flex",
    //                   alignItems: "center",
    //                   justifyContent: "center",
    //                   backgroundColor: "lightgreen",
    //                   opacity: opacity.to((o) => 1 - o),
    //                   transform: "rotateY(180deg)",
    //                 }}
    //               >
    //                 texto
    //               </animated.div>
    //             </div>
    //           </animated.div>
    //         </div>
    //       </Col>
    //     ))}
    //   </Row>
    // </Container>

    //chat
    // <div
    //   onMouseEnter={() => setHovered(true)}
    //   onMouseLeave={() => setHovered(false)}
    // style={{
    //   width: "200px",
    //   height: "200px",
    //   position: "relative",
    //   cursor: "pointer",
    // }}
    // >
    //   <animated.div
    //     style={{
    //       position: "absolute",
    //       width: "100%",
    //       height: "100%",
    //       transformOrigin: "center",
    //       transform,
    //     }}
    //   >
    //     <div
    //       style={{
    //         width: "100%",
    //         height: "100%",
    //         display: "flex",
    //         alignItems: "center",
    //         justifyContent: "center",
    //         backgroundColor: "lightblue",
    //       }}
    //     >
    //       <animated.img
    //         src={refineria}
    //         alt="Image"
    //         style={{
    //           width: "100%",
    //           height: "100%",
    //           objectFit: "cover",
    //           opacity,
    //         }}
    //       />
    //       <animated.div
    //         style={{
    //           position: "absolute",
    //           width: "100%",
    //           height: "100%",
    //           display: "flex",
    //           alignItems: "center",
    //           justifyContent: "center",
    //           backgroundColor: "lightgreen",
    //           opacity: opacity.to((o) => 1 - o),
    //           transform: 'rotateY(180deg)'
    //         }}
    //       >
    //         texto
    //       </animated.div>
    //     </div>
    //   </animated.div>
    // </div>
  );
}

export default AreasApplication;
