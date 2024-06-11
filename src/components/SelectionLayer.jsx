import React from 'react';

const SelectionLayer = (props) => {
	const handleClick = (imageName) => {
		props.setSelected(prevSelected => ({
			...prevSelected,
			[props.layer]: imageName
		}))
	}

	return (
		<div>
			<div style={{ display: 'flex', flexWrap: 'wrap' }}>
				{(props.layer !== 'character' && props.layer !== 'background') && (
					<div
						onClick={() => handleClick('')}
						key='null'
						style={{
							border: '2px solid black',
							borderRadius: '10px',
							margin: '10px',
							padding: '2px',
							width: '100px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							backgroundColor: '#f7f5b2',
							cursor: 'pointer'
						}}
					>
						<img
							src={`${process.env.PUBLIC_URL}/images/reset.png`}
							alt='Reset'
							style={{ maxWidth: '100%', maxHeight: '100%' }}

						/>
					</div>
				)}

				{props.images.map((imageName) => (
					<div
						key={imageName}
						style={{
							border: '2px solid black',
							borderRadius: '10px',
							margin: '10px',
							padding: '2px',
							width: '100px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							backgroundColor: '#f7f5b2',
						}}
					>
						<img
							src={`${process.env.PUBLIC_URL}/images/${props.layer}/${imageName}`}
							alt={imageName}
							style={{ maxWidth: '100%', maxHeight: '100%', cursor: 'pointer' }}
							onClick={() => handleClick(imageName)}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default SelectionLayer;
