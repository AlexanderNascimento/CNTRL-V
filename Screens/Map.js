import  React,{useState,useEffect,useRef} from 'react';
import MapView,{Marker,Animated,AnimatedRegion} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions,SafeAreaView, ScrollView,TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';
import {Ionicons} from '@expo/vector-icons'
import Statusbar from '../Constants/StatusBar';
import points from '../Constants/tests/points';
import Theme from '../Constants/Theme';
 
 
 const { width, height }= Dimensions.get('window');
export default function App() {
  const mapRef =useRef();
  const Points=points;
    const [region,setRegio]=useState(null);
  useEffect(()=>{
    Location.installWebGeolocationPolyfill();
    navigator.geolocation.getCurrentPosition(
      ({coords})=>{
          setRegio({
            latitude:coords.latitude,
            longitude:coords.longitude,
            latitudeDelta: 0.0064,
            longitudeDelta: 0.0113,
          });
      },
      ()=>{}, //error
    );


  },[]);


  return (
      <SafeAreaView  style={styles.container}>
          <Statusbar/>
      <MapView style={styles.map}
      ref={mapRef}
        region={region}
        showsUserLocation
        showsMyLocationButton
        showsPointsOfInterest={false}
        showsBuildings={false}
      >
        { Points.map(point=>(
            <Marker
            key={point.id}
            coordinate={point.coord}
            title={point.title}
            description={point.description}
            pinColor={Theme.COLORS.SECONDARY}
          />
        ))}
        
      </MapView>
        <ScrollView
        style={styles.ItensScroll}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        >
          {Points.map(point=>(
            <View key={point.id} style={styles.ItensContainer}>
              <View style={styles.ItensHeader}>
                <Text style={styles.ItensHeaderTitle}>{point.title}</Text>
                <Text style={styles.ItensHeaderCep}>{point.cep}</Text>
              </View>
              <View style={styles.ItensFooter}>
                <TouchableOpacity style={styles.ItensButton} onPress={()=>goTo(point.coord)}>
                  <Ionicons name='navigate' size={25} style={{alignSelf: 'center'}} color={Theme.COLORS.WHITE}/>
                </TouchableOpacity>
              </View>
              
              
            </View> 
          ))}
          
        </ScrollView>

   
    </SafeAreaView>
  );


  function goTo(coord){
    mapRef.current.animateCamera({
      center: {
      latitude:coord.latitude,
      longitude:coord.longitude,
  },
},{duration:2000})

}
}
const styles = StyleSheet.create({
  container: {
      flex:1,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
  },
  map: {
    position: 'absolute',
    top:0,
    bottom:0,
    left:0,
    right:0,
  },
  ItensScroll:{
    width:'100%',
    zIndex:5,
    maxHeight:200,
  },
  ItensContainer:{
    backgroundColor:Theme.COLORS.WHITE,
    maxHeight:200,
    width:width-40,
    marginHorizontal:20,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    elevation: 5
  },
  ItensHeader:{
    margin:20,
    justifyContent: 'flex-start'
  },
  ItensHeaderTitle:{
    color:Theme.COLORS.DEFAULT,
    fontSize:50,
    fontWeight:'bold'
  },
  ItensHeaderCep:{
    color:Theme.COLORS.MUTED,
  },
  ItensFooter:{
    margin:20,
    alignItems:'flex-end',
    justifyContent:'flex-end'
  },
  ItensButton:{
    backgroundColor:Theme.COLORS.DEFAULT,
    borderRadius:50,
    alignItems: 'center',
    justifyContent: 'center',
    width:40,
    height:40,
  }
});