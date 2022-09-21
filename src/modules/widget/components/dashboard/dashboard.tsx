import React from 'react';
import { Footer, Header } from '../../../../components/common';
import { CheckoutPanel } from '../../../../components/checkout-panel/checkout-panel';
import DisplayOffers from '../offers/display-offers';

import './dashboard.less';

const Dashboard: React.FC = (): React.ReactElement => {
    return (
        <>
            <div>
                <Header />
                <div className="dashboard__wrapper">
                    <section className="dashboard__content no-scrollbars">
                        <div className="dashboard__inner">
                            <DisplayOffers />
                        </div>
                        <Footer />
                    </section>
                    <CheckoutPanel />
                </div>
            </div>
        </>
    );
};

export default Dashboard;
