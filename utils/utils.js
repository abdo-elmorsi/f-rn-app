import { Linking } from "react-native";

export const openUrl = (url) => {
    Linking.openURL(url).catch((err) =>
        console.error("Couldn't load page", err)
    );
};
