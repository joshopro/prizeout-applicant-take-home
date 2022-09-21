import React from 'react';
import Classnames from 'classnames';
import PropTypes from 'prop-types';
import { GiftCardImage } from './gift-card-image';
import { constants } from '../../../utils/constants';

import './gift-card.less';
import { PrizeoutOfferValueOptions } from '../../../slices/offers-slice';
import { useOffers } from '../../../modules/widget/components/offers/hooks/useOffers';

interface GiftCardProps {
    altText?: string;
    className?: string;
    imgUrl?: string;
    name: string;
    value?: number;
    hasSelectValue?: boolean;
    giftCardValues?: Array<PrizeoutOfferValueOptions>;
}

export const GiftCard: React.FC<GiftCardProps> = ({
    name,
    value,
    imgUrl,
    altText,
    className,
    hasSelectValue,
    giftCardValues,
}): React.ReactElement => {
    const classes: string = Classnames('gift-card', className),
        imageUrl = imgUrl || constants.defaultGiftCardUrl,
        imageAltText = altText || 'Gift Card';

    const { handleSelectCardValue } = useOffers();

    return (
        <div className={classes}>
            <GiftCardImage imgUrl={imageUrl} altText={imageAltText} />
            <div className="gift-card__row">
                <span className="gift-card-name">{name}</span>
                {value && <span className="gift-card-value">{value}</span>}
            </div>
            {hasSelectValue && (
                <div>
                    <select onChange={(e) => handleSelectCardValue(e.target.value)}>
                        {giftCardValues.map((giftCard) => (
                            <>
                                <option key={giftCard.checkout_value_id} value={giftCard.checkout_value_id}>
                                    {giftCard.value_in_cents}
                                </option>
                            </>
                        ))}
                    </select>
                </div>
            )}
        </div>
    );
};

GiftCard.propTypes = {
    altText: PropTypes.string,
    imgUrl: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.number,
};
