import {createDrawerNavigator} from '@react-navigation/drawer';
import {COLORS} from '../constants';
import {View} from 'react-native';
import {MainLayout} from '../screens';

const Drawer = createDrawerNavigator();

const CustomDrawer = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
      }}>
      <Drawer.Navigator
        screenOptions={{
          drawerType: 'slide',
          overlayColor: 'transparent',
          drawerStyle: {
            flex: 1,
            width: 60,
            paddingRight: 20,
            backgroundColor: 'transparent',
          },
          sceneContainerStyle: {
            backgroundColor: 'transparent',
          },
          initialRouteName: 'MainLayout',
        }}>
        <Drawer.Screen name="MainLayout">
          {props => <MainLayout {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};
export default CustomDrawer;
