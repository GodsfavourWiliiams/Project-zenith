import { DashboardState } from '../action/types';

const initialState: DashboardState = {
  countries: [],
};

const dashboardReducer = (
  state = initialState,
  action: any
): DashboardState => {
  switch (action.type) {
    case 'ADD_COUNTRIES':
      return {
        ...state,
        countries: action.payload,
      };
    default:
      return state;
  }
};

export default dashboardReducer;
