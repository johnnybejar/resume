import * as THREE from "three";
import { useRef, useState } from "react";
import { useFrame, ThreeElements } from "@react-three/fiber";

function Box(props: ThreeElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  useFrame((_, delta) => (ref.current.rotation.y += delta));
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 3 : 2}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "teal"} />
    </mesh>
  );
}

export default Box;
