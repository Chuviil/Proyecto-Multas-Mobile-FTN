import {Image, ImageBackground, SafeAreaView, Text, View} from "react-native";
import {router, Stack} from "expo-router";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {COLORS, images} from "../constants";
import {StatusBar} from "expo-status-bar";
import MaterialButton from "../components/common/materialButton/MaterialButton";

export default function Page() {
    const insets = useSafeAreaInsets();
    return (
        <SafeAreaView style={{flex: 1}}>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            />
            <ImageBackground style={{flex: 1, backgroundColor: COLORS.darkColor}} source={images.main_bg} resizeMode={"cover"}>
                <View style={{flex: 1, paddingTop: insets.top, alignItems: "center"}}>
                    <Image resizeMode={"contain"} source={images.udla_logo_blanco} style={{width: 200, height: 72, marginTop: 45}}/>
                    <View style={{position: "absolute", bottom: 45, width: '80%'}}>
                        <Text style={{marginBottom: 20, textAlign: 'center', color: COLORS.lightColor, fontSize: 19}}>Inicia sesion para revisar tus multas</Text>
                        <MaterialButton onPress={() => router.push("/login")}>
                            Iniciar Sesión
                        </MaterialButton>
                    </View>
                </View>
            </ImageBackground>
            <StatusBar style={"light"}/>
        </SafeAreaView>
    );
}
