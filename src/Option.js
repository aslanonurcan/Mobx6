import React from 'react';
import {Text, View} from 'react-native';
import {inject, observer} from 'mobx-react';

const Option = observer(({Store}) => {

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{Store.lyricsData}</Text>
        <Text>{Store.status}</Text>
    </View>
  );
});

export default inject((stores) => ({
  Store: stores.Store,
}))(Option);
