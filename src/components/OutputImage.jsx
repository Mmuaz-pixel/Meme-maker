import React, { useRef } from 'react';

const OutputImage = (props) => {
	const canvasRef = useRef(null);
	const {images} = props

	const handleDownload = async () => {
		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');
		console.log(canvas.width); 
		// Clear the canvas
		context.clearRect(0, 0, canvas.width, canvas.height);
	
		// Load and draw each image onto the canvas
		const images = [
			{ layer: 'background', index: 0 },
			{ layer: 'character', index: 1 },
			{ layer: 'face', index: 2 },
			{ layer: 'frontaccessory', index: 3 },
			{ layer: 'hat', index: 4 }
		];
	
		// Define a function to load and draw an image
		const loadImage = ({ layer, index }) => {
			return new Promise((resolve, reject) => {
				const img = new Image();
				img.onload = () => {
					context.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);
					resolve();
				};
				img.onerror = reject;
				img.src = `${process.env.PUBLIC_URL}/images/${layer}/${props.selected[layer]}`;
			});
		};
	
		// Sort images based on index before loading
		images.sort((a, b) => a.index - b.index);
	
		// Use Promise.all to ensure that all images are loaded and drawn before proceeding
		try {
			await Promise.all(images.map(loadImage));
		} catch (error) {
			console.error('Error loading image:', error);
			return;
		}
	
		// Once all images are loaded and drawn, provide a download link for the canvas image
		const link = document.createElement('a');
		link.download = 'composed_image.png';
		link.href = canvas.toDataURL();
		link.click();
	}
	

	const handleReset = () => {
		props.setSelected({
			background: 'image1.png',
			character: 'image1.png',
			face: 'default.png',
			frontaccessory: 'default.png',
			hat: 'default.png'
		})
	}

	const handleRandom = () => {
		props.setSelected({
			background: images.background[Math.floor(Math.random() * images.background.length)], 
			face: images.face[Math.floor(Math.random() * images.face.length)], 
			hat: images.hat[Math.floor(Math.random() * images.hat.length)], 
			frontaccessory: images.frontAccessory[Math.floor(Math.random() * images.frontAccessory.length)], 
			character: images.character[Math.floor(Math.random() * images.character.length)]
		})
	}


	return (
		<div>
			<div id='parent'>
				<img id='background' src={`${process.env.PUBLIC_URL}/images/background/${props.selected.background}`} alt="" />
				<img id='character' src={`${process.env.PUBLIC_URL}/images/character/${props.selected.character}`} alt="" />
				<img id='face' src={`${process.env.PUBLIC_URL}/images/face/${props.selected.face}`} alt="" />
				<img id='frontaccessory' src={`${process.env.PUBLIC_URL}/images/frontaccessory/${props.selected.frontaccessory}`} alt="" />
				<img id='hat' src={`${process.env.PUBLIC_URL}/images/hat/${props.selected.hat}`} alt="" />
			</div>
			<div style={{ display: 'flex', marginTop: '10px' }}>
				<button id='random' className='btn' onClick={handleRandom}>Generate Random</button>
				<button id='reset' className='btn' onClick={handleReset}>Reset</button>
			</div>
			<button id='download' className='btn' onClick={handleDownload}>Download</button>
			<canvas ref={canvasRef} style={{ display: 'none' }} width={1024} height={1024} />
		</div>
	);
}

export default OutputImage;
