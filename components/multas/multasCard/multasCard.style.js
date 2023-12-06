import {StyleSheet} from "react-native";
import {COLORS, SIZES} from "../../../constants";

const styles = StyleSheet.create({
    cardContainer: {
        width: '100%',
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: 'white',
        borderBottomColor: COLORS.primary,
        borderBottomWidth: 1,
    },
    title: {
        fontSize: SIZES.large,
        fontWeight: 'bold',
    }
});

export default styles;
