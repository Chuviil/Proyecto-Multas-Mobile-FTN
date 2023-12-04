import {StyleSheet} from "react-native";
import {COLORS} from "../../../constants";

const styles = StyleSheet.create({
    buttonContainer: (color) => ({
        height: 40,
        paddingHorizontal: 24,
        borderRadius: 20,
        backgroundColor: color ?? COLORS.primary,
        justifyContent: "center",
        alignItems: "center",
    }),
});

export default styles;
