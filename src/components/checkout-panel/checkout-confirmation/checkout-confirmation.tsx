import React from 'react';
import PropTypes from 'prop-types';
import checkoutPanelViewWrapper, { SetViewProps } from '../view-wrapper';
import './checkout-confirmation.less';
import { useAppSelector } from '../../../hooks';
import { selectCheckoutConfirmation } from '../../../slices/checkout-slice';
import { useReset } from '../../../hooks/useReset';

const CheckoutConfirmationPanelView: React.FC<SetViewProps> = ({ setView }): React.ReactElement => {
    const confirmationData = useAppSelector(selectCheckoutConfirmation);

    const { resetState } = useReset();

    return (
        <section className="checkout-confirmation">
            <h2>Checkout Confirmation Panel</h2>
            <ul>
                {confirmationData.map((data) => (
                    <div key={data.name} className="checkout-confirmation-details">
                        <span>Id {data.checkout_value_id}</span>
                        <span>Name {data.name}</span>
                        <span>Cost in cents {data.cost_in_cents}</span>
                        <span>Value in cents {data.value_in_cents}</span>
                    </div>
                ))}
            </ul>
            <button
                onClick={() => {
                    setView('checkout');
                    resetState();
                }}
            >
                Done
            </button>
        </section>
    );
};

CheckoutConfirmationPanelView.propTypes = {
    setView: PropTypes.func,
};

export default checkoutPanelViewWrapper(CheckoutConfirmationPanelView, 'checkout-confirmation');
