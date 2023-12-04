import {Text, TextInput, View} from "react-native";
import styles from "./textField.style";

const TextField = ({label, password, labelColor}) => {
    return (
        <View style={styles.textFieldContainer}>
            <Text style={styles.labelText(labelColor)}>{label}</Text>
            <TextInput secureTextEntry={password} style={styles.textInput}/>
        </View>
    )
}

export default TextField;
