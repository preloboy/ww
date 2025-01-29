import { FC, ReactNode } from "react";
import { Text, TextProps } from "react-native";

export type SubtitleProps = TextProps & {
    children: ReactNode
}

const Subtitle: FC<SubtitleProps> = ({ children, ...rest }) => {
    return (
        <Text
            className="subtitle"
            {...rest}
        >
            {children}
        </Text>
    )
}

export default Subtitle
