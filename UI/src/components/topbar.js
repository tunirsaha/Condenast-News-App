import {
    Container,
    makeStyles
} from '@material-ui/core';
import Header from '../components/header';
import MenuBar from '../components/menubar';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#efefef"
    }
}));


export default function TopBar() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container>
                <Header></Header>
            </Container>
            <Container>
                <MenuBar></MenuBar>
            </Container>
        </div>
    );
}