import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Theme from '../Constants/Theme';
//screens
import Login from '../Screens/Login';
import Register from '../Screens/Register';
import Dashboard from './Dashboeard.Navigation';
import RegisterSecondFase from '../Screens/RegisterSecondFase';
const Stack = createNativeStackNavigator();

export default function Route() {




    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{
                title: 'Registre-se',
                headerStyle: {
                    backgroundColor: Theme.COLORS.DEFAULT
                },
                headerTintColor: '#fff',
            }} />
            <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
            <Stack.Screen name="RegisterSecondFase" component={RegisterSecondFase} options={{
                title: 'Registre-se',
                headerStyle: {
                    backgroundColor: Theme.COLORS.DEFAULT
                },
                headerTintColor: '#fff',
            }}
            />
        </Stack.Navigator>
    );
}