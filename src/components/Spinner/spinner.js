import React from 'react';
import './spinner.scss';

const Spinner = () => {
  return (
    <div className="spinner-container">
      <div className="circle outer-lv3">
        <div className="circle outer-lv2">
          <div className="circle outer-lv1">
            <div className="center">
              <div className="arrow top" />
              <div className="arrow left" />
              <div className="arrow right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
