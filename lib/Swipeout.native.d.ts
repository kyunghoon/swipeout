/// <reference types="react" />
import React from 'react';
import SwipeoutPropType from './PropTypes';
declare class Swipeout extends React.Component<SwipeoutPropType, any> {
    static defaultProps: {
        autoClose: boolean;
        disabled: boolean;
        onOpen(): void;
        onClose(): void;
        scroll(enabled: boolean): void;
    };
    constructor(props: any);
    renderCustomButton(button: any): {
        text: any;
        onPress: any;
        type: string;
        component: JSX.Element;
        backgroundColor: string;
        color: string;
        disabled: boolean;
    };
    render(): JSX.Element;
}
export default Swipeout;
