import {
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    header: {
        fontSize: "2em",
        textAlign: "center",
        fontFamily: "Roboto",
        padding: 20
    }
}));

export default function Header() {

    const classes = useStyles();

    return (
        <h1 className={classes.header}>Britan Insights</h1>
    );
}