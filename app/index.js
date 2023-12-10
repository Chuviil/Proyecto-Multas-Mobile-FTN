import useAuthentication from "../hooks/useAuth";
import {ActivityIndicator, View} from "react-native";
import {Redirect, Stack} from "expo-router";
import {COLORS} from "../constants";

const Index = () => {
    const {user, loading} = useAuthentication();

    return (
        <View>
            <Stack.Screen
                options={{
                    headerShown: false
                }}
            />
            {loading ? (
                <ActivityIndicator color={COLORS.primary} size="large"/>
            ) : !user ? (
                <Redirect href={"/auth"}/>
            ) : (
                <Redirect href={"/multas"}/>
            )
            }
        </View>
    )
}

export default Index;
