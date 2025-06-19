/**
 * @description 3D position in space, compatible 2D by ignoring the z-axis.
 */
export type Position<T extends "2D" | "3D"> = T extends "3D"
	? { x: number; y: number; z: number }
	: { x: number; y: number }
