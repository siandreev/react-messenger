import api from "core/axios/api";

const menuActions = {
    setExitState() {
       return {
           type: "APP:EXIT"
       }
    },
    exit: () => async dispatch => {
        await api.exit();
        dispatch(menuActions.setExitState());
    }
}

export default menuActions;