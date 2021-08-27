import React,{ useState } from 'react';
import { View, StyleSheet,SafeAreaView, KeyboardAvoidingView,
        TouchableOpacity, TextInput, Text, TouchableWithoutFeedback  } from 'react-native';
import Statusbar from '../Constants/StatusBar';
import DatePicker from 'react-native-datepicker';
import Theme from '../Constants/Theme';
import {Ionicons} from '@expo/vector-icons';
import { Formik } from 'formik';
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedProps,
    interpolateColor,
  } from 'react-native-reanimated';
import * as yup from 'yup';

export default function Register({ navigation}){
    const [date,setDate]=useState('');
    const [gen,SetGen]=useState();
    
    const colorMale = useSharedValue(1);
    const sizeMale=useSharedValue(50);


    const colorFemale = useSharedValue(1);
    const sizeFemale=useSharedValue(50);

    const AnimatedIcon= Animated.createAnimatedComponent(Ionicons);

const colorsMale = [Theme.COLORS.DEFAULT, Theme.COLORS.MUTED];
const colorsFemale = [Theme.COLORS.SECONDARY,Theme.COLORS.MUTED];
const config = {
    duration: 500,
  };
  const StyleAnimateIconMale= useAnimatedProps(()=>{
    return{
      fontSize: withTiming(sizeMale.value, config),
      color: interpolateColor(colorMale.value,[0,1],colorsMale )
    }
  });
  const StyleAnimateIconFemale= useAnimatedProps(()=>{
    return{
      fontSize: withTiming(sizeFemale.value, config),
      color: interpolateColor(colorFemale.value,[0,1],colorsFemale )
    }
    
  });

  function Female(){
    sizeMale.value=40;
    colorMale.value=withTiming(1, config);
    sizeFemale.value=60;
    colorFemale.value=withTiming(0, config);
  }
  function Male(){
    sizeFemale.value=40;
    colorFemale.value=withTiming(1, config);
    sizeMale.value =60;
    colorMale.value=withTiming(0, config);
  }
    return(
        <SafeAreaView style={{flex:1}}>
              <Statusbar/>


              <Formik
                    initialValues={{name:'',sobrenome:'',email:'', password:'',idSus:'',date:'',gen:''}}
                    onSubmit={(values,actions)=>{
                       alert(JSON.stringify(values,null,2));
                        actions.resetForm();
                        navigation.navigate('RegisterSecondFase');
                    } }
                >
                    {(FormikProps) => (
                    

            <KeyboardAvoidingView style={styles.Form}>
                <View  style={styles.FormInputsContainer}>
                    <TextInput placeholder="Nome" style={styles.FormInputs} 
                         onChangeText={FormikProps.handleChange('sobrenome')} 
                         onBlur={FormikProps.handleBlur('sobrenome')} 
                         name="sobrenome"
                         value={FormikProps.values.sobrenome}
                    />
                </View>
                <View  style={styles.FormInputsContainer}>
                    <TextInput placeholder="Sobrenome" style={styles.FormInputs}
                    onChangeText={FormikProps.handleChange('name')} 
                      onBlur={FormikProps.handleBlur('name')} 
                      name="name"
                      value={FormikProps.values.name}/>
                </View>
                <View  style={styles.FormInputsContainer}>
                    <TextInput placeholder="ID SUS" style={styles.FormInputs}
                      onChangeText={FormikProps.handleChange('idSus')} 
                      onBlur={FormikProps.handleBlur('idSus')} 
                      name="idSus"
                      value={FormikProps.values.idSus}/>
                </View>
                <View  style={styles.FormInputsContainer}>
                    <TextInput placeholder="Email" style={styles.FormInputs} 
                     onChangeText={FormikProps.handleChange('email')} 
                     onBlur={FormikProps.handleBlur('email')} 
                     keyboardType="email-address"
                     name="email"
                     value={FormikProps.values.email}/>
                </View>
                <View  style={styles.FormInputsContainer}>
                    <TextInput placeholder="Senha" style={styles.FormInputs}
                        secureTextEntry={true} 
                        onChangeText={FormikProps.handleChange('password')}
                        onBlur={FormikProps.handleBlur('password')}
                        name="password"
                        value={FormikProps.values.password}/>
                </View>
                <View style={styles.Date}>
                        <DatePicker
                            style={{width:'90%'}}
                            date={FormikProps.values.date}
                            mode="date"
                            name="date"
                            placeholder="Data de nascimento"
                            format="DD-MM-YYYY"
                            customStyles={customStyleDatePicker}
                            onChangeText={FormikProps.handleChange('date')}
                            onDateChange={date=> {FormikProps.setFieldValue('date',date)}}
                        />
                </View>
         
                <View style={styles.FormRadio}>
                    <Text style={styles.FormRadioTitle}>Gênero</Text>

                {/*  mexer aqui td */}

                                <View
                                    style={styles.FormSexo}>
                                    <TouchableWithoutFeedback onPress={()=>{ Male();
                                     const gen ='male';
                                     FormikProps.setFieldValue('gen',gen)
                                    }}>
                            <AnimatedIcon name="male" style={StyleAnimateIconMale}/>
                        </TouchableWithoutFeedback>
                        
                        <TouchableWithoutFeedback  onPress={()=>{ Female();
                        const gen='female';
                         FormikProps.setFieldValue('gen',gen) }}>
                            <AnimatedIcon name="female" style={StyleAnimateIconFemale}/>
                        </TouchableWithoutFeedback>

                    </View>
                  {/*  mexer aqui td */}
                </View>
                
                <View style={styles.FormDate}>

                </View>
                <TouchableOpacity style={styles.FormButton} onPress={FormikProps.handleSubmit}>
                    <Text style={styles.FormButtonText}>Proximo Passo</Text>
                </TouchableOpacity>
                
             
            </KeyboardAvoidingView>
               )}
               </Formik>
        </SafeAreaView>
    );



 
}
const styles=StyleSheet.create({
    Form:{
        flex:1,
       justifyContent:'center',
       alignContent:'center',
    },
    FormInputsContainer:{
        borderRadius:60/2,
        borderWidth:1,
        borderColor:Theme.COLORS.DEFAULT,
        backgroundColor:Theme.COLORS.WHITE,
        paddingBottom:3,
        paddingHorizontal:5,
        marginBottom:15,
        justifyContent:'center',
        alignContent:'center',
        marginHorizontal:30,
    },
    FormInputs:{
        height:30,
        marginHorizontal:10,
        color:Theme.COLORS.DEFAULT,
        backgroundColor:Theme.COLORS.WHITE
    },
    Date:{
        alignItems:'center',
        marginBottom:15,
    },
    FormRadioTitle:{
        textAlign:'center',
    },
    FormSexo:{
        flexDirection:'row',
        justifyContent:'space-around',
        maxHeight:100,
        minHeight:80,
    },
    FormButton:{
        marginTop:15,
        backgroundColor:Theme.COLORS.DEFAULT,
        borderRadius:60/2,
        alignSelf:'center',
        width:'40%',
        padding:15,
    },
    FormButtonText:{
        textAlign:'center',
        color:Theme.COLORS.WHITE,
    }

});

const customStyleDatePicker={
    dateText:{
        color:Theme.COLORS.DEFAULT,
    },
  dateInput: {
    marginLeft: 36,
    backgroundColor:Theme.COLORS.WHITE,
    borderRadius:60/2,
    borderColor:Theme.COLORS.DEFAULT,
  }
}