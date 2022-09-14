import React from 'react';

function Planet({title, circles}) {
    const renderCircles = () => {
        if (!circles.length) return null;

        return circles.map((circle, idx) => {
            const space = `${-5 * (idx + 1)}px`;
            const style = {
                top: space,
                bottom: space,
                left: space,
                right: space
            }
            return <div key={circle} className="circle" style={style} />;
        })
    }

    return (
        <div className="planet">
            <span>
                {title}
                <span className="orange"> { circles.length ? circles.length : null}</span>
            </span>
            {renderCircles()}
        </div>
    );
}

export default Planet;