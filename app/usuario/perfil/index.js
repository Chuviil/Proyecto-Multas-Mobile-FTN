import React, {useState} from 'react';
import {ActivityIndicator, Alert, Image, Modal, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import {router, Stack} from "expo-router";
import useAuthentication from "../../../hooks/useAuth";
import MaterialButton from "../../../components/common/materialButton/MaterialButton";
import {COLORS, images, SIZES, URL} from "../../../constants";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import TextField from "../../../components/common/textField/TextField";
import axios from "axios";

const UsuarioPerfil = () => {
    const {user, token, logout} = useAuthentication();
    const [showChangePassword, setShowChangePassword] = useState(false);
    const [changingPassword, setChangingPassword] = useState(false);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleLogout = () => {
        Alert.alert(
            'Cerrar sesion',
            'Estas seguro que deseas cerrar sesion?',
            [
                {
                    text: 'No',
                    style: 'cancel',
                },
                {
                    text: 'Si', onPress: () => {
                        logout()
                            .then(() => router.replace("/"))
                    }
                },
            ]
        );

    };

    const handlePasswordChange = () => {
        setChangingPassword(true);
        if (user.Contrasenia !== oldPassword || newPassword !== confirmPassword) {
            setChangingPassword(false);
            alert("La contraseña actual no coincide");
            return;
        }
        try {
            axios.put(
                `${URL}/api/Ayudante/${user.IdBanner}`,
                {contrasenia: newPassword},
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            ).then(() => {
                    setShowChangePassword(false)
                    alert("Contraseña cambiada correctamente")
                }
            )
        } catch (e) {
            alert(JSON.stringify(e));
        } finally {
            setChangingPassword(false);
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
            <View style={{flex: 1, alignItems: 'center'}}>
                <Image
                    source={{uri: "https://placehold.co/230x230.png"}}
                    style={{borderRadius: 200, width: 230, height: 230, marginTop: 30}}
                />
                <Text style={{fontSize: SIZES.xLarge, fontWeight: 'bold', marginTop: 15}}>{user?.Nombre}</Text>
                <View style={{width: '80%', marginTop: 30}}>
                    <Text style={{fontSize: SIZES.large, fontWeight: 'bold'}}>IdBanner</Text>
                    <Text style={{fontSize: SIZES.medium}}>{user?.IdBanner}</Text>
                    <Text style={{fontSize: SIZES.large, fontWeight: 'bold'}}>Carrera</Text>
                    <Text style={{fontSize: SIZES.medium}}>{user?.Carrera}</Text>
                    <View style={{marginTop: 30, gap: 15}}>
                        <MaterialButton onPress={() => setShowChangePassword(true)}>Cambiar Contraseña</MaterialButton>
                        <MaterialButton color={"#C43240"} onPress={handleLogout}>
                            <Text style={{color: 'white'}}>Cerrar Sesion</Text>
                        </MaterialButton>
                    </View>
                </View>
                <Modal visible={showChangePassword} transparent>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{
                            height: '70%',
                            width: '80%',
                            backgroundColor: 'white',
                            borderRadius: 15,
                            padding: 20,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            {changingPassword ? (
                                <ActivityIndicator style={{position: 'absolute', right: 10, top: 10}} color={"#000"}
                                                   size={"large"}/>
                            ) : (
                                <TouchableOpacity style={{position: 'absolute', right: 10, top: 10}}
                                                  onPress={() => setShowChangePassword(false)}>
                                    <MaterialCommunityIcons name={"close"} size={30}/>
                                </TouchableOpacity>
                            )}
                            <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: SIZES.large}}>Cambio de
                                Contraseña</Text>
                            <TextField dark onChangeText={(ca) => setOldPassword(ca)} label={"Contraseña actual"}/>
                            <TextField dark onChangeText={(nc) => setNewPassword(nc)} label={"Nueva contraseña"}/>
                            <TextField dark onChangeText={(ncc) => setConfirmPassword(ncc)}
                                       label={"Confirmar nueva contraseña"}/>
                            <View style={{marginTop: 20}}>
                                {changingPassword ? (
                                    <ActivityIndicator color={COLORS.primary} size={"large"}/>
                                ) : (
                                    <MaterialButton onPress={handlePasswordChange}>
                                        Cambiar Contraseña
                                    </MaterialButton>
                                )}
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </SafeAreaView>
    );
};

export default UsuarioPerfil;