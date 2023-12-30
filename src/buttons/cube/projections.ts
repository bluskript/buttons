import { ReadonlyVec3, mat3, vec3 } from "gl-matrix";

export const projectPoints = (
	points: ReadonlyVec3[],
	r_: number,
): [number, number][] => {
	const c = vec3.fromValues(0, 0, -3);
	const r = vec3.fromValues(0, 0, 0);
	const e = vec3.fromValues(0, 0, 4);

	// prettier-ignore
	const m1 = mat3.fromValues(
		1, 0, 0,
		0, Math.cos(r[0]), Math.sin(r[0]),
		0, -Math.sin(r[0]), Math.cos(r[0])
	)

	// prettier-ignore
	const m2 = mat3.fromValues(
		Math.cos(r[1]), 0, -Math.sin(r[1]),
		0, 1, 0,
		Math.sin(r[1]), 0, Math.cos(r[1])
	)

	// prettier-ignore
	const m3 = mat3.fromValues(
		Math.cos(r[2]), Math.sin(r[2]), 0,
		-Math.sin(r[2]), Math.cos(r[2]), 0,
		0, 0, 1
	)

	let d_ = mat3.mul(mat3.create(), m1, m2);
	d_ = mat3.mul(d_, d_, m3);

	const projected = points
		.map((v) =>
			vec3.transformMat3(vec3.create(), vec3.sub(vec3.create(), v, c), d_),
		)
		.map<[number, number]>((d) => [
			// prettier-ignore
			(e[2] / d[2]) * d[0] + e[0],
			(e[2] / d[2]) * d[1] + e[1],
		]);

	return projected;
};

export function rotate(
	points: ReadonlyVec3[],
	rx: number,
	ry: number,
	rz: number,
) {
	// prettier-ignore
	const rxmat = mat3.fromValues(
		1, 0, 0,
		0, Math.cos(rx), -Math.sin(rx),
		0, Math.sin(rx), Math.cos(rx)
	)
	// prettier-ignore
	const rymat = mat3.fromValues(
		Math.cos(ry), 0, Math.sin(ry),
		0, 1, 0,
		-Math.sin(ry), 0, Math.cos(ry)
	)
	// prettier-ignore
	const rzmat = mat3.fromValues(
		Math.cos(rz), -Math.sin(rz), 0,
		Math.sin(rz), Math.cos(rz), 0,
		0, 0, 1,
	)

	return points.map((p) => {
		let final = vec3.transformMat3(vec3.create(), p, rxmat);
		vec3.transformMat3(final, final, rymat);
		vec3.transformMat3(final, final, rzmat);
		return final;
	});
}
