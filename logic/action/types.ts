export interface DashboardState {
  checkBox: boolean;
}

export interface RootState {
  dashboardReducer: DashboardState;
}

const actionTypes = {
  SET_CHECKBOX: 'SET_CHECKBOX',
};

export default actionTypes;
