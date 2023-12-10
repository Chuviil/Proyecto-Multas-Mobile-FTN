import { useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {URL} from '../constants';

const useAuthentication = () => {
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadStoredData = async () => {
            try {
                const storedToken = await AsyncStorage.getItem('token');
                const storedUser = await AsyncStorage.getItem('user');

                if (storedToken && storedUser) {
                    setToken(storedToken);
                    setUser(JSON.parse(storedUser));
                }
            } catch (err) {
                console.error('Error loading data from AsyncStorage:', err);
            } finally {
                setLoading(false);
            }
        };

        loadStoredData();
    }, []);

    const login = async (idBanner, contrasenia) => {
        setLoading(true);

        try {
            const response = await axios.post(
                `${URL}/api/Ayudante/login`,
                {
                    idBanner,
                    contrasenia,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            setToken(response.data.token);
            setUser(response.data.user);

            await AsyncStorage.setItem('token', response.data.token);
            await AsyncStorage.setItem('user', JSON.stringify(response.data.user));
        } catch (err) {
            throw new Error("Id Banner o contraseña incorrectos");
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        setToken(null);
        setUser(null);

        await AsyncStorage.removeItem('token');
        await AsyncStorage.removeItem('user');
    };

    return {
        token,
        user,
        loading,
        login,
        logout,
    };
};

export default useAuthentication;
