import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState, useContext } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import IconContainer from '../components/IconContainer';
import SignupInfo from '../components/SignupInfo';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../auth/AuthProvider';

const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH = Dimensions.get('window').width;

const Signup = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup } = useContext(AuthContext); 

  return (
    <View>
      <View style={styles.upper}>
        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
          <IconContainer iconName='arrow-left' />
          <Text style={styles.signupText}> Sign up</Text>
        </View>

        <View>
          <Text style={styles.infoText}> Sign up with the following option.</Text>
          <View>
            <TouchableOpacity style={styles.IconContainer}>
              <Icon name='logo-google' size={30} color='white' />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.middle}>
        <SignupInfo 
          infoTitle='Name' 
          placeholder='Enter your name' 
          autoComplete='name'
          value={name}
          onChangeText={userFullName => setName(userFullName)} 
        />

        <SignupInfo 
          infoTitle='Email' 
          placeholder='Enter your email address' 
          autoComplete='email' 
          value={email}
          onChangeText={userEmail => setEmail(userEmail)}
        />
          
        
        <SignupInfo 
          infoTitle='Password' 
          placeholder='Enter your password' 
          autoComplete='password'
          value={password}
          onChangeText={userPassword => setPassword(userPassword)}
        />
      </View>

      <View style={styles.lower}>
        <TouchableOpacity style={styles.button} onPress={() => signup(email, password)}>
          <Text style={styles.buttonText}> Sign up </Text>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <Text style={styles.loginText}> Already have an account? </Text>

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={[styles.loginText,  {
              fontFamily: 'reost-bold',
            }]}> Log in </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
  upper: {
    backgroundColor: 'black',
    height: SCREENHEIGHT / 3.5,
    width: SCREENWIDTH,
    padding: 20
  },

  middle: {
    backgroundColor: 'black',
    height: SCREENHEIGHT - (SCREENHEIGHT / 3.5) - (SCREENHEIGHT / 4),
    width: SCREENWIDTH,
    padding: 20,
  },

  lower: {
    backgroundColor: 'black',
    height: SCREENHEIGHT / 4,
    width: SCREENWIDTH,
    padding: 20,
  },

  signupText: {
    fontFamily: 'reost-bold',
    marginLeft: 10,
    fontSize: 30,
    color: 'white'
  },

  infoText: {
    fontFamily: 'reost-medium',
    fontSize: 14,
    color: 'white',
    marginTop: 50,
  },

  IconContainer: {
    backgroundColor: 'black',
    width: SCREENHEIGHT/10,
    alignItems: 'center',
    justifyContent: 'center',
    height: SCREENHEIGHT/13,
    marginTop: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'gray',
  },
  
  button: {
    backgroundColor: 'white',
    width: 0.7 * SCREENWIDTH,
    height: 0.07 * SCREENHEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 15,
    marginTop: 20,
  },
  
  buttonText: {
    fontFamily: 'reost-bold',
    fontSize: 18,
    color: 'black',
    alignSelf: 'center'
  },

  loginText: {
    fontFamily: 'reost-medium',
    fontSize: 15,
    color: 'white',
    marginTop: 20,
  },
})