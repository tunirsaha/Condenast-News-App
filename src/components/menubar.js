import {
    makeStyles
} from '@material-ui/core';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import TodaysNews from '../pages/todaysNews';
import Home from '../pages/home';

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
        <Router>
            <ul className="menubar">
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/today">Today's News</Link>
                </li>
            </ul>
        </Router>
    );
}