/* eslint-disable @typescript-eslint/no-empty-object-type */
/// <reference types="react-three-fiber" />
import { ThreeElements } from "@react-three/fiber";

/**
 * Make R3F’s tag set (<mesh />, <planeGeometry />, etc.) available
 * in plain JSX without individual imports.
 */
declare global {
  namespace JSX {
    type IntrinsicElements = ThreeElements;
  }
}

export { };

