import React from 'react'

const OutputImage = (props) => {

	console.log(props); 

	return (
		<div id='parent'>
			<img id='background' src={`${process.env.PUBLIC_URL}/images/background/${props.selected.background}`} alt="" />
			<img id='character' src={`${process.env.PUBLIC_URL}/images/character/${props.selected.character}`} alt="" />
			<img id='face' src={`${process.env.PUBLIC_URL}/images/face/${props.selected.face}`} alt="" />
			<img id='front-accessory' src={`${process.env.PUBLIC_URL}/images/frontaccessory/${props.selected.frontAccessory}`} alt="" />
			<img id='hat' src={`${process.env.PUBLIC_URL}/images/hat/${props.selected.hat}`} alt="" />
		</div>
	)
}

export default OutputImage