import React,{useState} from 'react';
import { SafeAreaView, Dimensions, StyleSheet, View, TouchableOpacity, FlatList,TextInput, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Theme from '../Constants/Theme';
import Statusbar from '../Constants/StatusBar';

import Vacinas from '../Constants/tests/Vacinas';

const vacinas=Vacinas;
const {width, height}=Dimensions.get('window');
export default function Vaccine(){
   
const [vacines,setVacines]=useState(Vacinas);
    return(
        <SafeAreaView style={{backgroundColor:Theme.COLORS.WHITE,flex:1,}}>
            <Statusbar/>
            <View  style={styles.Header}>
                <Text style={styles.HeaderText}>Vacinas</Text>
                <View style={styles.HeaderSearch}>
                    <TextInput placeholder="Escreva o nome da vacina" style={styles.HeaderSearchbar} onChangeText={text =>{SearchVacine(text)}}/>
                    <AntDesign name="search1" style={styles.HeaderIcon} size={14} color={Theme.COLORS.DEFAULT} />
                   
                </View>
            </View>
            <View style={styles.list}>
            
                    <FlatList 
                        data={vacines}
                        keyExtractor={item=> item.id }
                        renderItem={({item})=> <ItemList item={item}/>}
                       ItemSeparatorComponent={Separator}
                       showsHorizontalScrollIndicator={false}
                       ListFooterComponent={FooterList}
                    />
            </View>
        </SafeAreaView>

    );
function SearchVacine(textToSearch){
        if(textToSearch.length > 0){
           setVacines(vacinas.filter(i=>(
               i.nome.toLowerCase().includes(textToSearch.toLowerCase())
           )));
        }else{
            setVacines(vacinas);
        }
     }
}

const Separator=()=>{
   return( <View style={{marginVertical:5}}/>);
}

const FooterList=()=>{
  return(  <View style={{height:5}}/>);
}
const ItemList=({item})=>{
    return(
    <View style={styles.itensList}>
        <View style={styles.HeaderList}>
            <View style={styles.FooterList}>
                <MaterialIcons name="class" size={50} color={item.color} />
                <View style={{alignSelf:'flex-start'}}>
                    <Text style={styles.FooterListTitle}>{item.nome}</Text>
                    <Text style={styles.FooterListText}>dose: {item.doses}</Text>
                </View>
        </View>
            <TouchableOpacity style={styles.HeaderButton}>
                <AntDesign name="arrowright" size={14} color={Theme.COLORS.WHITE} />
            </TouchableOpacity>
        </View>
       
    </View>
    );
}

const styles=StyleSheet.create({
    Header:{
       flex:0.5,
       justifyContent:'center',
       alignItems: 'center',
    },
    HeaderText:{
        color: Theme.COLORS.DEFAULT,
        fontSize:50,
        fontWeight:'bold',
    },
    HeaderSearchbar:{
        flex:1,
        marginHorizontal:15,
    },
    HeaderSearch:{
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius:60/2,
        borderColor: Theme.COLORS.DEFAULT,
        paddingBottom: 5,
        marginHorizontal:20,
        marginTop:15,
        backgroundColor:Theme.COLORS.WHITE,
    },
    HeaderIcon:{
        marginRight:10,
        marginTop:5,
    },
    
    list:{
        flex:1,
        elevation:5,
         backgroundColor:Theme.COLORS.DEFAULT,
       borderTopEndRadius:50,
       paddingTop:30,
       paddingHorizontal:15,
       maxHeight:height,
       
     },
    itensList:{
        backgroundColor:Theme.COLORS.WHITE,
        borderTopRightRadius:20,
        borderBottomLeftRadius:30,
        padding:10,
        elevation:5,
       
    },
    HeaderList:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    HeaderButton:{
            alignSelf:'flex-end',
            backgroundColor:Theme.COLORS.DEFAULT,
            borderRadius:30,
            padding:10,
    },
    FooterList:{
        
       flexDirection:'row',
       alignItems:'baseline'
    },
   FooterListTitle:{
        fontSize:20,
        color:Theme.COLORS.DEFAULT,
        fontWeight:'bold',
        marginHorizontal:10
   },
   FooterListText:{
       color:Theme.COLORS.MUTED,
       marginHorizontal:10,
   }
});