import {
    Avatar,
    Card,
    CardContent,
    Grid,
    Typography
  } from '@material-ui/core';
  
  const LangCard = ({languages, totalSolved}) => (
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
              TOP LANGUAGE
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              {languages[0][totalSolved[0].indexOf(Math.max(...totalSolved[0]))]}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
  
  export default LangCard;