precision highp float;

uniform vec2 uMouse;
uniform vec2 uMouseIntro;
uniform sampler2D uTexture;

uniform float uIntro;
uniform float uRadius;
uniform float uStrength;
uniform float uDistort;

varying vec2 vUv;

vec2 distort(vec2 uv, vec2 center) {
	uv -= center;

	float dist = length(uv) / uRadius;
	float distPow = pow(dist, 4.0);
	float strengthAmount = uStrength / (1.0 + distPow);

	uv *= (1.0 - uDistort) + uDistort * strengthAmount;
	uv += center;

	return uv;
}

void main() {
	vec2 mixMouse = mix(uMouseIntro, uMouse, uIntro);
	vec2 bulgeUV = distort(vUv, mixMouse);

	vec4 tex = texture2D(uTexture, bulgeUV);

	gl_FragColor.rgb = tex.rgb;
	gl_FragColor.a = 1.0;
}
