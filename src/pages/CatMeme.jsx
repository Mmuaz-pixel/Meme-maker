import React, { useState } from 'react'
import Header from '../components/Header'
import OutputImage from '../components/OutputImage'
import SelectionLayer from '../components/SelectionLayer'

const CatMeme = () => {

	const [selected, setSelected] = useState({
		background: 'image1.png',
		character: 'image1.png',
		face: '',
		frontaccessory: '',
		hat: ''
	})

	const [images, setImages] = useState(
		{
			background: [
				'image1.png', 'image2.png'
			],
			character: [
				'image1.png', 'image2.png'
			],
			face: [
				'image1.png', 'image2.png'
			],
			frontAccessory: [
				'image1.png', 'image2.png'
			],
			hat: [
				'image1.png', 'image2.png'
			]
		}
	);

	return (
		<div>
			<Header />
			<div className='d-flex'>
				<OutputImage selected={selected} />
				<div id='selectionLayers'>
					<SelectionLayer selected={selected} images={images.character} layer={'character'} setSelected={setSelected} />
					<SelectionLayer selected={selected} images={images.face} layer={'face'} setSelected={setSelected} />
					<SelectionLayer selected={selected} images={images.frontAccessory} layer={'frontaccessory'} setSelected={setSelected} />
					<SelectionLayer selected={selected} images={images.background} layer={'background'} setSelected={setSelected} />
					<SelectionLayer selected={selected} images={images.hat} layer={'hat'} setSelected={setSelected} />
				</div>
			</div>
		</div>
	)
}

export default CatMeme