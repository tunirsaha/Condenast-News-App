import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '32%',
    marginBottom: 20,
    marginRight: '1%',
    display: 'inline-grid',
    justifyContent: 'center',
    alignItems: 'center'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  date: {
    display: 'inline-block',
    paddingLeft: 15,
    paddingBottom: 10,
    fontSize: 12
  }
}));

export default function NewsCard(props) {
  const propData = props.data
  const classes = useStyles();
  const formatDate = (dateStr) => {
    console.log(dateStr)
    return dateStr.split('T')[0]
  }

  return (
    <>
      {
        propData && propData.urlToImage && propData.description &&
        <Card className={classes.root}>
          <CardHeader
            title={propData.author}
            subheader={propData.source.name}
          />
          <span className={classes.date}>{formatDate(propData && propData.publishedAt)}</span>
          {
            propData && propData.urlToImage &&
            <CardMedia
              className={classes.media}
              image={propData.urlToImage}
              title="news image"
            />
          }
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {propData.description}
            </Typography>
          </CardContent>
        </Card>
      }
    </>
  );
}
