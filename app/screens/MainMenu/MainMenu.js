import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, SIZES} from '../../constants';
import React, { useContext, useEffect, useState } from "react";
import {useNavigation, useNavigationParam} from '@react-navigation/native';
import {Context} from '../../utils/Context';
const MainMenu = () => {
  const navigator = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
          marginHorizontal: 30,
          paddingVertical: 40,
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
        }}>
        <Text
          style={{
            color: COLORS.white,
            fontSize: 40,
            fontWeight: 'bold',
            flexGrow: 1,
          }}>
          Quiz app by lpduong.dev
        </Text>
        <TouchableOpacity
          onPress={() => navigator.navigate('Quiz')}
          style={{
            backgroundColor: COLORS.white,
            padding: 20,
            margin: 20,
            width: '100%',
            borderRadius: 20,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              color: COLORS.primary,
              fontSize: 20,
            }}>
            Attempt Quiz
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigator.navigate('Settings')}
          style={{
            backgroundColor: COLORS.white,
            padding: 20,
            margin: 20,
            width: '100%',
            borderRadius: 20,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              color: COLORS.primary,
              fontSize: 20,
            }}>
            Settings
          </Text>
        </TouchableOpacity>
      </View>
      <Image
        source={require('../../assets/images/DottedBG.png')}
        style={{
          width: SIZES.width,
          height: 130,
          zIndex: -1,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          opacity: 0.5,
        }}
        resizeMode={'contain'}
      />
    </SafeAreaView>
  );
};
export default MainMenu;
