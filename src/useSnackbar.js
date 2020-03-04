import { useContext } from 'react';
import SnackbarContext from './SnackbarContext';

export default () => {
    const { enqueueSnackbar, closeSnackbar, modifySnackbar } = useContext(SnackbarContext);

    return {
        enqueueSnackbar,
        closeSnackbar,
        modifySnackbar
    };
};
