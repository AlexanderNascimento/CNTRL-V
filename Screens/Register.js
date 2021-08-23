import React,{ useState,useEffect } from 'react';
import { View, StyleSheet,SafeAreaView, KeyboardAvoidingView,
        TouchableOpacity, TextInput, Text, TouchableWithoutFeedback  } from 'react-native';
import Statusbar from '../Constants/StatusBar';
import DatePicker from 'react-native-datepicker';
import Theme from '../Constants/Theme';
import {Ionicons} from '@expo/vector-icons';
import { Formik ,Field,Form } from 'formik';
import * as yup from 'yup';

export default function Register({ navigation}){
    const [date,setDate]=useState('');
    const [gen,SetGen]=useState();
    
    return(
        <SafeAreaView style={{flex:1}}>
              <Statusbar/>


              <Formik
                    initialValues={{name:'',sobrenome:'',email:'', password:'',idSus:'',date:'',gen:''}}
                    onSubmit={(values,actions)=>{
                       alert(JSON.stringify(values,null,2));
                        //actions.resetForm();
                        
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
                            date={date}
                            mode="date"
                            name="date"
                            placeholder="Data de nascimento"
                            format="DD-MM-YYYY"
                            androidMode="spinner"
                            customStyles={customStyleDatePicker}
                            onChangeText={FormikProps.handleChange('date')}
                            onDateChange={date=> {setDate(date); FormikProps.setFieldValue('date',date)}}
                        />
                </View>
         
                <View style={styles.FormRadio}>
                    <Text style={styles.FormRadioTitle}>Gênero</Text>
                    <View style={styles.FormSexo}>

                        <TouchableWithoutFeedback onPress={setOn}>
                        
                            <Ionicons name="female" size={35} color={Theme.COLORS.MUTED} />
                        </TouchableWithoutFeedback>
                        
                        <TouchableWithoutFeedback onPress={setOn} >
                        
                            <Ionicons name="male" size={35} color={Theme.COLORS.MUTED} />
                        </TouchableWithoutFeedback>
                        
                    </View>
                  
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

        function setOn(){

        }

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