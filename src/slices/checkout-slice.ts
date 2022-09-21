import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export interface CheckoutSlice {
    isSide: boolean;
    loading: boolean;
    view: ViewEnum;
    checkoutConfirmation: CheckoutPayload[];
}

export type ViewEnum = 'checkout' | 'checkout-confirmation';

export const checkoutInitialState: CheckoutSlice = {
    checkoutConfirmation: [],
    isSide: true,
    loading: false,
    view: 'checkout',
};

export type CheckoutPayload = {
    checkout_value_id?: string;
    cost_in_cents?: number;
    name?: string;
    value_in_cents?: number;
};

export const checkoutSlice = createSlice({
    initialState: checkoutInitialState,
    name: 'checkout',
    reducers: {
        setCheckoutConfirmation(state, action: PayloadAction<CheckoutPayload[]>) {
            state.checkoutConfirmation = action.payload;
        },
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

export const { setCheckoutView, toggleIsLoading, toggleIsSide, setCheckoutConfirmation } = checkoutSlice.actions;

export const selectLoading = ({ checkout: { loading } }: RootState): boolean => loading;

export const selectCheckoutView = ({ checkout: { view } }: RootState): ViewEnum => view;

export const selectCheckoutIsSide = ({ checkout }: RootState): boolean => {
    return checkout.isSide;
};

export const selectCheckoutConfirmation = ({ checkout: { checkoutConfirmation } }: RootState): CheckoutPayload[] =>
    checkoutConfirmation;

export default checkoutSlice.reducer;
