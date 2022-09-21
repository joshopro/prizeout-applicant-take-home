import { useDispatch } from 'react-redux';
import { setCheckoutConfirmation } from '../slices/checkout-slice';
import { setSelectedOffer } from '../slices/offers-slice';
import { AppDispatch } from '../store';

export const useReset = () => {
    const dispatch = useDispatch<AppDispatch>();

    const resetState = (): void => {
        dispatch(setSelectedOffer([]));
        dispatch(setCheckoutConfirmation([]));
    };

    return {
        resetState,
    };
};
