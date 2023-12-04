import {StyleSheet} from "react-native";
import {COLORS} from "../../../constants";

const styles = StyleSheet.create({
    textFieldContainer: {
        width: '100%',
        paddingVertical: 10
    },
    labelText: (color) => ({
        color: color ?? COLORS.primary
    }),
    textInput: {
        color: COLORS.lightColor,
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    }
});

export default styles;
