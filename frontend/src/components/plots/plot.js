import React from 'react';
import Plot from 'react-plotly.js';

const DataPlot = () => {
    var y0 = [];
    var y1 = [];
    for (var i = 0; i < 50; i ++) {
        y0[i] = Math.random();
        y1[i] = Math.random() + 1;
    }

    var d1 = {
        y: y0,
        type: 'box'
    };

    var trace2 = {
        y: y1,
        type: 'box'
    };
    return (
        <Plot
          data={[d1, trace2]}
          layout={ {title: 'Plot'} }
        />
      );
}

export default DataPlot;