import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const SelectionLayer = (props) => {
    const scrollContainerRef = useRef(null);

    const handleClick = (imageName) => {
        props.setSelected(prevSelected => ({
            ...prevSelected,
            [props.layer]: imageName
        }));
    };

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -125, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 125, behavior: 'smooth' });
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
			<h4 className='spec'>{props.layer}</h4>
            <button onClick={scrollLeft}  style={arrowButtonStyle}>
                <FontAwesomeIcon icon={faChevronLeft} className='scroller'/>
            </button>
            <div 
                ref={scrollContainerRef} 
                style={scrollContainerStyle}
                className="scroll-container"
            >
                {(props.layer !== 'character' && props.layer !== 'background') && (
                    <div
                        onClick={() => handleClick('')}
                        key='null'
                        style={imageContainerStyle}
                    >
                        <img
                            src={`${process.env.PUBLIC_URL}/images/reset.png`}
                            alt='Reset'
                            style={imageStyle}
                        />
                    </div>
                )}

                {props.images.map((imageName) => (
                    <div
                        key={imageName}
                        style={imageContainerStyle}
                    >
                        <img
                            src={`${process.env.PUBLIC_URL}/images/${props.layer}/${imageName}`}
                            alt={imageName}
                            style={imageStyle}
                            onClick={() => handleClick(imageName)}
                        />
                    </div>
                ))}
            </div>
            <button onClick={scrollRight}  style={arrowButtonStyle}>
                <FontAwesomeIcon icon={faChevronRight} className='scroller'/>
            </button>
        </div>
    );
};

const arrowButtonStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: '24px',
    margin: '10px',
};

const scrollContainerStyle = {
    display: 'flex',
    overflowX: 'scroll',
    maxWidth: '375px',
    whiteSpace: 'nowrap',
    scrollbarWidth: 'none' /* Firefox */
};

const imageContainerStyle = {
    border: '2px solid black',
    borderRadius: '10px',
    margin: '10px',
    padding: '2px',
    minWidth: '100px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7f5b2',
};

const imageStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    cursor: 'pointer',
};

/* Custom CSS to hide scrollbars */
const customStyles = `
.scroll-container {
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
}
.scroll-container::-webkit-scrollbar {
    display: none;  /* Safari and Chrome */
}
`;

export default SelectionLayer;

// Inject the custom styles
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = customStyles;
document.head.appendChild(styleSheet);
