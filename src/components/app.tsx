import * as React from 'react';

import { Loader } from './common';
import { Widget } from '../modules/widget';
import './app.less';

// TODO: determine a way to configure which module renders based on a param

export const App: React.FC = (): React.ReactElement => (
    <div className="application-wrapper">
        <div className="app-content-wrapper">
            <Widget />
        </div>
        <Loader />
    </div>
);
