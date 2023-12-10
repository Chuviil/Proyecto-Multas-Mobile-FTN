import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Image, RefreshControl, SafeAreaView, Text, View} from 'react-native';
import {Stack, useNavigation} from 'expo-router';
import MultasCard from '../../components/multas/multasCard/MultasCard';
import {images, SIZES} from '../../constants';
import useFetch from '../../hooks/useFetch';
import useAuthentication from '../../hooks/useAuth';

const Multas = () => {
    const {user} = useAuthentication();
    const {data, error, loading, refetch} = useFetch(user ? `Ayudante/${user.IdBanner}/multas` : null);
    const [refreshing, setRefreshing] = useState(false);
    const navigation = useNavigation();

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        refetch();
        setRefreshing(false);
    }, [refetch]);

    useEffect(() => {
        const unsubscribeFocus = navigation.addListener('focus', () => {
            if (!loading) {
                refetch();
            }
        });

        return () => {
            unsubscribeFocus();
        };
    }, [navigation, loading, refetch]);

    return (
        <SafeAreaView style={{flex: 1}}>
            <Stack.Screen
                options={{
                    headerTitle: () => (
                        <Image style={{width: 110, height: 49, marginVertical: 5}} source={images.udla_logo_negro}/>
                    ),
                    headerTitleAlign: 'center',
                    headerBackVisible: false,
                }}
            />
            <View style={{flex: 1, padding: SIZES.large}}>
                <Text style={{fontWeight: 'bold', fontSize: SIZES.xLarge, marginBottom: SIZES.large}}>
                    Bienvenid@, {user?.Nombre}
                </Text>
                <Text style={{marginBottom: SIZES.medium, fontWeight: 'bold', fontSize: SIZES.large}}>
                    Multas por pagar ({user?.IdBanner})
                </Text>
                {loading ? (
                    <ActivityIndicator/>
                ) : error ? (
                    <Text style={{textAlign: 'center'}}>Error al cargar la información</Text>
                ) : (
                    <FlatList
                        data={data}
                        renderItem={({item}) => <MultasCard item={item}/>}
                        showsVerticalScrollIndicator={false}
                        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
                        ListEmptyComponent={() => (
                            <Text style={{textAlign: 'center'}}>No se encontraron multas a tu nombre, sigue asi!</Text>
                        )}
                    />
                )}
            </View>
        </SafeAreaView>
    );
};

export default Multas;
