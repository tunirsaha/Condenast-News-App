import {
    makeStyles
} from '@material-ui/core';
import TopBar from '../components/topbar';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#efefef"
    }
}));


export default function Home() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/* <TopBar></TopBar> */}
            <p>Welcome to News App</p>
        </div>
    );
}