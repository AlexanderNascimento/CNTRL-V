import React, { useState } from 'react';
import {
    View, Text, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, StyleSheet, FlatList
    , Dimensions
} from 'react-native';
import Statusbar from '../Constants/StatusBar';
import Checkbox from 'expo-checkbox';
import Theme from '../Constants/Theme';
import DatePicker from 'react-native-datepicker';
import { MaterialIcons } from '@expo/vector-icons';


import Vacinas from '../Constants/tests/Vacinas';

const { width, height } = Dimensions.get('screen');
export default function RegisterSecondFase({ route,navigation}) {
    const {id}=route.params;
    const [list, setList] = useState(Vacinas);
    const [date, setDate] = useState('');

    function Separator() {
        return (
            <View style={{ flex: 1, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: Theme.COLORS.MUTED }}></View>);
    }


    function onValueChangeValue(itemSelected) {
        const newData = list.map(item => {
            if (item.id == itemSelected.id) {
                return {
                    ...item,
                    selected: !item.selected
                }
            }
            return {
                ...item,
                selected: item.selected
            }
        })
        setList(newData);
    }
    function onDateChangeValue(itemSelected, date) {
        const newData = list.map(item => {
            if (item.id == itemSelected.id) {
                if (item.selected) {
                    return {
                        ...item,
                        data: date,
                    }

                }

            }
            return {
                ...item,
                data: item.data
            }

        });
        setList(newData);
    }
  async   function RegisterVaccines() {
    
    const data= await fetch('http://192.168.0.101:3000/registerVacines', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            dados:list.filter(item=> item.selected===true),
            id:id
          })
    });
    alert('teasdasdad');
        const json= await data.json();
       
        if(json.aproved){
            navigation.popToTop();
        }else{
            alert('erro')
        }
        
    }
    function Lista({ item, index }) {

        return (
            <View style={styles.ListItens}>
                <View style={styles.ListChekbox}>
                    <Checkbox
                        style={styles.checkbox}
                        color={Theme.COLORS.DEFAULT}
                        value={item.selected}
                        onValueChange={
                            () => onValueChangeValue(item, index)
                        } />
                    <Text>{item.name}</Text>
                </View>

                {item.selected &&
                    <View style={styles.ListDateContainer}>
                        <DatePicker
                            date={item.data}
                            mode="date"
                            placeholder="Data"
                            placeholderTextColor={Theme.COLORS.DEFAULT}
                            format="DD-MM-YYYY"
                            showIcon={false}

                            customStyles={datePickerStayle}
                            onDateChange={(date) => { onDateChangeValue(item, date) }}
                        />
                        <MaterialIcons name="date-range" size={30} color={Theme.COLORS.DEFAULT} />
                    </View>
                }

            </View>
        );
    }


    return (



        <SafeAreaView style={styles.Container}>
            <Statusbar />
            <KeyboardAvoidingView>
                <View style={styles.Header}>
                    <Text style={styles.HeaderText}>Marque as vacinas que já tomou </Text>
                </View>
                <View style={styles.Footer}>
                    <FlatList
                        data={list}
                        renderItem={Lista}
                        keyExtractor={item => item.id}
                        ItemSeparatorComponent={Separator}
                    />
                </View>
                <View style={styles.FooterButton}>
                    <TouchableOpacity style={styles.Button} onPress={() =>{
                        
                        RegisterVaccines()

                    }
                        }>
                        <Text style={styles.ButtonText}>Registrar-se</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const datePickerStayle = {
    dateText: {
        color: Theme.COLORS.DEFAULT,
    },
    dateInput: {
        flex: 1,
        marginHorizontal: 10,
        backgroundColor: Theme.COLORS.WHITE,
        borderColor: Theme.COLORS.TRANSPARENT,
    }
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    checkbox: {
        color: Theme.COLORS.DEFAULT,
        marginHorizontal: 5,
    },

    ListItens: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width:width,
       
        marginTop: 15,
    },
    ListDateContainer: {
        flexDirection: 'row',
        backgroundColor: Theme.COLORS.WHITE,
        borderColor: Theme.COLORS.DEFAULT,
        borderWidth: 1,
        borderRadius: 60 / 2,
        marginVertical: 15,

        paddingVertical: 5,
        paddingHorizontal: 15,
    },
    ListChekbox: {
        flexDirection: 'row',
        alignItems: 'baseline',
        paddingVertical: 20,

    },
    Button: {
        backgroundColor: Theme.COLORS.DEFAULT,
        borderRadius: 30,
        paddingVertical: 10,
        marginHorizontal: 50,
        marginVertical: 15,

    },
    ButtonText: {
        color: Theme.COLORS.WHITE,
        textAlign: 'center',
    },
    HeaderText: {
        fontSize: 30,
        color: Theme.COLORS.DEFAULT,
        fontWeight: 'bold',
        textAlign: 'center',


    },
    Header: {
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Theme.COLORS.WHITE,
        elevation: 5,
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30,
        zIndex: 5,
    },
    Footer: {

        flex: 1
    },
    FooterButton: {

        elevation: 1
    }

});