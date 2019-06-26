import { RippleProps } from "react-native-material-ripple";
import { Animated, TextStyle } from 'react-native'
declare module 'react-native-material-buttons' {
    export interface ButtonProps extends RippleProps {
        color?: string,
        shadeColor?: string,
        shadeOpacity?: number,
        shadeBorderRadius?: number,
        focusAnimation?: Animated.Value
        focusAnimationDuration?: number,
        disabledColor?: string
    }

    export class Button<ButtonProps> {}

    export interface RaisedButtonProps extends ButtonProps {}

    export class RaisedButton<RaisedButtonProps> {}
    
    export interface RaisedTextButtonProps extends RaisedButtonProps {
        title: string,
        titleColor?: string,
        titleStyle?: TextStyle,
        disabledTitleColor?: string,
    }

    export class RaisedTextButton<RaisedTextButtonProps> {}

    export interface TextButtonProps extends ButtonProps {
        title: string,
        titleColor?: string,
        titleStyle?: TextStyle,
        disabledTitleColor?: string,
    }

    export class TextButton<TextButtonProps> {}
}