import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import React, { useEffect } from 'react';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        width: "40%",
        position: 'abosolute',
        // margin: 'auto',
        // right: "30%",
        // bottom: "50%",
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    paper: {
        width: 400,
        border: '2px solid #000',
        padding: "10px",
    },
    bg: {
        position: 'absolute',
        width: "100vw",
        height: "100vh",
        background: "black",
        zIndex: "100000",
        margin: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,.5)",
        left: "0",
        top: "0",
      }
});

/**
 * 
 * @param {string} name: fruit name 
 * @param {string} description: fruit description 
 * @param {string} image: path to iamge 
 * @param {function} close: function to close popout
 * 
 * @returns 
 */
export function Popout({name, description, image, close}) {
    const classes = useStyles();

    const body = (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {name[0].toUpperCase()+ name.slice(1)}
                </Typography>
                <Typography variant="body2" component="p">
                    {description}
                </Typography>
                <img src={image} style={{maxWidth:"300px", maxHeight:"300px"}}/>
            </CardContent>
            <CardActions>
                <Button size="small" >Learn More</Button>
            </CardActions>
        </Card>
    );
    return (
        <Box className={classes.bg}  
        onClick={() => close()}
        >{body}</Box>
        )
}
