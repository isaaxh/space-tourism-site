import React from 'react';
import Style from '../Destination.module.css';

interface DestinationPropsTypes {
  destinationTitle: string;
  destinationDescription: string;
  statsDistance: string;
  statsTime: string;
}

const DestinationTemplate = ({destinationTitle, destinationDescription , statsDistance , statsTime}: DestinationPropsTypes) => {
  return (
    <div>
      <h1 className={Style.title}>{destinationTitle}</h1>
        <p className={Style.description}>  
          {destinationDescription}
        </p>
        <hr />
        <div className={Style['stats-container']}>
          <div className={Style["stats-distance"]}>
            <div className={`sub-heading-2 ${Style['stat-subheadings']}`}>Avg. distance</div>
            <div className={`sub-heading-1 ${Style['stat-data']}`}>{statsDistance}</div>
          </div>
          <div className={Style["stats-time"]}>
            <div className={`sub-heading-2 ${Style['stat-subheadings']}`}>Est. travel time</div>
            <div className={`sub-heading-1 ${Style['stat-data']}`}>{statsTime}</div>
          </div>
        </div>
    </div>
  )
}

export default DestinationTemplate