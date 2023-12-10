import {Text, TextInput, View} from "react-native";
import styles from "./textField.style";

const TextField = ({label, password, labelColor, onChangeText}) => {
    return (
        <View style={styles.textFieldContainer}>
            <Text style={styles.labelText(labelColor)}>{label}</Text>
            <TextInput onChangeText={onChangeText} secureTextEntry={password} style={styles.textInput}/>
        </View>
    )
}

export default TextField;
