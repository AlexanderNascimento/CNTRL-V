import React from 'react';
import {StatusBar, } from 'react-native';
import Theme from './Theme';

export default function Statusbar(){
    return(
        <StatusBar
        barStyle='light-content' 
        backgroundColor={Theme.COLORS.DEFAULT}/>
    );
}