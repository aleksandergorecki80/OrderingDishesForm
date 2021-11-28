import React from 'react';
import { connect } from 'react-redux';

const Summary = ({
  id,
  name,
  preparation_time,
  type,
  no_of_slices,
  diameter,
  spiciness_scale,
  slices_of_bread,
}) => {
  return <div>
      
  </div>;
};

const mapStateToProps = (state) => {
  return {
    app: state.app,
  };
};

export default connect(mapStateToProps, null)(Summary);
