import React from 'react'

const ArrowLeft = (props) => {
    const { className, style, onClick } = props;
    return (
        <button onClick={onClick} className='slider-btn-left'>
            {`<`}
        </button>
    )
}

export default ArrowLeft
