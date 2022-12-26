import {
  Image,
  SafeAreaView,
  Switch,
  Text,
  View,
} from 'react-native';
import Slider from '@react-native-community/slider';
import {COLORS, SIZES} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import {useContext, useEffect, useState} from 'react';
import SharedContext from '../../utils/Context';

const Settings = object => {
  const props = useContext(SharedContext);
  const [number, setNumber] = useState(props.number.get);
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
          SETTINGS
        </Text>
        <View style={{flex: 1}}>
          <Text
            style={{
              color: COLORS.white,
              fontWeight: 'bold',
              fontSize: 15,
              textAlign: 'center',
            }}>
            Number of questions
          </Text>
          <Text
            style={{
              color: COLORS.white,
              fontWeight: 'bold',
              fontSize: 15,
              textAlign: 'center',
            }}>
            {Math.round(number)}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              flex: 3,
            }}>
            <Text
              style={{fontSize: 20, color: COLORS.white, fontWeight: 'bold'}}>
              5
            </Text>
            <Slider
              maximumValue={20}
              minimumValue={5}
              value={number}
              onValueChange={value => {
                setNumber(value);
              }}
              style={{
                flexGrow: 1,
                marginHorizontal: 20,
                width: (SIZES.width * 70) / 100,
              }}
            />
            <Text
              style={{fontSize: 20, color: COLORS.white, fontWeight: 'bold'}}>
              20
            </Text>
          </View>
        </View>
        <Text style={{fontSize: 20, color: COLORS.white, fontWeight: 'bold'}}>
          Topic
        </Text>

        <View style={{flexDirection: 'row', paddingVertical: 10}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 15, color: COLORS.white, padding: 10}}>
              MCU
            </Text>
            <Switch
              onValueChange={() => props.mcu.set(!props.mcu.get)}
              trackColor={{false: COLORS.white, true: COLORS.white}}
              thumbColor={props.mcu.get ? COLORS.background : COLORS.white}
              value={props.mcu.get}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 15, color: COLORS.white, padding: 10}}>
              Business
            </Text>
            <Switch
              onValueChange={() => {
                props.business.set(!props.business.get);
              }}
              trackColor={{false: COLORS.white, true: COLORS.white}}
              thumbColor={props.business.get ? COLORS.background : COLORS.white}
              value={props.business.get}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', paddingVertical: 10}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 15, color: COLORS.white, padding: 10}}>
              Food
            </Text>
            <Switch
              onValueChange={() => props.food.set(!props.food.get)}
              trackColor={{false: COLORS.white, true: COLORS.white}}
              thumbColor={props.food.get ? COLORS.background : COLORS.white}
              value={props.food.get}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 15, color: COLORS.white, padding: 10}}>
              Games
            </Text>
            <Switch
              onValueChange={() => {
                props.games.set(!props.games.get);
              }}
              trackColor={{false: COLORS.white, true: COLORS.white}}
              thumbColor={props.games.get ? COLORS.background : COLORS.white}
              value={props.games.get}
            />
          </View>
        </View>
        <Text
          onPress={() => {
            props.number.set(number);
            navigator.navigate('Menu');
          }}
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            color: COLORS.white,
            padding: 30,
            fontSize: 20,
          }}>
          Back to menu
        </Text>
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

// const [qsNum, setQsNum] = useState(10);
// const [isMCUEnabled, setIsMCUEnabled] = useState(false);
// const [isBusinessEnabled, setIsBusinessEnabled] = useState(false);
// const [isFoodEnabled, setIsFoodEnabled] = useState(false);
// const [isGamesEnabled, setIsGamesEnabled] = useState(false);

