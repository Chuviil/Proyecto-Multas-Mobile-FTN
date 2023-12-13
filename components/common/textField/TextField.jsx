import {Text, TextInput, View} from "react-native";
import styles from "./textField.style";

const TextField = ({label, password, labelColor, onChangeText, dark}) => {
    return (
        <View style={styles.textFieldContainer}>
            <Text style={styles.labelText(labelColor)}>{label}</Text>
            <TextInput onChangeText={onChangeText} secureTextEntry={password} style={styles.textInput(dark)}/>
        </View>
    )
}

export default TextField;
