interface IPropTypes {
    left?: Array<{
        text: string;
        onPress?: () => void;
        style?: any;
        className?: string;
    }>;
    right?: Array<{
        text: string;
        onPress?: () => void;
        style?: any;
        className?: string;
    }>;
    autoClose?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
    scroll?: (enable: boolean) => void;
    disabled?: boolean;
    style?: any;
    prefixCls?: string;
}
export default IPropTypes;
