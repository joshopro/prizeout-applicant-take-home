import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export interface CheckoutSlice {
    isSide: boolean;
    loading: boolean;
    view: ViewEnum;
}

export type ViewEnum = 'checkout' | 'checkout-confirmation';

export const checkoutInitialState: CheckoutSlice = {
    isSide: true,
    loading: false,
    view: 'checkout',
};

export const checkoutSlice = createSlice({
    initialState: checkoutInitialState,
    name: 'checkout',
    reducers: {
        setCheckoutView(state, action: PayloadAction<ViewEnum>) {
            state.view = action.payload;
        },
        toggleIsLoading(state) {
            state.loading = !state.loading;
        },
        toggleIsSide(state) {
            // TODO: Check screen size to determine if it's side or bottom
            state.isSide = !state.isSide;
        },
    },
});

export const { setCheckoutView, toggleIsLoading, toggleIsSide } = checkoutSlice.actions;

export const selectLoading = ({ checkout: { loading } }: RootState): boolean => loading;

export const selectCheckoutView = ({ checkout: { view } }: RootState): ViewEnum => view;

export const selectCheckoutIsSide = ({ checkout }: RootState): boolean => {
    return checkout.isSide;
};

export default checkoutSlice.reducer;
