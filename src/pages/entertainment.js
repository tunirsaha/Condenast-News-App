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


export default function Entertainment() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <TopBar></TopBar>
            <Container>
                <NewsFeed type={'entertainment'}></NewsFeed>
            </Container>
            <Container>
                <Footer></Footer>
            </Container>
        </div>
    );
}