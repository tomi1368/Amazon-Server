import React from 'react'

const ArrowRight = (props) => {
    const { className, style, onClick } = props;
    return (
        <button onClick={onClick} className='slider-btn-right'>
            {`>`}
        </button>
    )
}

export default ArrowRight
