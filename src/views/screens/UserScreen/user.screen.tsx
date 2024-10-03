import React, {useState} from 'react';
import {View, Button, Text, TextInput, Alert} from 'react-native';

import {useAppDispatch} from '../../../store/hooks';

import LinearGradient from 'react-native-linear-gradient';

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
    <LinearGradient
      colors={[
        '#C8EAE8',
        '#B4E4E1',
        '#A0DDD7',
        '#6CD1CE',
        '#4CC7C5',
        '#21CBCA',
      ]}
      start={{x: 0.0, y: 0.5}}
      end={{x: 1.0, y: 0.5}}
      locations={[0.1, 0.2, 0.4, 0.8, 0.95, 1.0]}
      style={styles.linearGradient}>
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
    </LinearGradient>
  );
};

export default UserScreen;
