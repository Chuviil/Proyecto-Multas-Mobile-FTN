import {ActivityIndicator, Image, SafeAreaView, Text, View} from "react-native";
import {router, Stack, useLocalSearchParams} from "expo-router";
import useFetch from "../../../hooks/useFetch";
import {COLORS, images, SIZES, URL} from "../../../constants";
import MaterialButton from "../../../components/common/materialButton/MaterialButton";
import axios from "axios";
import useAuthentication from "../../../hooks/useAuth";

const MultasDetails = () => {
    const {id} = useLocalSearchParams();
    const {token} = useAuthentication();
    const {loading, error, data} = useFetch(`Multa/${id}`);

    const handlePagar = () => {
        try {
            axios.delete(
                `${URL}/api/Multa/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            ).then(() => {
                router.back();
            })
        } catch (e) {
            alert(e.message);
        }
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <Stack.Screen
                options={{
                    headerTitle: () => (
                        <Image style={{width: 110, height: 49, marginVertical: 5}} source={images.udla_logo_negro}/>
                    ),
                    headerTitleAlign: 'center',
                }}
            />
            <View style={{flex: 1, padding: SIZES.xLarge}}>
                <Text style={{textAlign: "center", fontWeight: "bold", fontSize: SIZES.xLarge}}>Detalle de Multa</Text>
                {loading ? (
                    <ActivityIndicator color={COLORS.primary}/>
                ) : error ? (
                    <Text style={{textAlign: 'center'}}>Error al cargar la información</Text>
                ) : (
                    <View style={{marginTop: 18}}>
                        <Image source={{uri: "https://placehold.co/300x200.jpg"}}
                               style={{width: 300, height: 200, alignSelf: "center"}}/>
                        <Text style={{marginTop: 18, fontWeight: "bold", fontSize: SIZES.large}}>Razon</Text>
                        <Text style={{fontSize: SIZES.medium}}>{data?.Razon}</Text>
                        <Text style={{fontWeight: "bold", fontSize: SIZES.large}}>Monto a pagar</Text>
                        <Text style={{fontSize: SIZES.medium}}>${parseFloat(data?.Monto).toFixed(2)}</Text>
                        <Text style={{fontWeight: "bold", fontSize: SIZES.large}}>Fecha de emision</Text>
                        <Text style={{fontSize: SIZES.medium}}>{(new Date(data?.Emitida)).toLocaleDateString()}</Text>
                        <Text style={{fontWeight: "bold", fontSize: SIZES.large}}>Hora de emision</Text>
                        <Text style={{fontSize: SIZES.medium}}>{(new Date(data?.Emitida)).toLocaleTimeString()}</Text>
                        <View style={{marginTop: 18}}>
                            <MaterialButton onPress={handlePagar}>
                                Pagar
                            </MaterialButton>
                        </View>
                    </View>
                )
                }
            </View>
        </SafeAreaView>
    )
}

export default MultasDetails;
