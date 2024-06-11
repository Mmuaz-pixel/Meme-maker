import React, { useRef } from 'react';

const OutputImage = (props) => {
	const canvasRef = useRef(null);

	const handleDownload = async () => {
		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');

		// Clear the canvas
		context.clearRect(0, 0, canvas.width, canvas.height);

		// Load and draw each image onto the canvas
		const images = [
			'background',
			'character',
			'face',
			'frontaccessory',
			'hat'
		];

		// Define a function to load and draw an image
		const loadImage = (layer, index) => {
			return new Promise((resolve, reject) => {
				const img = new Image();
				img.onload = () => {
					context.drawImage(img, 0, 0);
					resolve();
				};
				img.onerror = reject;
				img.src = `${process.env.PUBLIC_URL}/images/${layer}/${props.selected[layer]}`;
			});
		};

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


	return (
		<div>
			<div id='parent'>
				<img id='background' src={`${process.env.PUBLIC_URL}/images/background/${props.selected.background}`} alt="" />
				<img id='character' src={`${process.env.PUBLIC_URL}/images/character/${props.selected.character}`} alt="" />
				<img id='face' src={`${process.env.PUBLIC_URL}/images/face/${props.selected.face}`} alt="" />
				<img id='frontaccessory' src={`${process.env.PUBLIC_URL}/images/frontaccessory/${props.selected.frontaccessory}`} alt="" />
				<img id='hat' src={`${process.env.PUBLIC_URL}/images/hat/${props.selected.hat}`} alt="" />
			</div>
			<button id='download' onClick={handleDownload}>Download</button>
			<canvas ref={canvasRef} style={{ display: 'none' }} width={260} height={260} />
		</div>
	);
}

export default OutputImage;
