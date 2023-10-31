import React, {useEffect, useRef, useState} from 'react'
import {Col, Row} from 'react-bootstrap'
import '../../assets/css/components/CustomTitle.css'
import {animated, useSpring} from '@react-spring/web';

function CustomTitle({title, subtitle}) {

  const [isIntersecting, setIsIntersecting] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const options = {
      root: document.getElementById("#root"),
      rootMargin: '0px',
      threshold: 0.5, // Umbral de visibilidad del 50%
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        } else {
          setIsIntersecting(false);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  const textAnimation = useSpring({
    transform: isIntersecting ? 'translateX(0%)' : 'translateX(-10%)',
    config: { tension: 300, friction: 20 },
  });


  return (
    <Row className="mb-3 align-items-end w-100">
        <Col
          lg={12}
          className="d-flex justify-content-start align-items-end flex-wrap ps-5"
        >
          <h3 className={"title mb-2 text-start"} >{title}</h3>
          <animated.h1 className="title-green mb-0 ms-2 pb-0 text-start" style={textAnimation} ref={textRef}>{subtitle}</animated.h1>
        </Col>
      </Row>
  )
}

export default CustomTitle