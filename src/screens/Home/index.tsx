import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from '../styles';

import { Participant } from '../../Component/participant';
export function Home() {
 const [participant, setParticipant] = useState<string[]>([]);
 const [participantName, setParticipantName] = useState('');

  function handleParticipantAdd() {
    if (participant.includes(participantName)){
    return Alert.alert( "participant exists", "exist a participant with this name!");
    }
    setParticipant(prevState =>[...prevState, participantName]);
    setParticipantName('');
  }

  function handleParticipantRemove(name: String) {
    
    Alert.alert('Remover', `Remover participante? ${name}?`, [
    {
      text: 'sim',
      onPress: () => setParticipant(prevState => prevState.filter(participant => participant !== name))
    },
    {
      text: 'Não',
      style: 'cancel'
    },
  ]);
  }

  return(
    <View style={styles.container}>

<Text style={styles.eventName}>
Meu primeiro App
  </Text>

  <Text style={styles.subTittle}>
   react native
   </Text>

    <View style={styles.form}>
   <TextInput
    style={styles.input} 
    placeholder='Digit your name here...'
    placeholderTextColor='#6b6b6b'
    onChangeText={setParticipantName}
    value={participantName}
    />
    <TouchableOpacity style={styles.Button} onPress={handleParticipantAdd}>
  <Text style={styles.buttonText}>
      +
      </Text>
    </TouchableOpacity>
    </View>

<FlatList
  data= {participant}
  keyExtractor={item => item}
  renderItem={({ item })=> (
    <Participant 
      key= {item}
      name={item}
      onRemove={() =>handleParticipantRemove( item )}
    />
  )}
  showsVerticalScrollIndicator= {false}
  ListEmptyComponent={()=> (
      <Text style={styles.emptyList}>
          Empty list? Add new participants in presence list!
      </Text>
  )}
/>
</View>
  )
}
