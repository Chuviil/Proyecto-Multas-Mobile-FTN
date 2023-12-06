import styles from "./multasCard.style";
import {Alert, Text, TouchableOpacity} from "react-native";

const MultasCard = ({item}) => {
    const handlePress = () => {
        Alert.alert(
            "Pagar Multa",
            "Esta seguro que deseas pagar esta multa?",
            [
                {
                    text: "Cancelar",
                },
                {
                    text: "Pagar",
                    onPress: () => console.log('Eliminar: ',item.MultaId),
                }
            ]
        );
    }

    return (
        <TouchableOpacity style={styles.cardContainer} onPress={handlePress}>
            <Text numberOfLines={1} style={styles.title}>{item.Razon}</Text>
            <Text>Valor a pagar: {item.Monto}</Text>
        </TouchableOpacity>
    )
}

export default MultasCard;
