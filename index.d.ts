declare module 'react-native-material-buttons' {
    import { RippleProps } from "react-native-material-ripple";
    import { Animated, TextStyle } from 'react-native';

    export interface ButtonProps extends RippleProps {
        color?: string,
        shadeColor?: string,
        shadeOpacity?: number,
        shadeBorderRadius?: number,
        focusAnimation?: Animated.Value
        focusAnimationDuration?: number,
        disabledColor?: string
    }

    export class Button extends React.PureComponent<ButtonProps> {}

    export interface RaisedButtonProps extends ButtonProps {}

    export class RaisedButton extends React.PureComponent<RaisedButtonProps> {}
    
    export interface RaisedTextButtonProps extends RaisedButtonProps {
        title: string,
        titleColor?: string,
        titleStyle?: TextStyle,
        disabledTitleColor?: string,
    }

    export class RaisedTextButton extends React.PureComponent<RaisedTextButtonProps> {}

    export interface TextButtonProps extends ButtonProps {
        title: string,
        titleColor?: string,
        titleStyle?: TextStyle,
        disabledTitleColor?: string,
    }

    export class TextButton extends React.PureComponent<TextButtonProps> {}
}
