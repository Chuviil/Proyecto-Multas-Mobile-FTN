import {FlatList, Image, Modal, SafeAreaView, Text, View} from "react-native";
import {Stack} from "expo-router";
import MultasCard from "../../components/multas/multasCard/MultasCard";
import {images, SIZES} from "../../constants";
import {useState} from "react";

const data = [
    {
        "MultaId": 1,
        "Monto": 21.32,
        "Razon": "Tomar agua",
        "AyudanteId": "A00909988"
    },
    {
        "MultaId": 2,
        "Monto": 21.32,
        "Razon": "Tomar agua Tomar agua Tomar agua Tomar agua Tomar agua Tomar agua",
        "AyudanteId": "A00909988"
    },
    {
        "MultaId": 3,
        "Monto": 21.32,
        "Razon": "Tomar agua",
        "AyudanteId": "A00909988"
    },
    {
        "MultaId": 4,
        "Monto": 21.32,
        "Razon": "Tomar agua",
        "AyudanteId": "A00909988"
    },
    {
        "MultaId": 5,
        "Monto": 21.32,
        "Razon": "Tomar agua",
        "AyudanteId": "A00909988"
    },
    {
        "MultaId": 6,
        "Monto": 21.32,
        "Razon": "Tomar agua",
        "AyudanteId": "A00909988"
    },
    {
        "MultaId": 7,
        "Monto": 21.32,
        "Razon": "Tomar agua",
        "AyudanteId": "A00909988"
    },
    {
        "MultaId": 8,
        "Monto": 21.32,
        "Razon": "Tomar agua",
        "AyudanteId": "A00909988"
    },
    {
        "MultaId": 9,
        "Monto": 21.32,
        "Razon": "Tomar agua",
        "AyudanteId": "A00909988"
    },
    {
        "MultaId": 10,
        "Monto": 21.32,
        "Razon": "Tomar agua",
        "AyudanteId": "A00909988"
    },
    {
        "MultaId": 11,
        "Monto": 21.32,
        "Razon": "Tomar agua",
        "AyudanteId": "A00909988"
    },
    {
        "MultaId": 12,
        "Monto": 21.32,
        "Razon": "Tomar agua",
        "AyudanteId": "A00909988"
    },
    {
        "MultaId": 13,
        "Monto": 21.32,
        "Razon": "Tomar agua",
        "AyudanteId": "A00909988"
    },
    {
        "MultaId": 14,
        "Monto": 21.32,
        "Razon": "Tomar agua",
        "AyudanteId": "A00909988"
    },
    {
        "MultaId": 15,
        "Monto": 21.32,
        "Razon": "Tomar agua",
        "AyudanteId": "A00909988"
    },
    {
        "MultaId": 16,
        "Monto": 21.32,
        "Razon": "Tomar agua",
        "AyudanteId": "A00909988"
    }
]

const Multas = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <SafeAreaView style={{flex: 1}}>
            <Stack.Screen
                options={{
                    headerTitle: () => (
                        <Image style={{width: 110, height: 49, marginVertical: 5}} source={images.udla_logo_negro}/>
                    ),
                    headerTitleAlign: 'center',
                    headerBackVisible: false
                }}
            />
            <View style={{flex: 1, padding: SIZES.large}}>
                <Text
                    style={{
                        textAlign: 'center',
                        marginBottom: SIZES.large,
                        fontWeight: 'bold',
                        fontSize: SIZES.xxLarge
                    }}
                >Multas
                    por pagar</Text>
                <FlatList
                    data={data}
                    renderItem={({item}) => <MultasCard item={item}/>}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    )
}

export default Multas;
