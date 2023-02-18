import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigatior from './navigator/RootNavigatior';


export default function App() {
  return (
    // @ts-ignore
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <RootNavigatior />
      </NavigationContainer>
    </TailwindProvider>
  );
}
