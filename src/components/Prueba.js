import React, {  useRef, Suspense, useState } from "react";
import { Canvas } from "react-three-fiber";
import { House } from "./House";
import { OrbitControls, Sky } from "@react-three/drei";
import { useFrame } from "react-three-fiber";
import { Col } from "react-bootstrap";
function RotatingHouse({children}) {
  const groupRef = useRef();
  const [isHovered, setIsHovered] = useState(false);

  useFrame(() => {
    if (!isHovered) {
      groupRef.current.rotation.y += 0.01; // Ajusta la velocidad de rotación según tus necesidades
    }
  });

  const handlePointerEnter = () => {
    setIsHovered(true);
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
  };

  return (
    <group
      ref={groupRef}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      {children}
    </group>
  );
}

function Prueba() {
  return (
    <>
      <Col style={{height:'100vh'}} className="m-5">
        <Canvas camera={{ zoom: 1, position: [15, 20, 15] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[35, 35, 0]} intensity={0.4} />
          <pointLight position={[-35, 35, 0]} intensity={0.4} />
          <Sky
            distance={450000}
            sunPosition={[0, 1, 0]}
            inclination={0}
            azimuth={0.25}
          />
          <OrbitControls enablePan={false} maxDistance={40} minDistance={0}/>
          <Suspense fallback={null}>
            <RotatingHouse >
              <House/>
            </RotatingHouse>
          </Suspense>
        </Canvas>
      </Col>
    </>
  );
}

export default Prueba;
