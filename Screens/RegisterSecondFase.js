import React,{useState} from 'react';
import { View, Text,TouchableOpacity,SafeAreaView,KeyboardAvoidingView, StyleSheet, FlatList } from 'react-native';
import Statusbar from '../Constants/StatusBar';
import Checkbox from 'expo-checkbox';
import Theme from '../Constants/Theme';
import RegisterVacinnes from '../Constants/tests/RegisterVacinnes';
import DatePicker from 'react-native-datepicker';
import { MaterialIcons } from '@expo/vector-icons';
import { Formik } from 'formik';

export default function RegisterSecondFase({navigation}){
    const Listi=RegisterVacinnes;
    const [isChecked, setChecked] = useState(false);
    const [date,setDate]=useState('');

        function Separator(){
            return(
            <View style={{flex:1, borderBottomWidth:StyleSheet.hairlineWidth,borderBottomColor:Theme.COLORS.MUTED}}></View>);
        }

        function List({item}){
            return(
                <View style={styles.ListItens}>
                    <View style={styles.ListChekbox}>
                        <Checkbox style={styles.checkbox} color={Theme.COLORS.DEFAULT} value={isChecked} onValueChange={setChecked} />
                        <Text>{item.nome}</Text>
                    </View>
            
            { isChecked && 
            <View style={styles.ListDateContainer}>
                <DatePicker
                                    date={date}
                                    mode="date"
                                    placeholder="Data de nascimento"
                                    placeholderTextColor={Theme.COLORS.DEFAULT}
                                    format="DD-MM-YYYY"
                                    showIcon={false}
                                    androidMode="spinner"
                                    customStyles={datePickerStayle}
                                    onDateChange={(date) => {setDate(date)}}
                                />
                                <MaterialIcons name="date-range"  size={30} color={Theme.COLORS.DEFAULT}/>
                            </View>
                            }
            </View>
            );
        }


    return(
        <SafeAreaView style={styles.Container}>
            <Statusbar/>
            <KeyboardAvoidingView>
                <Text style={styles.HeaderText}>Marque as vacinas que já tomou </Text>
                <FlatList 
                    data={Listi}
                    renderItem={ ({item})=> (
                        <List item={item}/>
                    )}
                    keyExtractor={item=> item.id}
                    ItemSeparatorComponent={ Separator}
                />
                        <TouchableOpacity style={styles.Button} onPress={()=>{navigation.popToTop()}}>
                            <Text style={styles.ButtonText}>Registrar-se</Text>
                        </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const datePickerStayle={
    dateText:{
        color:Theme.COLORS.DEFAULT,
    },
dateInput: {
    flex:1,
    marginHorizontal:10,
    backgroundColor:Theme.COLORS.WHITE,
    borderColor:Theme.COLORS.TRANSPARENT,
}
}
const styles=StyleSheet.create({
    Container:{
        flex:1,
        justifyContent:'center',
    },
    checkbox:{
        color:Theme.COLORS.DEFAULT,
        marginHorizontal:5,
    },
    ListItens:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:10,
        flex: 1,
       marginTop:15,
    },
    ListDateContainer:{
        flexDirection:'row',
        backgroundColor:Theme.COLORS.WHITE,
        borderColor:Theme.COLORS.DEFAULT,
        borderWidth:1,
        borderRadius:60/2,
        paddingBottom:5,
       marginBottom:15,
        paddingTop:5,
        paddingHorizontal:15,
    },
    ListChekbox:{
        flexDirection:'row',
        alignItems:'baseline',
        paddingVertical:20,
        
    },
    Button:{
        backgroundColor:Theme.COLORS.DEFAULT,
         borderRadius:30,
         paddingVertical:10,
         marginTop:20,
         marginHorizontal:50,
    },
    ButtonText:{
        color:Theme.COLORS.WHITE,
        textAlign:'center',
    },
    HeaderText:{
            fontSize:30,
            textAlign:'center',
            marginBottom:15,
            color:Theme.COLORS.DEFAULT,
            fontWeight:'bold'

    }

});