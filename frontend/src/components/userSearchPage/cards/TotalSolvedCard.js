import {
    Avatar,
    Box,
    Card,
    CardContent,
    Grid,
    Typography
  } from '@material-ui/core';

  const TotalSolvedCard = ({totalSolved}) => (
    <Card
      sx={{ height: '100%' }}
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
              SOLVED CHALLENGES
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              {(totalSolved) && (totalSolved[0].reduce((a, b) => a + b))}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
  
  export default TotalSolvedCard;