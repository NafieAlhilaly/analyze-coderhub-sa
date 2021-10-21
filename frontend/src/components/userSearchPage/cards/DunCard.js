import { Doughnut } from 'react-chartjs-2';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  colors,
  useTheme
} from '@material-ui/core';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import PhoneIcon from '@material-ui/icons/Phone';
import TabletIcon from '@material-ui/icons/Tablet';
import { useState } from 'react';

const colorsLst = [
  colors.indigo[500],
  colors.red[600],
  colors.orange[600],
  colors.pink[600],
  colors.purple[600],
  colors.brown[600],
  colors.blue[300]

]
const DunCard = ({languages, totalPoints, totalSolved}) => {

const datasets = [totalPoints[0], totalSolved[0]]
const [datasetIndex, setDatasetIndex] = useState(0)

const handleChange = (e) => {
  setDatasetIndex(parseInt(e.target.value))
}
  const theme = useTheme();
  const data = {
    datasets: [
      {
        data: datasets[datasetIndex],
        backgroundColor: colorsLst
        ,
        borderWidth: 1,
        hoverBorderColor: colors.common.white
      }
    ],
    labels: languages[0]
  };

  const options = {
    animation: true,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: true
    },
    maintainAspectRatio: false,
    responsive: true,
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

  const devices = [
    {
      title: 'Desktop',
      value: 63,
      icon: LaptopMacIcon,
      color: colors.indigo[500]
    },
    {
      title: 'Tablet',
      value: 15,
      icon: TabletIcon,
      color: colors.red[600]
    },
    {
      title: 'Mobile',
      value: 23,
      icon: PhoneIcon,
      color: colors.orange[600]
    }
  ];

  return (
    <Card >
      <CardHeader title="Used Languages %" />
      <select className="form-select " aria-label="Default select example" onChange={handleChange}>
        <option value="0" selected>Total Points</option>
        <option value="1">Challenges solved</option>
      </select>
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 300,
            position: 'relative'
          }}
        >
          <Doughnut
            data={data}
            options={options}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default DunCard;