//   return (
//     <SafeAreaView
//       style={{
//         flex: 1,
//       }}>
//       <View
//         style={{
//           flex: 1,
//           marginHorizontal: 30,
//           paddingVertical: 40,
//           flexDirection: 'column',
//           alignItems: 'center',
//           position: 'relative',
//         }}>
//         <Text
//           style={{
//             color: COLORS.white,
//             fontSize: 40,
//             fontWeight: 'bold',
//             flexGrow: 1,
//           }}>
//           SETTINGS
//         </Text>
//         <View style={{flex: 1}}>
//           <Text
//             style={{
//               color: COLORS.white,
//               fontWeight: 'bold',
//               fontSize: 15,
//               textAlign: 'center',
//             }}>
//             Number of questions
//           </Text>
//           <Text
//             style={{
//               color: COLORS.white,
//               fontWeight: 'bold',
//               fontSize: 15,
//               textAlign: 'center',
//             }}>
//             {Math.round(qsNum)}
//           </Text>
//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               flex: 3,
//             }}>
//             <Text
//               style={{fontSize: 20, color: COLORS.white, fontWeight: 'bold'}}>
//               5
//             </Text>
//             <Slider
//               maximumValue={20}
//               minimumValue={5}
//               value={qsNum}
//               onValueChange={value => {
//                 setQsNum(value);
//               }}
//               style={{
//                 flexGrow: 1,
//                 marginHorizontal: 20,
//                 width: (SIZES.width * 70) / 100,
//               }}
//             />
//             <Text
//               style={{fontSize: 20, color: COLORS.white, fontWeight: 'bold'}}>
//               20
//             </Text>
//           </View>
//         </View>
//         <Text style={{fontSize: 20, color: COLORS.white, fontWeight: 'bold'}}>
//           Topic
//         </Text>
//
//         <View style={{flexDirection: 'row', paddingVertical: 10}}>
//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}>
//             <Text style={{fontSize: 15, color: COLORS.white, padding: 10}}>
//               MCU
//             </Text>
//             <Switch
//               onValueChange={() =>
//                 setIsMCUEnabled(previousState => !previousState)
//               }
//               trackColor={{false: COLORS.white, true: COLORS.white}}
//               thumbColor={isMCUEnabled ? COLORS.background : COLORS.white}
//               value={isMCUEnabled}
//             />
//           </View>
//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//             }}>
//             <Text style={{fontSize: 15, color: COLORS.white, padding: 10}}>
//               Business
//             </Text>
//             <Switch
//               onValueChange={() =>
//                 setIsBusinessEnabled(previousState => !previousState)
//               }
//               trackColor={{false: COLORS.white, true: COLORS.white}}
//               thumbColor={isBusinessEnabled ? COLORS.background : COLORS.white}
//               value={isBusinessEnabled}
//             />
//           </View>
//         </View>
//         <View style={{flexDirection: 'row', paddingVertical: 10}}>
//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}>
//             <Text style={{fontSize: 15, color: COLORS.white, padding: 10}}>
//               Food
//             </Text>
//             <Switch
//               onValueChange={() =>
//                 setIsFoodEnabled(previousState => !previousState)
//               }
//               trackColor={{false: COLORS.white, true: COLORS.white}}
//               thumbColor={isFoodEnabled ? COLORS.background : COLORS.white}
//               value={isFoodEnabled}
//             />
//           </View>
//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//             }}>
//             <Text style={{fontSize: 15, color: COLORS.white, padding: 10}}>
//               Games
//             </Text>
//             <Switch
//               onValueChange={() =>
//                 setIsGamesEnabled(previousState => !previousState)
//               }
//               trackColor={{false: COLORS.white, true: COLORS.white}}
//               thumbColor={isGamesEnabled ? COLORS.background : COLORS.white}
//               value={isGamesEnabled}
//             />
//           </View>
//         </View>
//         <TouchableOpacity
//           onPress={() => navigator.navigate('Quiz')}
//           style={{
//             backgroundColor: COLORS.white,
//             padding: 20,
//             margin: 20,
//             width: '100%',
//             borderRadius: 20,
//           }}>
//           <Text
//             style={{
//               textAlign: 'center',
//               fontWeight: 'bold',
//               color: COLORS.primary,
//               fontSize: 20,
//             }}>
//             Attempt Quiz
//           </Text>
//         </TouchableOpacity>
//
//         <Text
//           onPress={() =>
//             navigator.navigate('MainMenu', {
//               number: qsNum,
//               mcu: isMCUEnabled,
//               business: isBusinessEnabled,
//               food: isFoodEnabled,
//               games: isGamesEnabled,
//             })
//           }
//           style={{
//             textAlign: 'center',
//             fontWeight: 'bold',
//             color: COLORS.white,
//             padding: 30,
//             fontSize: 20,
//           }}>
//           Back to menu
//         </Text>
//       </View>
//       <Image
//         source={require('../../assets/images/DottedBG.png')}
//         style={{
//           width: SIZES.width,
//           height: 130,
//           zIndex: -1,
//           position: 'absolute',
//           bottom: 0,
//           left: 0,
//           right: 0,
//           opacity: 0.5,
//         }}
//         resizeMode={'contain'}
//       />
//     </SafeAreaView>
//   );
// };

export default Settings;
