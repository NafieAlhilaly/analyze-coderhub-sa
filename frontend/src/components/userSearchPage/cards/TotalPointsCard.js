import {
    Box,
    Card,
    CardContent,
    Grid,
    Typography
  } from '@material-ui/core';

  const TotalPointsCard = ({totalPoints}) => {
    return(
        <Card
        sx={{ height: '100%', boxShadow:3}}
        
        >
        <CardContent>
            <Grid
            container
            spacing={3}
            sx={{ justifyContent: 'space-between' }}
            >
            <Grid item>
                <Typography
                color="textSecondary"
                gutterBottom
                variant="h6"
                >
                TOTAL POINTS
                </Typography>
                <Typography
                color="textPrimary"
                variant="h3"
                >
                {(totalPoints) && (totalPoints[0].reduce((a, b) => a + b))}
                </Typography>
            </Grid>
            <Grid item>
            </Grid>
            </Grid>
        </CardContent>
        </Card>
      )}
  
  export default TotalPointsCard;