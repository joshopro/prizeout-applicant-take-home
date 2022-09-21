import { useAppSelector } from '../../../../../hooks';
import { useDispatch } from 'react-redux';
import { PrizeoutOffer, selectOffers, setSelectedOffer } from '../../../../../slices/offers-slice';
import { AppDispatch } from '../../../../../store';

export const useOffers = () => {
    const offerState = useAppSelector(selectOffers);
    const dispatch = useDispatch<AppDispatch>();

    const { selectedOffers } = offerState;

    const getGiftCardId = (offer: PrizeoutOffer) => {
        const selectedIds = selectedOffers.map((selectedOffer) => selectedOffer.giftcard_list[0].checkout_value_id);
        if (selectedIds.includes(offer.giftcard_list[0].checkout_value_id)) {
            return offer.giftcard_list[0].checkout_value_id;
        }
    };

    const handleSelectCardValue = (checkoutValueId: string) => {
        const selectedOffersContainer: PrizeoutOffer[] = JSON.parse(JSON.stringify(selectedOffers));
        selectedOffersContainer.forEach((selectedOffer) => {
            selectedOffer.giftcard_list.forEach((gift, i) => {
                if (gift.checkout_value_id === checkoutValueId) {
                    selectedOffer.giftcard_list[i].selected = true;
                } else {
                    selectedOffer.giftcard_list[i].selected = false;
                }
            });
        });

        dispatch(setSelectedOffer(selectedOffersContainer));
    };

    const offerClickHandler = (offer: PrizeoutOffer) => {
        const selectedOffersContainer: PrizeoutOffer[] = JSON.parse(JSON.stringify(selectedOffers));
        const unq = selectedOffersContainer.map((s) => s.giftcard_list[0].checkout_value_id);

        for (let i = selectedOffersContainer.length - 1; i >= 0; i--) {
            if (
                selectedOffersContainer[i].giftcard_list[0].checkout_value_id ===
                offer.giftcard_list[0].checkout_value_id
            ) {
                selectedOffersContainer.splice(i, 1);
            }

            if (!unq.includes(offer.giftcard_list[0].checkout_value_id)) {
                const newOffer = JSON.parse(JSON.stringify(offer));
                newOffer.giftcard_list[0].selected = true;
                selectedOffersContainer.push(newOffer);
            }

            dispatch(setSelectedOffer([...selectedOffersContainer]));
        }
    };

    return {
        getGiftCardId,
        handleSelectCardValue,
        offerClickHandler,
        selectedOffers,
    };
};
