import {Image, SafeAreaView, Text, View} from "react-native";
import {router, Stack} from "expo-router";
import {COLORS, images} from "../constants";
import {StatusBar} from "expo-status-bar";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import MaterialButton from "../components/common/materialButton/MaterialButton";
import TextField from "../components/common/textField/TextField";

const Login = () => {
    const insets = useSafeAreaInsets();

    return (
        <SafeAreaView style={{flex: 1}}>
            <Stack.Screen options={{
                headerShown: false
            }}/>
            <View style={{flex: 1, alignItems: 'center', backgroundColor: COLORS.darkColor, paddingTop: insets.top}}>
                <Image resizeMode={"contain"} source={images.udla_logo_blanco}
                       style={{width: 322, height: 116, marginTop: 45}}/>
                <View style={{width: '80%', marginTop: 60}}>
                    <Text style={{
                        fontSize: 45,
                        color: COLORS.lightColor,
                        fontWeight: 'bold',
                        textAlign: 'center'
                    }}>Login</Text>
                    <Text style={{color: COLORS.lightColor, textAlign: 'center', marginBottom: 60}}>Revisemos tus
                        multas!</Text>
                    <TextField label={"Id Banner"}/>
                    <TextField label={"Contraseña"} password/>
                    <View style={{marginTop: 60}}>
                        <MaterialButton onPress={() => router.replace("/multas")}>
                            Iniciar Sesión
                        </MaterialButton>
                    </View>
                </View>
            </View>
            <StatusBar style={"light"}/>
        </SafeAreaView>
    )
}

export default Login;
