import { Bar } from 'react-chartjs-2';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
  colors,
  Grid
} from '@material-ui/core';
import { useState } from 'react';

const Sales = ({languages, totalPoints, totalSolved}) => {
  const datasets = [{
    backgroundColor: colors.indigo[500],
    barPercentage: 0.5,
    barThickness: 15,
    borderRadius: 4,
    categoryPercentage: 0.5,
    data: totalPoints[0],
    label: 'Total points',
    maxBarThickness: 15
  },
  {
    backgroundColor: colors.red[500],
    barPercentage: 1,
    barThickness: 15,
    borderRadius: 4,
    categoryPercentage: 0.5,
    data: totalSolved[0],
    label: 'Total solved challenges',
    maxBarThickness: 20
  }]

  const [dataSetIndex, setDataSetIndex] = useState(0)

  const handlePlotChange = (e) => {
    setDataSetIndex(parseInt(e.target.value))
  }

  const theme = useTheme();
  const data = {
    datasets: [
      datasets[dataSetIndex]
    ],
    labels: languages[0]
  };

  const options = {
    animation: true,
    cornerRadius: 20,
    layout: { padding: 0 },
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          ticks: {
            fontColor: theme.palette.text.secondary
          },
          gridLines: {
            display: false,
            drawBorder: false
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            fontColor: theme.palette.text.secondary,
            beginAtZero: true,
            min: 0
          },
          gridLines: {
            borderDash: [2],
            borderDashOffset: [2],
            color: theme.palette.divider,
            drawBorder: false,
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
            zeroLineColor: theme.palette.divider
          }
        }
      ]
    },
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  return (
    <Card >
      <Grid
      container
      >
        <Grid
          xs={7}
          justifyContent="end"
          >    
          <CardHeader
            title="Programming languages"
          />
        </Grid>
        <Grid
          xs={5}
          p={2}
        >
          <select className="form-select mt-3" aria-label="Default select example" onChange={(e)=> handlePlotChange(e)}>
            <option value="0" selected >Total Points</option>
            <option value="1" >Challenges Solved</option>
          </select>
        </Grid>
      </Grid>
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 400,
            position: 'relative'
          }}
        >
          <Bar
            data={data}
            options={options}
          />
        </Box>
      </CardContent>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      >
      </Box>
    </Card>
  );
};

export default Sales;