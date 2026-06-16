import React from 'react';

const Badge = ({ variant = 'blue', children }) => {
    const isBlue = variant === 'blue';

    const boxStyle = {
        borderColor: isBlue ? '#0e54f1' : 'white',
    };

    const imgSrc = isBlue
        ? "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe2887be_Star%2018.svg"
        : "https://cdn.prod.website-files.com/6996a337655d586ffe288775/6996a337655d586ffe28879c_Star%2018%20(1).svg";

    const boxClassName = isBlue ? "about-subtitle-box" : "project-subtitle-box";
    const textClassName = isBlue ? "about-subtitle-text" : "subtitle-text white";

    return (
        <div className={boxClassName} style={boxStyle}>
            <img
                src={imgSrc}
                loading="lazy"
                alt={`${variant} Subtitle Icon`}
                className="subtitle-image-icon animate-[spin_4s_linear_infinite]"
            />
            <div className={textClassName}>{children}</div>
        </div>
    );
};

export default Badge;
