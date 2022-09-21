import React from 'react';
import { useOffers } from '../../../modules/widget/components/offers/hooks/useOffers';
import { GiftCard } from '../../common';
import checkoutPanelViewWrapper, { SetViewProps } from '../view-wrapper';

import CheckoutButton from './checkout-button';

import './checkout.less';

const CheckoutPanelView: React.FC<SetViewProps> = ({ setView }): React.ReactElement => {
    const { selectedOffers } = useOffers();

    const renderSelectedGiftCards = () => {
        return selectedOffers.map((selectedOffer) => (
            <>
                <GiftCard
                    altText="altText"
                    imgUrl={selectedOffer.image_url}
                    name={selectedOffer.name}
                    hasSelectValue={true}
                    giftCardValues={selectedOffer.giftcard_list}
                />
            </>
        ));
    };

    return (
        <section className="checkout">
            <div className="grid grid--top-bottom grid--stretch-top">
                <div className="grid__item no-scrollbars">
                    <section className="checkout__brand">{renderSelectedGiftCards()}</section>
                </div>
                <div className="grid__item">
                    <section className="checkout__calculation">
                        <CheckoutButton setView={setView} />
                    </section>
                </div>
            </div>
        </section>
    );
};

export default checkoutPanelViewWrapper(CheckoutPanelView, 'checkout');
