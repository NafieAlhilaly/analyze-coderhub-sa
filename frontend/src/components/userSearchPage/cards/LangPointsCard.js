import {
    Card,
    CardContent,
    Grid,
    Typography
  } from '@material-ui/core';
  
  const LangPointsCard = ({totalPoints}) => (
    <Card >
      <CardContent>
        <Grid
          container
          spacing={1}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              TOP LANGUAGE POINTS
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              {totalPoints[0][totalPoints[0].indexOf(Math.max(...totalPoints[0]))]}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
  
  export default LangPointsCard;