import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import Home from './components/Home';
import Detail from './components/Detail';
import Scan from './components/Scan';
import Report from './components/Report';
import ReportSuccess from './components/ReportSuccess';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
          <Stack.Screen name="Detail" component={Detail} options={{headerShown: false}}  />
          <Stack.Screen name="Scan" component={Scan} options={{headerShown: false}}/>
          <Stack.Screen name="Report" component={Report} options={{headerShown: false}} />
          <Stack.Screen name="ReportSuccess" component={ReportSuccess} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
