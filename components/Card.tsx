import { FC } from "react";
import Box from "./Box";
import { Image, ImageSourcePropType, StyleSheet } from "react-native";
import Subtitle from "./Subtitle";
import Desc from "./Desc";

export type CardProps = {
    image?: string,
    imgSource?: ImageSourcePropType,
    title: string,
    desc?: string,
}

const defaultImage = require('../assets/images/icon.png')

const Card: FC<CardProps> = ({ image, imgSource, title, desc, ...rest }) => {
    const imageSource = image ? { uri: image } : imgSource || defaultImage;
    return (
        <Box style={styles.card}>
            <Image
                source={imageSource}
                resizeMode="contain"
                style={styles.image}
            />
            <Subtitle>{title}</Subtitle>
            <Desc>{desc}</Desc>
        </Box>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        height: '100%',
        backgroundColor: '#64748b', // slate-500
    },
    image: {
        width: '100%',
        height: 200,
    },
});

export default Card