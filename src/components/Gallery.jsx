import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { Popout } from "./Popout.jsx"

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 1000,
        height: 600,
        background: "whitesmoke",
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

/**
 * Data structure:
 * {
 *  "name": {
 *          "img": img_url,
 *          "description": description,
 *          , ...
 * }, ...
 * 
 * }
 * 
 */
export const Gallery = ({ data, subtitle }) => {
    const classes = useStyles();
    const [selectedTile, setSelectedTile] = React.useState(null);
    const [popout, setPopout] = React.useState(<div hidden></div>);

    const handleClickOpen = tile => {
        setSelectedTile(tile);
        console.log("clicked");
        console.log(tile);
    };

    const handleClose = () => {
        setSelectedTile(null);
    };

    React.useEffect(() => {
        if (selectedTile) {
            setPopout(
                <Popout name={selectedTile}
                    description={data[selectedTile].description}
                    image={data[selectedTile].image}
                    close={handleClose} />)
        } else { handleClose(); setPopout(<div hidden></div>); }
    }, [selectedTile])
    return (
        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">{subtitle}</ListSubheader>
                </GridListTile>
                {Object.keys(data).map((fruit) => (
                    <GridListTile key={fruit}>
                        <img src={data[fruit].image} alt={fruit} />
                        <GridListTileBar
                            title={fruit[0].toUpperCase() + fruit.slice(1)}
                            actionIcon={
                                <IconButton
                                    aria-label={'Info about ' + fruit + "s."}
                                    className={classes.icon}
                                    onClick={() => handleClickOpen(fruit)}
                                >
                                    <InfoIcon />
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
            {popout}
        </div>
    );
}