import React from 'react';
import {View, Text, TextInput, Image, ScrollView} from 'react-native';
import {Card, CardItem, Body, Footer, FooterTab, Button} from 'native-base';
import {ActFas} from '../components/Act/ActFas';
const Activity = ({navigation}) => {
  const data = {
    username: 'Emir',
  };

  return (
    <ScrollView>
      <View style={ActFas.body}>
        <View style={ActFas.header}>
          <Text style={ActFas.title}> Activity</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Activity;
