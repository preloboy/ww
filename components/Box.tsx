import { FC, ReactNode } from "react";
import { Text, View, ViewProps } from "react-native";

export type BoxProps = ViewProps & {
    children?: ReactNode
}

const Box: FC<BoxProps> = ({ children }) => {
    return (
        <View className="card">
            {children}
        </View>
    )
}

export default Box;