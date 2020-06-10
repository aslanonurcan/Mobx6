import React, {useState} from 'react';
import {Text, View, Button, TextInput} from 'react-native';
import {inject} from 'mobx-react';

const  Home = ({ updateName,navigation, sValue,getLyrics }) => {
    
    const [artist, setArtist] = useState('');
    const [title, setTitle] = useState('');
    const handleName = () => {
        getLyrics(artist,title);
    }
  return (
    <View
      style={{flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
      <TextInput
        placeholder="Artist"
        style={{borderWidth: 1, height: 40, width: 140}}
        value={artist}
        onChangeText={val => setArtist(val)}
      />
      <TextInput
        placeholder="title"
        style={{borderWidth: 1, height: 40, width: 140}}
        value={title}
        onChangeText={val => setTitle(val)}
      />

      <Button
        title="Gönder"
        onPress={() => {
          handleName()
        }}
      />
      <Button
        title="Ayarlar"
        onPress={() => {
          navigation.navigate('Option');
        }}
      />
    </View>
  );
}

export default inject((stores) => ({
    updateName: stores.Store.updateName,
    sValue: stores.Store.sValue,
    getLyrics: stores.Store.getLyrics
  }))(Home);