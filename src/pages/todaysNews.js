import {
    Container,
    makeStyles
} from '@material-ui/core';
import Timeline from '../components/timeline';
import TopBar from '../components/topbar';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#efefef"
    }
}));


export default function TodaysNews() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/* <TopBar></TopBar> */}
            <Container>
                <Timeline></Timeline>
            </Container>
        </div>
    );
}