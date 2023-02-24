import React from 'react';
import StarRatings from "react-star-ratings/build/star-ratings";

const Rating = ({rating}) => {
    return (
        <div className={'rating'}>
            <StarRatings
                // classname={'ba'}
                rating={rating}
                starRatedColor="dark yellow"
                numberOfStars={10}
                name='rating'
                starDimension="20px"
                starSpacing="5px"
            />
        </div>

    );
};

export {
    Rating
};