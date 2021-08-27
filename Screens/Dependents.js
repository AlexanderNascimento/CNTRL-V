import React,{useState} from 'react';
import { SafeAreaView, StyleSheet,View, Text, FlatList , TouchableOpacity, Image, TouchableWithoutFeedback, Dimensions, Modal, TextInput} from 'react-native';
import Statusbar from '../Constants/StatusBar';
import dependentes from '../Constants/tests/dependentes';
import {AntDesign, MaterialIcons,FontAwesome }  from '@expo/vector-icons';
import Theme from '../Constants/Theme';
import Images from '../Constants/Images';
import Agenda from './Components/Agenda';
import VaccinationCardContent from './Components/VaccineCardContent';
const test=dependentes;
const { width, height } = Dimensions.get("screen");

export default function Dependents (){
   const [valor,setValor]=useState('');
   const [visible, setVisible]=useState(false);
    const [historicModal,setHistoricModal]=useState(false);
    const [AgendaModal,setAgendaModal]=useState(false);
    const [dell,setDell]=useState(false);
    const [help,sethelp]=useState();
    return(
        <SafeAreaView style={styles.Container}>
            <Statusbar/>
            {/* Modal */}
            <Modal
                     animationType="slide"
                     transparent={true}
                     visible={historicModal}
                     onRequestClose={() => {
                        setHistoricModal(!historicModal);
                     }}
                    >
                             <View style={styles.Modal}>
                                <View style={styles.ModalHeader}> 
                                        <TouchableWithoutFeedback onPress={()=>{setHistoricModal(false)}} style={styles.ModalHeaderButton}>
                                            <AntDesign name="close" size={25} color={Theme.COLORS.DEFAULT} />
                                        </TouchableWithoutFeedback>     
                                </View>
                                <Agenda/>
                             </View>
                     </Modal>


                     <Modal
                     animationType="slide"
                     transparent={true}
                     visible={AgendaModal}
                     onRequestClose={() => {
                        setAgendaModal(!AgendaModal);
                     }}
                    >
                        <View style={styles.Modal}>
                                <View style={styles.ModalHeader}> 
                                        <TouchableWithoutFeedback onPress={()=>{setAgendaModal(false)}} style={styles.ModalHeaderButton}>
                                            <AntDesign name="close" size={25} color={Theme.COLORS.SECONDARY} />
                                        </TouchableWithoutFeedback>
                                </View>
                                <VaccinationCardContent />
                             </View>
                     </Modal>
                     {/* Modal dell item */}
                     <Modal
                     animationType="slide"
                     transparent={true}
                     visible={dell}
                     onRequestClose={() => {
                        setDell(!dell);
                     }}
                    >
                        <View style={styles.SmallModal}>
                                <View style={styles.ModalHeader}> 
                                        <TouchableWithoutFeedback onPress={()=>{setDell(false)}} style={styles.ModalHeaderButton}>
                                            <AntDesign name="close" size={25} color={Theme.COLORS.SECONDARY} />
                                        </TouchableWithoutFeedback>
                                </View>
                                    <View styles={{marginVertical:30}}>
                                            <Text style={{textAlign:'center'}}>tem certeza que deseja deletar </Text>
                                            <Text style={{textAlign:'center',marginBottom:20}}> {help} ?</Text>
                                    </View>
                                    
                                    <TouchableOpacity style={styles.ModalButton}> 
                                    <Text  style={styles.ModalButtonText}>Deletar</Text>
                                </TouchableOpacity>
                             </View>
                     </Modal>
             {/* Modal add dependente */}
                <Modal
                     animationType="slide"
                     transparent={true}
                     visible={visible}
                     onRequestClose={() => {
                       setVisible(!visible);
                     }}
                    >
                           <View style={styles.SmallModal}>
                               <View style={styles.ModalHeader}> 
                                    <TouchableWithoutFeedback onPress={()=>{setVisible(false)}} style={styles.ModalHeaderButton}>
                                        <AntDesign name="close" size={25} color={Theme.COLORS.SECONDARY} />
                                    </TouchableWithoutFeedback>
                            
                               </View>
                               <View style={styles.ModalTittle}>
                                    <Text style={styles.ModalTittleText}>Adicionar Dependente</Text>
                               </View>
                               <View style={styles.ModalInputContainer}>
                                   <TextInput style={styles.ModalInput} placeholder='ID do Sus do dependente'/>
                                   <AntDesign name="adduser"size={25} color={Theme.COLORS.DEFAULT} style={styles.ModalIputIcon} />
                               </View>
                                <TouchableOpacity style={styles.ModalButton}> 
                                    <Text  style={styles.ModalButtonText}>Adicionar Dependente</Text>
                                </TouchableOpacity>
                           </View>
                </Modal>
                         {/* Header da paggina */}
                <View style={styles.Header}>
                    <View style={styles.HeaderImage}>
                    <Image source={Images.Doctor} style={{height:200, }} />
                    </View>
                    <TouchableOpacity style={styles.HeaderButton} onPress={()=>setVisible(true)}>
                        <AntDesign name="adduser"size={15} color={Theme.COLORS.WHITE} style={styles.HeaderButtonIcon} />
                    </TouchableOpacity>
                </View>
                <View style={{marginTop:25}}>
                      {/* List */}
                <FlatList 

                        data={test}
                        renderItem={({item,index})=>(
                            <List item={item} index={index} />
                        )}
                         keyExtractor={item => item.id}
                        ItemSeparatorComponent={ Separator}
                        ListFooterComponent={FooterList}
                    />
                
                </View>
        </SafeAreaView>
    ); 
                            function FooterList(){
                                return(<View style={{height:90}}/>);
                            }
        function List({item,index}){
            
            return(
            <View style={styles.ListItem}>
                <View style={styles.ListItemHeader}>
                    <View style={styles.ListItemHeaderTextContainer}>
                        <Text style={styles.ListItemHeaderTextName}>{item.nome}</Text>
                        <Text style={styles.ListItemHeaderTextID}>{item.idSus}</Text>
                    </View>
                    <TouchableWithoutFeedback onPress={()=>{
                           if(item.id!=valor){
                                return setValor(item.id);
                           }else{
                                return setValor('');
                           }
                    }} style={{backgroundColor:'black'}}>
                    <MaterialIcons name="keyboard-arrow-right"size={25} color={Theme.COLORS.DEFAULT} />
                    </TouchableWithoutFeedback>
                </View>
              
                        {valor===item.id&&
                                <View style={styles.ListFoot}>
                                    {/*  */}
                                    <TouchableWithoutFeedback onPress={()=>setHistoricModal(true)}>
                                        <FontAwesome name="book"size={15} color={Theme.COLORS.DEFAULT} />
                                    </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback onPress={()=>setAgendaModal(true)}>
                                    <AntDesign name="idcard"size={30} color={Theme.COLORS.DEFAULT} />
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback onPress={()=>{
                                    setDell(true);
                                    sethelp(item.nome);
                                }}>
                                    <AntDesign name="delete"size={15} color={Theme.COLORS.SECONDARY} />
                                </TouchableWithoutFeedback>
                                
                            </View>  }
                            
               
            </View>);
        }
        function Separator(){
                return(<View style={{flex:1, borderBottomWidth:StyleSheet.hairlineWidth,borderBottomColor:Theme.COLORS.MUTED}}></View>);
        }

}
const styles=StyleSheet.create({
    Container:{
        flex:1,
        justifyContent:'center',
       
        maxHeight:height,
        maxWidth:width,
    },
    Header:{
        
        alignItems:'center',
        justifyContent:'center',
    },
    HeaderImage:{
        height:200,
        backgroundColor:'black',
    },
    HeaderButton:{
        borderRadius:50,
        backgroundColor:Theme.COLORS.DEFAULT,
        padding:20,
        alignItems:'center',
        marginTop:'-20%'
    },
    ListItem:{
       
        justifyContent:'center',
        marginHorizontal:15,
       
    },
    ListItemHeader:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'baseline'
    },
    ListItemHeaderTextContainer:{
        flexDirection:'column',
        justifyContent:'space-between',
        marginVertical:15,
    },
    ListItemHeaderTextName:{
        color:Theme.COLORS.DEFAULT,
        fontSize:15,
        fontWeight:'bold',
    },
    ListItemHeaderTextID:{
        color:Theme.COLORS.MUTED,
    },
    ListFoot:{
        flexDirection:'row',
        justifyContent:'space-around',
    },
    Modal:{
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        justifyContent:'center',
            marginBottom:20,
            height:height/1.2,
            shadowOffset: {
                width: 0,
                height: 2
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5
    },
    SmallModal:{
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        justifyContent:'center',
            top:height/5,
            height:height/3,
            shadowOffset: {
                width: 0,
                height: 2
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5
    },
    ModalInputContainer:{
            borderColor:Theme.COLORS.DEFAULT,
            borderWidth:1,
            borderRadius:30,
            marginVertical:15,
            flexDirection:'row',
            alignItems:'baseline',
            justifyContent:'space-between'
        },
        ModalHeader:{
            alignItems:'flex-end',
            top:-20,
            right:-20,
        },
        ModalInput:{
            marginLeft:10,
            flex:1
        },
        ModalIputIcon:{
            marginRight:10,
        },
        ModalButton:{
            backgroundColor:Theme.COLORS.DEFAULT,
            alignItems:'center',
            borderRadius:30,
            paddingVertical:5,
           

        },
        ModalButtonText:{
            color:Theme.COLORS.WHITE
        },
        ModalTittle:{
            alignItems:'center'
        },
        ModalTittleText:{
            color:Theme.COLORS.DEFAULT,
            fontSize:25,
            fontWeight:'bold'
        }
});