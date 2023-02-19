import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigatior from './navigator/RootNavigatior';
import { ApolloClient, InMemoryCache, ApolloProvider, gql , createHttpLink} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://melnik.stepzen.net/api/jazzy-mongoose/__graphql',
	headers: {
		Authorization: `Apikey ${process.env.EXPO_STEPZEN_API_KEY}`,
	},
	cache: new InMemoryCache(),
});

export default function App() {
  return (
    // @ts-ignore
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <RootNavigatior />
        </NavigationContainer>
      </ApolloProvider>
    </TailwindProvider>
  );
}
