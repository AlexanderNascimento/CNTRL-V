import React,{useEffect} from 'react';
import { SafeAreaView, StyleSheet, View, Dimensions, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Theme from '../Constants/Theme';
import Statusbar from '../Constants/StatusBar';

import VaccinationCardContent from './Components/VaccineCardContent';




const { width, height } = Dimensions.get("screen");

export default function VaccinationCard() {

    useEffect(() => {
        async function getCard(){
            
        }
    },[])
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Statusbar />
            <View style={styles.Header}>
                <Text style={styles.HeaderText}>  xenivaldo , me arruma uma img para por a aqui</Text>
            </View>


            <VaccinationCardContent />
        </SafeAreaView>


    );


}

const styles = StyleSheet.create({
    HeaderText: {
        textAlign: 'center',
        fontSize: 50,
        color: Theme.COLORS.DEFAULT,
    },
    Header: {
        alignItems: 'center',
        alignSelf: 'center',
    },
});

