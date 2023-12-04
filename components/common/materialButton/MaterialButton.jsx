import {Text, TouchableOpacity} from "react-native";
import styles from "./materialButton.style";

const MaterialButton = ({children, size, color, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.buttonContainer(color)}>
            <Text
                style={{
                    fontSize: size ?? 18,
                }}
            >
                {children}
            </Text>
        </TouchableOpacity>
    )
}

export default MaterialButton;