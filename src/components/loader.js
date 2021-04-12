import {
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    loader: {
        top: '45%',
        left: '45%',
        width: '100px',
        height: '100px',
        position: 'fixed',
        background: '#fff',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: '10%',
        boxShadow: '1px 5px 5px 1px #000',
    }
}));

export default function MenuBar() {

    const classes = useStyles();

    return (
        <div className={classes.loader}>
            Loading
        </div>
    );
}