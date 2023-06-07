import { DashboardState } from '../action/types';
import { RootState } from '../action/types';
import actionTypes from '../action/types';

const initialState: DashboardState = {
  checkBox: false,
};

const dashboardReducer = (
  state = initialState,
  actions: any
): DashboardState => {
  switch (actions.type) {
    case actionTypes.SET_CHECKBOX:
      return {
        ...state,
        checkBox: actions.payload,
      };
    default:
      return state;
  }
};

export default dashboardReducer;
