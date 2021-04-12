import {
    makeStyles
} from '@material-ui/core';
import loader from '../assets/loader.gif'

const useStyles = makeStyles((theme) => ({
    loader: {
        top: '45%',
        left: '45%',
        width: '100px',
        height: '100px',
        position: 'fixed',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
}));

export default function MenuBar() {

    const classes = useStyles();

    return (
        <div className={classes.loader}>
            <img style={{ width: '100%' }} src={loader} />
        </div>
    );
}