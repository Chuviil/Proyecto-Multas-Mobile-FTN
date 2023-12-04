import {Image, SafeAreaView, Text, View} from "react-native";
import {Stack} from "expo-router";
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
                <View style={{width: '80%'}}>
                    <Text style={{fontSize: 60, color: COLORS.lightColor, fontWeight: 'bold', textAlign: 'center'}}>Login</Text>
                    <TextField label={"Id Banner"}/>
                    <TextField label={"Contraseña"} password/>
                    <MaterialButton>
                        Iniciar Sesión
                    </MaterialButton>
                </View>
            </View>
            <StatusBar style={"light"}/>
        </SafeAreaView>
    )
}

export default Login;
