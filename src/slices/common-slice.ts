import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../store';

// Define a type for the slice state
export interface CommonState {
    loading: boolean;
}

// Define the initial state using that type
export const commonInitialState: CommonState = {
    loading: false,
};

export const commonSlice = createSlice({
    initialState: commonInitialState,
    name: 'common',
    reducers: {
        toggleIsLoading(state) {
            state.loading = !state.loading;
        },
    },
});

export const { toggleIsLoading } = commonSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectLoading = ({ common: { loading } }: RootState): boolean => loading;

export default commonSlice.reducer;
