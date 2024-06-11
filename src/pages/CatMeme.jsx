import React, { useState } from 'react'
import Header from '../components/Header'
import OutputImage from '../components/OutputImage'
import SelectionLayer from '../components/SelectionLayer'

const CatMeme = () => {

	const [selected, setSelected] = useState({
		background: 'image1.png',
		character: 'image1.png',
		face: 'image1.png',
		frontAccessory: 'image1.png',
		hat: 'image1.png'
	})

	return (
		<div>
			<Header />
			<div className='d-flex'>
				<OutputImage selected={selected} />
				<div id='selectionLayers'>
					<SelectionLayer selected={selected} setSelected={setSelected} />
					<SelectionLayer selected={selected} setSelected={setSelected} />
					<SelectionLayer selected={selected} setSelected={setSelected} />
					<SelectionLayer selected={selected} setSelected={setSelected} />
					<SelectionLayer selected={selected} setSelected={setSelected} />
				</div>
			</div>
		</div>
	)
}

export default CatMeme