import {
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    menubar: {
        textAlign: "center",
        fontFamily: "Roboto",
        padding: 20,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        textDecoration: "underline",
        cursor: "pointer",
        paddingBottom: 40
    }
}));

export default function MenuBar() {

    const classes = useStyles();

    return (
        <ul className={classes.menubar}>
            <li>
                <a href="./headlines">Today's Headlines</a>
            </li>
            <li>
                <a href="./today">Today's News</a>
            </li>
            <li>
                <a href="./business">Business Sources</a>
            </li>
            <li>
                <a href="./entertainment">Entertainment Sources</a>
            </li>
            <li>
                <a href="./sports">Sports Sources</a>
            </li>
            <li>
                <a href="./technology">Technology Sources</a>
            </li>
        </ul>
    );
}