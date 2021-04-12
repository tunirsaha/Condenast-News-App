import {
    Container,
    makeStyles
} from '@material-ui/core';
import NewsFeed from '../components/newsfeed';
import TopBar from '../components/topbar';
import Footer from '../components/footer';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    }
}));


export default function TodaysNews() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <TopBar></TopBar>
            <Container>
                <NewsFeed type={'headlines'}></NewsFeed>
            </Container>
            <Container>
                <Footer></Footer>
            </Container>
        </div>
    );
}