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
      rotation={new THREE.Euler(1, 1, 1, "XZY")}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <sphereGeometry args={[1, 5, 5]} />
      <meshStandardMaterial
        color={hovered ? "hotpink" : "teal"}
        roughness={5}
        metalness={0.65}
      />
    </mesh>
  );
}

export default Box;
