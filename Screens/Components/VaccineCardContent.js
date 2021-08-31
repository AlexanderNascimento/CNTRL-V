import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, FlatList, Dimensions, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native';
import Theme from '../../Constants/Theme';
import carteiraVacinas from '../../Constants/tests/carteiraVacinas';
import { Swipeable } from 'react-native-gesture-handler';
import { Modalize } from 'react-native-modalize';
import DatePicker from 'react-native-datepicker';
import {
  Entypo, Fontisto, FontAwesome5,
  MaterialCommunityIcons, MaterialIcons, AntDesign
} from '@expo/vector-icons';
const { width, height } = Dimensions.get("screen");
export default function VaccinationCardContent() {
  const [date, setDate] = useState('');
  const modalizeRef = useRef(null);
  const cv = carteiraVacinas;


  const onOpen = () => {
    modalizeRef.current?.open();
  };
  function closeModalize() {
    !modalizeRef.current?.close();
  }
  return (
    <>



      <TouchableOpacity onPress={onOpen} style={{ width: 50 }}>
        <View style={styles.itenIcon}>
          <Entypo name="add-to-list" size={20} style={{ marginLeft: 15 }} color={Theme.COLORS.SECONDARY} />
        </View>
      </TouchableOpacity>

      <FlatList

        data={cv}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <List item={item}
            rightAction={() => { alert('finish') }} />
        )}
        ItemSeparatorComponent={() => <Separator />}
      />


      <Modalize ref={modalizeRef}
        snapPoint={height / 1.5}
        HeaderComponent={
          <View style={styles.ModalHeader}>
            <TouchableWithoutFeedback onPress={closeModalize}>
              <AntDesign name="close" size={25} color={Theme.COLORS.SECONDARY} />
            </TouchableWithoutFeedback>
          </View>
        }>
        <KeyboardAvoidingView style={styles.Modal}>
          <View style={styles.ModalizeInputsContainer}>
            <TextInput placeholder="nome"
              placeholderTextColor={Theme.COLORS.DEFAULT}
              style={styles.ModalizeInputs} />
            <Fontisto name="injection-syringe" size={30} color={Theme.COLORS.DEFAULT} style={{ marginRight: 10, marginTop: 5, }} />
          </View>
          <View style={styles.ModalizeInputsContainer}>
            <TextInput placeholder="dose"
              style={styles.ModalizeInputs} />
            <FontAwesome5 name="prescription-bottle-alt" size={25} color={Theme.COLORS.DEFAULT} style={{ marginRight: 10, marginTop: 5, }} />
          </View>
          <View style={styles.ModalizeInputsContainer}>
            <TextInput placeholder="lote"
              style={styles.ModalizeInputs} />
            <MaterialCommunityIcons name="chart-scatter-plot-hexbin" size={30} color={Theme.COLORS.DEFAULT} style={{ marginRight: 10, marginTop: 5, }} />
          </View>
          <View style={styles.ModalizeDateContainer}>
            <DatePicker

              date={date}
              mode="date"
              placeholder="Data de nascimento"
              placeholderTextColor={Theme.COLORS.DEFAULT}
              format="DD-MM-YYYY"
              showIcon={false}
              androidMode="spinner"
              customStyles={{
                dateText: {
                  color: Theme.COLORS.DEFAULT,
                },
                dateInput: {
                  flex: 1,
                  margin: 15,
                  backgroundColor: Theme.COLORS.WHITE,
                  borderColor: Theme.COLORS.TRANSPARENT,
                }
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(date) => { setDate(date) }}
            />
            <MaterialIcons name="date-range" size={30} color={Theme.COLORS.DEFAULT} style={{ marginRight: 5, marginTop: 5, }} />
          </View>

          <TouchableOpacity style={styles.ModalButton} onPress={onOpen}>
            <Text style={styles.ModelButtonText}>Registrar</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </Modalize>
    </>
  );



  function Separator() {
    return (<View style={{ flex: 1, height: 1, backgroundColor: Theme.COLORS.MUTED }}></View>);
  }

  function RightAction({ onPress }) {
    return (
      <TouchableOpacity style={styles.RightAction} onPress={onPress}>

      </TouchableOpacity>);
  }


  function List({ item, rightAction }) {
    return (
      <Swipeable
        renderRightActions={() => <RightAction onPress={rightAction} />}>
        <View style={styles.itens} >
          <Text style={styles.itensText, { color: Theme.COLORS.DEFAULT, fontSize: 20 }}>{item.nome}</Text>
          <Text style={styles.itensText}>Dose: {item.dose}</Text>
          <Text style={styles.itensText}>
            <MaterialIcons name="date-range" size={20} color={Theme.COLORS.DEFAULT} /> : {item.data}</Text>
          <Text style={styles.itensText}>Lote: {item.lote}</Text>
        </View>
      </Swipeable>
    );



  };




}



const styles = StyleSheet.create({
  itens: {
    flex: 1,
    alignItems: 'baseline',
    justifyContent: 'space-around',

    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  itensText: { marginLeft: 15 },
  itenIcon: {
    width: width,
  },
  scrollViewBorder: {
    borderStyle: 'solid',
    borderColor: Theme.COLORS.BLACK,
    borderTopWidth: 1,
  },
  RightAction: {
    backgroundColor: Theme.COLORS.ERROR,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },

  Modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  ModalButton: {
    backgroundColor: Theme.COLORS.DEFAULT,
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 50,
    marginTop: 15,
    flex: 1,
  },
  ModelButtonText: {
    color: Theme.COLORS.WHITE,
  },
  ModalHeader: {
    marginTop: 5,
    marginHorizontal: 5,
    alignSelf: 'flex-end',
    width: 30,
  },
  ModalizeInputs: {
    flex: 1,
    marginHorizontal: 15,
  },
  ModalizeInputsContainer: {
    flexDirection: 'row',
    borderColor: Theme.COLORS.DEFAULT,
    borderWidth: 1,
    borderRadius: 60 / 2,
    paddingBottom: 5,
    marginHorizontal: 30,
    marginBottom: 15,
  },
  ModalizeDateContainer: {
    flexDirection: 'row',

    borderColor: Theme.COLORS.DEFAULT,
    borderWidth: 1,
    borderRadius: 60 / 2,
    paddingBottom: 5,
    marginHorizontal: 30,
    marginBottom: 15,
    paddingTop: 5,
  }
});

