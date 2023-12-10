import styles from "./multasCard.style";
import {Alert, Text, TouchableOpacity} from "react-native";
import {router} from "expo-router";

const MultasCard = ({item}) => {
    const handlePress = () => {
        router.push(`/multas/details/${item.MultaId}`)
    }

    return (
        <TouchableOpacity style={styles.cardContainer} onPress={handlePress}>
            <Text numberOfLines={1} style={styles.title}>{item.Razon}</Text>
            <Text>Valor a pagar: ${parseFloat(item.Monto).toFixed(2)}</Text>
        </TouchableOpacity>
    )
}

export default MultasCard;
