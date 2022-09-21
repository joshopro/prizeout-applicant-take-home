import React from 'react';
import { useDispatch } from 'react-redux';
import { useOffers } from '../../../modules/widget/components/offers/hooks/useOffers';
import { CheckoutPayload, ViewEnum, setCheckoutConfirmation } from '../../../slices/checkout-slice';
import { toggleIsLoading } from '../../../slices/common-slice';
import { AppDispatch } from '../../../store';
import { Button } from '../../common';

import './checkout-button.less';

type CheckoutButtonProps = {
    setView: (view: ViewEnum) => void;
};

const CheckoutButton: React.FC<CheckoutButtonProps> = ({ setView }): React.ReactElement => {
    const buttonText = 'Prizeout Gift Card';
    const { selectedOffers } = useOffers();
    const dispatch = useDispatch<AppDispatch>();

    const buttonHandler = () => {
        const data: CheckoutPayload = {};
        const payload: CheckoutPayload[] = [];
        dispatch(toggleIsLoading());
        selectedOffers.forEach((selectedOffer) => {
            data.name = selectedOffer.name;
            selectedOffer.giftcard_list.forEach((gift) => {
                if (gift.selected) {
                    data.checkout_value_id = gift.checkout_value_id;
                    data.cost_in_cents = gift.cost_in_cents;
                    data.value_in_cents = gift.value_in_cents;
                }
            });
            payload.push(data);
        });

        dispatch(setCheckoutConfirmation(payload));

        setTimeout(() => {
            setView('checkout-confirmation');
            dispatch(toggleIsLoading());
        }, 1500);
    };

    return (
        <>
            <Button
                ariaLabel="Prizeout your gift card"
                color={`confirm`}
                onClick={buttonHandler}
                isDisabled={selectedOffers.length !== 0 ? false : true}
                size="medium"
                text={buttonText}
                type="submit"
            />
        </>
    );
};

export default CheckoutButton;
