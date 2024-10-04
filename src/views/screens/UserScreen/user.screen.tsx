import React, {useState} from 'react';
import {View, Button, Text, TextInput, Alert} from 'react-native';

import {useAppDispatch} from '../../../store/hooks';

import Gradient from '../../components/Gradient/gradient.component';

import {styles} from './user.styles';

const UserScreen = ({navigation}) => {
  const [text, onChangeText] = useState('');
  const dispatch = useAppDispatch();

  const createAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const handler = () => {
    if (text === '') {
      createAlert();
      return;
    }
    dispatch({type: 'setUsername', payload: {username: text}});
    navigation.navigate('Pokedex');
  };

  return (
      <Gradient>
      <View style={styles.container}>
        <Text style={styles.text}>Escribe tu nombre: </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          allowFontScaling={false}
          placeholder="Ash Ketchum"
          maxLength={10}
          underlineColorAndroid="transparent"
          //selectionColor={'#21CBCA'}
          //caretHidden={true}
          //contextMenuHidden={true}
        />
        <Button onPress={handler} title="Aceptar" color="#841584" />
      </View>
    </Gradient>
  );
};

export default UserScreen;
