import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView,DrawerItemList,DrawerItem }   from '@react-navigation/drawer';
import {  Dimensions,Image,StyleSheet,TouchableOpacity,View,Text,useWindowDimensions } from "react-native";
import Theme from '../Constants/Theme';
import Images from '../Constants/Images';
import { AntDesign } from '@expo/vector-icons';
//screens
import Map from '../Screens/Map';
import Historic from '../Screens/Historic';
import VaccinationCard from '../Screens/VaccinationCard';
import Vaccine from '../Screens/Vaccine';
import Dependents from '../Screens/Dependents';


const Drawer = createDrawerNavigator();
const { width, height } = Dimensions.get("screen");

const Options={
  headerShown:true,
  headerStyle:{
   backgroundColor:Theme.COLORS.DEFAULT,
  },
  headerTintColor: '#fff',};

function CustomDrawerContent({ ...rest }){
 return ( 
  <DrawerContentScrollView >

    <TouchableOpacity onPress={()=>rest.navigation.closeDrawer()}  style={{ width: 40, height: 40, backgroundColor:Theme.COLORS.TRANSPARENT,margin:'5%' }} >
        <AntDesign name="menufold" size={25} color={Theme.COLORS.DEFAULT} />
    </TouchableOpacity>
      <View style={styles.header}>
        <View style={styles.logo}>
           <Image style={{width:100, height:100}} source={Images.LogoNavbar}/>
        </View>
       
        <Text style={styles.HeaderName}>Camile Pedro</Text>
        <Text style={styles.HeaderID}>ID SUS: 666999666-24</Text>
      </View>

      
      
    <DrawerItemList {...rest} />
    <DrawerItem 
      label={()=><AntDesign name="logout" size={24} style={{marginLeft:15,}} color={Theme.COLORS.MUTED} />}
      onPress={()=>rest.navigation.popToTop()}

     />
</DrawerContentScrollView>);
}



export default function Dashboard(){
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;
    return(
        <Drawer.Navigator initialRouteName="Historico" 
            drawerContent={props => <CustomDrawerContent {...props} />}
            drawerStyle={{
              headerShown:true,
              
            }}
            screenOptions={{
             
              drawerStyle: isLargeScreen ? null : { width: '100%' },
              overlayColor: 'transparent',
            }}
            drawerContentOptions={{
              activeBackgroundColor:Theme.COLORS.DEFAULT,
                activeTintColor: Theme.COLORS.WHITE,
                inactiveTintColor: Theme.COLORS.MUTED,
                
                labelStyle: {
                  fontSize: 18,
                  marginLeft: 12,
                  fontWeight: "normal"
                }
              }}
        >
        <Drawer.Screen name="Historico" component={Historic} options={Options}/>
        <Drawer.Screen name="Cartão de Vacinação" component={VaccinationCard} 
          options={Options}/>
        <Drawer.Screen name="Vacinas" component={Vaccine} options={Options}/>
        <Drawer.Screen name="Dependentes" component={Dependents} options={Options}/>
        <Drawer.Screen name="Mapa" component={Map} options={Options} />
        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
  header: {
    flex:1,
    paddingHorizontal: 28,
    justifyContent: 'center',
    marginBottom:10,
  },
  HeaderName:{
    fontWeight:'bold',
    color:Theme.COLORS.DEFAULT
  },
  HeaderID:{
    color:Theme.COLORS.MUTED,
    marginBottom:15,
  },
  logo: {
    width: 100,
    height: 100,
  },
});