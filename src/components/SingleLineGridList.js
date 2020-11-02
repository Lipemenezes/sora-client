import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    color: 'white',
  },
  gridList: {
    // flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  gridListTile: {
    maxWidth: '50%',
    maxHeight: 120,
    // padding: 25,
  },
  title: {
    color: 'white',
  }
}));


export default function SingleLineGridList({ data }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={1} spacing={10}>
        {data.map((tile) => (
          <GridListTile key={tile.id} className={classes.gridListTile}>
            <img src={tile.img} alt={tile.title} className={classes.img} />
            <GridListTileBar
              title={<strong>{tile.title}</strong>}
              subtitle={tile.subtitle}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={tile.icon ? tile.icon : null}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
