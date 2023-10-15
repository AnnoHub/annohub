import React from 'react'

function Logo(props) {
	const scaling = {transform: `scale(${props.scale})`}

	return (
		<svg style={scaling} width={props.width} height={props.height}>
			<text style={{fontFamily: "Space Grotesk", fontSize: "84px", fontWeight: 700, letterSpacing: "10px", whiteSpace: "pre"}} x="0" y="159.097">Anno Hub</text>
			<rect x="0" y="86" width="3" height="45" style={{fill: "rgb(255, 77, 0)", fillRule: "nonzero", stroke: "rgb(255, 77, 0)"}}/>
			<rect x="103" y="560.096" width="3" height="241" style={{fill: "rgb(255, 77, 0)", fillRule: "nonzero", stroke: "rgb(255, 77, 0)", transformBox: "fill-box", transformOrigin: "50% 50%"}} transform="matrix(0, 1, -1, 0, 12.934752, -594.080207)"/>
			<rect x="235" y="85.818" width="3" height="45" style={{fill: "rgb(255, 77, 0)", fillRule: "nonzero", stroke: "rgb(255, 77, 0)"}}/>
			<rect x="265" y="73.049" width="3" height="45" style={{fillRule: "nonzero", fill: "rgb(204,0,255)", stroke: "rgb(204,0,255)"}}/>
			<rect x="266" y="643.2" width="3" height="180" style={{fillRule: "nonzero", fill: "rgb(204,0,255)", stroke: "rgb(204,0,255)", transformBox: "fill-box", transformOrigin: "50% 50%"}} transform="matrix(0, 1, -1, 0, 90.893329, -658.650217)"/>
			<rect x="446.5" y="73.049" width="3" height="45" style={{fillRule: "nonzero", fill: "rgb(204,0,255)", stroke: "rgb(204,0,255)"}}/>
			<rect x="368.199" y="39.982" width="1" height="27" style={{fillRule: "nonzero", stroke: "rgb(0,0,0)"}}/>
			<rect x="271.246" y="671.289" width="1" height="255" style={{fillRule: "nonzero", stroke: "rgb(0,0,0)", transformBox: "fill-box", transformOrigin: "50% 50%"}} transform="matrix(0, 1, -1, 0, -30.554395, -758.364634)"/>
			<rect x="113.421" y="40.116" width="1" height="38" style={{fillRule: "nonzero", stroke: "rgb(0,0,0)"}}/>
			<path d="M 98.749 96.127 H 98.749 L 98.749 91.502 L 104.728 96.399 L 98.749 101.296 L 98.749 96.671 H 98.749 V 96.127 Z" style={{stroke: "rgb(0,0,0)", transformBox: "fill-box", transformOrigin: "50% 50%"}} transform="matrix(-0.000081, 1, -1, -0.000081, 12.25, -20)" bxShape="arrow 98.749 91.502 5.979 9.794 0.544 5.979 0 1@9f5d29a0"/>
			<text style={{fontFamily: "Space Grotesk", fontSize: "28px", fontWeight: 600, letterSpacing: "3.5px", whiteSpace: "pre"}} x="69.718" y="25.748">annotation platform</text>
		</svg>
	)
}

export default Logo