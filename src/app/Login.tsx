import React, { useState, useEffect } from 'react';
import { View, Text,} from 'react-native';

import { FontAwesome } from "@expo/vector-icons"

import Buttonp from '@/components/Buttonp';
import { Inputp } from '@/components/Inputp';
import { Avatarp } from '@/components/Avatarp';

import { styles } from '@/styles/styles'
import { theme } from '@/theme';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
};

type MenuScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const Login = ({ navigation }: MenuScreenProps) => {
  return (
    <View style={styles.View}>
        <View style={styles.loginLogoView}>
            <Avatarp name="fme" image={require("@/assets/logo.jpg")}/>
            <Text style={styles.title}>Login</Text>
        </View>
        <View style={styles.loginInputView}>
            <Text style={styles.text}>usuario ou e-mail</Text>
            <Inputp>
              <Inputp.Field placeholder="e-mail"/>
            </Inputp>
            <View style={styles.viewTextSenha}>
              <Text style={styles.text}>password</Text>
              <Text style={styles.esqueceuSenha}>esqueceu a senha?</Text>
            </View>
            <Inputp>
              <FontAwesome name="lock" size={16} color={theme.colors.green_500}/> 
              <Inputp.Field secureTextEntry={true} placeholder="Password"/>
            </Inputp>
            <Buttonp label='Entrar' onPress={() => navigation.navigate('Home')}/>
        </View>
    </View>
  );
};

export default Login;