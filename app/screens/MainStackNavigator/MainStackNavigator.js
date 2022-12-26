import Quiz from '../Quiz';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Settings from '../Settings/Settings';
import MainMenu from '../MainMenu/MainMenu';
import {COLORS} from '../../constants';

const MainStackNavigator = (object) => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: COLORS.background,
        },
      }}
      initialRouteName="navigator">
      <Stack.Screen name="Menu" component={MainMenu} />
      <Stack.Screen name="Quiz" component={Quiz} object={object} />
      <Stack.Screen name="Settings" component={Settings} object={object} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
