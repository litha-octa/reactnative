import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Card, CardItem, Left, Right, Body} from 'native-base';
import RBSheet from 'react-native-raw-bottom-sheet';
import {ProfStyle} from '../components/Profile/ProfStyle';
import NotifService from './../../NotifService';
import {connect} from 'react-redux';
import {DOMAIN_API, PORT_API} from '@env';
import {Button} from 'react-native-elements/dist/buttons/Button';

function Profile(props) {
  const role = props.role;
  const name = props.name;
  const refRBSheet = useRef();
  //const displayName = name.charAt(0).toUpperCase() + name.slice(1);

  console.log(role);
  return (
    <View style={ProfStyle.body}>
      <View style={ProfStyle.Header}>
        <Text style={ProfStyle.caption}>Profile</Text>
        <View style={ProfStyle.headerpic}>
          <Image
            source={require('../assets/images/profile.png')}
            style={ProfStyle.img}
          />
          <TouchableOpacity
            onPress={() => props.navigation.navigate('FormProfile')}>
            <Image
              source={require('../assets/images/editicon.png')}
              style={{width: 20, height: 20, marginLeft: 80, marginTop: -10}}
            />
          </TouchableOpacity>
        </View>
        <View style={ProfStyle.headername}>
          <Text style={ProfStyle.username}>{name}</Text>
          <Text style={ProfStyle.status}>online</Text>
        </View>
      </View>
      <ScrollView>
        <View>
          <View style={ProfStyle.container}>
            <Text style={ProfStyle.menu}>Account</Text>
            <Card>
              <CardItem>
                <Left>
                  <Image source={require('../assets/images/PhoneIcon.png')} />
                </Left>
                <Body>
                  <Text
                    style={ProfStyle.menuBtn}
                    onPress={() => props.navigation.navigate('Notif')}>
                    Phone Numbers
                  </Text>
                </Body>
                <Right>
                  <Image source={require('../assets/images/arrow.png')} />
                </Right>
              </CardItem>
              <CardItem>
                <Left>
                  <Image source={require('../assets/images/PINIcon.png')} />
                </Left>
                <Body>
                  <Text style={ProfStyle.menuBtn}>Change Password</Text>
                </Body>
                <Right>
                  <Image source={require('../assets/images/arrow.png')} />
                </Right>
              </CardItem>
            </Card>
          </View>

          <View style={ProfStyle.container}>
            <Text style={ProfStyle.menu}>Settings</Text>
            <Card>
              <CardItem>
                <Left>
                  <Image source={require('../assets/images/ChatIcon.png')} />
                </Left>
                <Body>
                  <Text style={ProfStyle.menuBtn}>Chat Settings</Text>
                </Body>
                <Right>
                  <Image source={require('../assets/images/arrow.png')} />
                </Right>
              </CardItem>
              <CardItem>
                <Left>
                  <Image source={require('../assets/images/NotifIcon.png')} />
                </Left>
                <Body>
                  <Text style={ProfStyle.menuBtn}>Push Notifications</Text>
                </Body>
                <Right>
                  <Image source={require('../assets/images/arrow.png')} />
                </Right>
              </CardItem>
              <CardItem>
                <Left>
                  <Image
                    source={require('../assets/images/SecurityIcon.png')}
                  />
                </Left>
                <Body>
                  <Text style={ProfStyle.menuBtn}>Privacy and Security</Text>
                </Body>
                <Right>
                  <Image source={require('../assets/images/arrow.png')} />
                </Right>
              </CardItem>
              <CardItem>
                <Left>
                  <Image source={require('../assets/images/StorageIcon.png')} />
                </Left>
                <Body>
                  <Text style={ProfStyle.menuBtn}>Data and Storage</Text>
                </Body>
                <Right>
                  <Image source={require('../assets/images/arrow.png')} />
                </Right>
              </CardItem>
            </Card>
          </View>
          <View style={ProfStyle.container}>
            <Text style={ProfStyle.menu}>Help</Text>
            <Card>
              <CardItem>
                <Left>
                  <Image source={require('../assets/images/FAQIcon.png')} />
                </Left>
                <Body>
                  <Text style={ProfStyle.menuBtn}>F.A.Q</Text>
                </Body>
                <Right>
                  <Image source={require('../assets/images/arrow.png')} />
                </Right>
              </CardItem>
              <CardItem button onPress={() => refRBSheet.current.open()}>
                <Left>
                  <Image source={require('../assets/images/LogoutIcon.png')} />
                </Left>
                <Body>
                  <Text style={ProfStyle.menuBtn}>LogOut</Text>
                </Body>
                <Right>
                  <Image source={require('../assets/images/arrow.png')} />
                </Right>
              </CardItem>
            </Card>
          </View>
        </View>
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={false}
          height={250}
          customStyles={{
            wrapper: {
              backgroundColor: 'rgba(0,0,0,0.3)',
            },
            draggableIcon: {
              backgroundColor: '#000',
            },
          }}>
          <View style={ProfStyle.bottomSheet}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 25,
                color: 'black',
              }}>
              Log out ?
            </Text>
            <View style={{flexDirection: 'row', flex: 1}}>
              <TouchableOpacity
                style={ProfStyle.bottomSheetBtn}
                onPress={() => props.navigation.navigate('Login')}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: 'red',
                  }}>
                  Confirm
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={ProfStyle.bottomSheetBtn}
                onPress={() => refRBSheet.current.close()}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: 'green',
                  }}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </RBSheet>
      </ScrollView>
    </View>
  );
}

const mapStateToProps = state => ({
  auth: state.auth,
  role: state.auth.resultLogin.data.role,
  email: state.auth.resultLogin.data.email,
  getUserReducer: state.getUserReducer,
  name: state.getUserReducer.currentUser.name,
});

// const mapDispatchToProps = dispatch => ({

// });

const ConnectedProfile = connect(
  mapStateToProps,
  // mapDispatchToProps,
)(Profile);
export default ConnectedProfile;
