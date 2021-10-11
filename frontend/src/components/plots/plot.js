import React from 'react';
import Plot from 'react-plotly.js';

const DataPlot = ({users, points}) => {
    var trace3 = {
        y: points,
        x: users,
        name:"",
        type: 'box'
    }
    return (
        <Plot
          data={[trace3]}
          layout={ {title: 'Total point range for rank 1 users'} }
        />
      );
}

export default DataPlot;