import * as THREE from "three";
import { useRef, useState } from "react";
import { useFrame, ThreeElements } from "@react-three/fiber";

function Box(props: ThreeElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, hover] = useState(false);
  useFrame((_, delta) => (ref.current.rotation.y += delta));
  return (
    <mesh
      {...props}
      scale={2.4}
      ref={ref}
      rotation={new THREE.Euler(3, 2, 3, "XYZ")}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <sphereGeometry args={[1, 15, 15]} />
      <meshStandardMaterial
        color={hovered ? "hotpink" : "teal"}
        roughness={5}
        metalness={0.65}
      />
    </mesh>
  );
}

export default Box;
