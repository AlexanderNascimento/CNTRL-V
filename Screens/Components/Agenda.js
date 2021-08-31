import React from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import RegisterVacinnes from '../../Constants/tests/RegisterVacinnes';
import Theme from '../../Constants/Theme';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Swipeable } from 'react-native-gesture-handler';

const vacinas = RegisterVacinnes;
export default function Agenda() {

    return (
        <>
            <View style={styles.Header}>
                <Text style={styles.HeaderText}>Vacinas em Atraso!</Text>
            </View>
            <View>
                <FlatList
                    data={vacinas}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <List item={item}
                            action={() => { alert('finish') }} />
                    )}
                    ItemSeparatorComponent={Separator}
                />
            </View>
        </>
    );


    function List({ item, action }) {
        return (
            <Swipeable
                renderLeftActions={() => <Action onPress={action} />}>
                <View style={styles.ListItens}>
                    <Text>{item.nome}</Text>
                    <Ionicons name="alarm" size={30} color={Theme.COLORS.SECONDARY} />
                    <Text>  <FontAwesome5 name="prescription-bottle-alt" size={20} color={Theme.COLORS.SECONDARY} />  {item.dose}</Text>
                </View>
            </Swipeable>
        );
    }


    function Action({ onPress }) {
        return (
            <TouchableOpacity style={styles.Action} onPress={onPress}>
                <Entypo name="check" size={24} color={Theme.COLORS.WHITE} style={{ marginTop: 10 }} />
            </TouchableOpacity>);
    }


    function Separator() {
        return (
            <View style={{ flex: 1, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: Theme.COLORS.SECONDARY }}></View>);
    }




}


const styles = StyleSheet.create({
    Header: {
        marginVertical: 20,
        alignItems: 'center',
    },
    HeaderText: {
        fontWeight: 'bold',
        color: Theme.COLORS.SECONDARY,
        fontSize: 30,

    },
    ListItens: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
    },
    Action: {
        backgroundColor: Theme.COLORS.DEFAULT,
        paddingHorizontal: 15,
    }

});