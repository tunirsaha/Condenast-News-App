import {
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    footer: {
        fontSize: "0.8em",
        textAlign: "center",
        fontFamily: "Roboto",
        padding: 20
    }
}));

export default function Footer() {

    const classes = useStyles();

    return (
        <h5 className={classes.footer}>&copy; Conde Nast 2021</h5>
    );
}