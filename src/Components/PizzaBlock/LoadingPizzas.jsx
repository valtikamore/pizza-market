import React from 'react';
import ContentLoader from "react-content-loader"

export const LoadingPizzas = () => {
    return (
            <ContentLoader
                className='pizza-block'
                speed={2}
                width={280}
                height={460}
                viewBox="0 0 280 460"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <circle cx="130" cy="130" r="130" />
                <rect x="0" y="265" rx="3" ry="3" width="280" height="26" />
                <rect x="0" y="304" rx="6" ry="6" width="280" height="84" />
                <rect x="0" y="400" rx="0" ry="0" width="94" height="35" />
                <rect x="131" y="400" rx="17" ry="17" width="145" height="44" />
            </ContentLoader>
    );
};

