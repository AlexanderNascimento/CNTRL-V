import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Statusbar from '../Constants/StatusBar';
import Agenda from './Components/Agenda';

export default function Historic() {
    return (
        <SafeAreaView style={styles.Container}>
            <Statusbar />
            <Agenda />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },

});