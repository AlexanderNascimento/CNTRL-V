import React, { useState,useEffect } from 'react';
import { StyleSheet, Image, KeyboardAvoidingView, TextInput, View, TouchableOpacity, TouchableWithoutFeedback, Text, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Theme from '../Constants/Theme';
import { StatusBar } from 'expo-status-bar';
import Images from '../Constants/Images';
import { Formik } from 'formik';
import * as yup from 'yup';
export default function Login({ navigation }) {
    const [login, setLogin] = useState(false);

    useEffect(() => {
        async function logIn(){
            let response = await AsyncStorage.getItem('userData');
            let json= await JSON.parse(response);
            if(json !== null){
                setLogin(false);
                navigation.navigate('Dashboard');
            }else{
                setLogin(false);
            }
        }
        setLogin(true);
        logIn();
        
    },[])

    async function LogIn(values,actions){
        const data= await fetch('http://192.168.0.102:3000/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               email:values.email,
               password:values.password,
              })
        });
        const user=await  data.json();
      
        if(user.aproved){
            await AsyncStorage.setItem('userData',JSON.stringify(user.mensage))
            actions.resetForm();
            setLogin(false)
            navigation.navigate('Dashboard');
        }else{
            setLogin(false)
        }
    }

    return (

        <KeyboardAvoidingView style={styles.container}>
            <StatusBar />
            {login &&
                <View style={styles.Modal}>
                    <ActivityIndicator size="large" color={Theme.COLORS.DEFAULT} />
                </View>
            }
            <View style={styles.Logo}>
                <Image source={Images.Logo} />
            </View>

            <Formik
                initialValues={{ email: '', password: '', }}
                validationSchema={loginValidations}
                onSubmit={(values, actions) => {

                    setLogin(true);
                    LogIn(values,actions);
                }}
            >
                {(FormikProps) => (
                    <>
                      
                        <View style={styles.InputContainer}>
                            <TextInput placeholder="Email" style={styles.Input}
                                onChangeText={FormikProps.handleChange('email')}
                                onBlur={FormikProps.handleBlur('email')}
                                keyboardType="email-address"
                                name="email"
                                value={FormikProps.values.email}

                            />
                        </View>
                       
                        <View style={styles.InputContainer}>

                            <TextInput placeholder="password" secureTextEntry={true}
                                style={styles.Input}
                                onChangeText={FormikProps.handleChange('password')}
                                onBlur={FormikProps.handleBlur('password')}
                                name="password"
                                value={FormikProps.values.password} />
                        </View>
                        <TouchableOpacity onPress={FormikProps.handleSubmit} style={styles.Login}>
                            <Text style={styles.LoginText}>Entrar</Text>
                        </TouchableOpacity>
                    </>
                )}
            </Formik>
            <View style={styles.Foot}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Register')} style={styles.FootButton}>
                    <Text style={styles.FootButtonText}>Registre-se</Text>
                </TouchableWithoutFeedback>

            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: '10%',
        justifyContent: 'center',
        alignContent: 'center',
    },
    InputContainer: {
        borderRadius: 60 / 2,
        borderWidth: 1,
        borderColor: Theme.COLORS.DEFAULT,
        backgroundColor: Theme.COLORS.WHITE,
        paddingBottom: 3,
        paddingHorizontal: 5,
        marginBottom: 15,
        justifyContent: 'center',
        alignContent: 'center',
    },
    Input: {
        height: 30,
        marginHorizontal: 10,
        color: Theme.COLORS.DEFAULT,
        backgroundColor: Theme.COLORS.WHITE
    },
    Logo: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',

    },
    Login: {
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        backgroundColor: Theme.COLORS.DEFAULT,
        paddingVertical: 10,
        borderRadius: 60 / 2,
        width: '50%',
        marginBottom: 5,
    },
    LoginText: {
        textAlign: 'center',
        color: Theme.COLORS.WHITE,
        fontSize: 15,
    },
    Foot: {
        marginTop: 15,
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        width: '40%',
    },
    FootButton: {


    },
    FootButtonText: {
        textAlign: 'center',
        color: Theme.COLORS.MUTED,
    },
    Error: {
        color: Theme.COLORS.ERROR,
        alignSelf: 'center',
    },
    Modal: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        position: 'absolute',
        height: 100,
        width: 100,
        elevation: 3,
        zIndex: 5,
        backgroundColor: Theme.COLORS.WHITE,
        borderRadius: 20,
    }

});

const loginValidations = yup.object().shape({
    email: yup.string().email().required(),
    password: yup
        .string()
        .min(8)
        .required(),
});