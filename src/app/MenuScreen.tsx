import React from 'react';
import { View, Button, NativeSyntheticEvent, NativeTouchEvent } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import Buttonp from "@/components/Buttonp";

type RootStackParamList = {
  Cadastro: undefined;
  Listagem: undefined;
  Login: undefined;
};

type MenuScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Cadastro' | 'Listagem' | 'Login'>;
};

const MenuScreen = ({ navigation }: MenuScreenProps) => {
  return (
        <View className='flex-1 px-4 pb-4'>
          <Buttonp
            label='Cadastro'
            onPress={() => navigation.navigate('Cadastro')}
          />
          <Buttonp
            label='Listagem'
            onPress={() => navigation.navigate('Listagem')}
          />
          <Buttonp
            label='Login'
            onPress={() => navigation.navigate('Login')}
          />
        </View>
  );
};

export default MenuScreen;