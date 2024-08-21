import { Input, PortalProvider, XStack } from 'tamagui'
import '../tamagui-web.css'

import { useEffect } from 'react'
import { FlatList, useColorScheme } from 'react-native'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import { Provider } from './Provider'
import TelaLogin from './pages/Login/TelaLogin'
import { DataRegistered } from './components/DataRegistered'
import { View, Dialog, Button } from 'tamagui'
import { ModalTeste } from './components/modalteste'
import { SelectRefeicoes } from './components/SelectRefeicoes'
import { CardInicial } from './components/CardInicial'
import { BarChart2, ChefHat, Cookie, CookingPot, Home, Settings, Settings2, Soup, User, Utensils } from '@tamagui/lucide-icons'
import { LastDataRegistered } from './components/LastDataRegistered'
import { MenuItem } from './components/MenuItem'
import { Menu } from './components/Menu'
import { CardMonitor } from './components/CardMonitor'
import { HeartPulse, Search } from "@tamagui/lucide-icons"
import CardDoctor from './components/CardDoctor'
import { DoctorsView } from './pages/DoctorsView/DoctorsView'
import { HomeView } from './pages/HomeView/HomeView'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router'

export const unstable_settings = {
  // Ensure that reloading on `/Select` keeps a back button present.
  initialRouteName: '(tabs)',
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [interLoaded, interError] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  useEffect(() => {
    if (interLoaded || interError) {
      // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
      SplashScreen.hideAsync()
    }
  }, [interLoaded, interError])

  if (!interLoaded && !interError) {
    return null
  }

  return <RootLayoutNav />
}

function RootLayoutNav() {
  const colorScheme = useColorScheme()

  const doctors = [
    {
      name: 'Luis Sousa',
      func: 'Pediatra',
      phoneNumber: '71 99999-9999',
      uri: "https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2023/09/the-good-doctor.jpg"
    },
    {
      name: 'William Santos',
      func: 'Pediatra',
      phoneNumber: '71 99999-9999',
      uri: 'https://qph.cf2.quoracdn.net/main-qimg-662d308a60ea129d17b5ee2259d41fc8-lq'
    },
    {
      name: 'Gustavo Sousa',
      func: 'Pediatra',
      phoneNumber: '71 99999-9999',
      uri: 'https://midias.correiobraziliense.com.br/_midias/jpg/2021/05/12/greys_anatomy_jesse_williams_1-6651880.jpg'
    },
    {
      name: 'Alexandre Magno',
      func: 'Pediatra',
      phoneNumber: '71 99999-9999',
      uri: 'https://rollingstone.com.br/media/_versions/ellen-pompeo-meredith-grey-greys-anatomy-reproducao_widelg.jpg'
    },
    {
      name: 'Jorge Silva',
      func: 'Pediatra',
      phoneNumber: '71 99999-9999',
      uri: 'https://rollingstone.com.br/media/_versions/ellen-pompeo-meredith-grey-greys-anatomy-reproducao_widelg.jpg'
    },
    {
      name: 'Luis',
      func: 'Pediatra',
      phoneNumber: '71 99999-9999',
      uri: 'https://rollingstone.com.br/media/_versions/ellen-pompeo-meredith-grey-greys-anatomy-reproducao_widelg.jpg'
    },

    {
      name: 'Luis',
      func: 'Pediatra',
      phoneNumber: '71 99999-9999',
      uri: 'https://rollingstone.com.br/media/_versions/ellen-pompeo-meredith-grey-greys-anatomy-reproducao_widelg.jpg'
    },

    {
      name: 'Luis',
      func: 'Pediatra',
      phoneNumber: '71 99999-9999',
      uri: 'https://rollingstone.com.br/media/_versions/ellen-pompeo-meredith-grey-greys-anatomy-reproducao_widelg.jpg'
    },

    {
      name: 'Luis',
      func: 'Pediatra',
      phoneNumber: '71 99999-9999',
      uri: 'https://rollingstone.com.br/media/_versions/ellen-pompeo-meredith-grey-greys-anatomy-reproducao_widelg.jpg'
    },


  ]


  return (
    <Provider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>

        {/* <DoctorsView
          data={doctors}
        /> */}

        <HomeView />



        {/* <CardMonitor
            value={85}
            unity={"BPM"}
            title={"Frequência cardíaca da gestante"}
            icon={HeartPulse}
            min={78}
            max={117}
            backgroundColor={"#FFE2E5"}
            iconColor={"#ff0000"}
          /> */}
        {/* <LastDataRegistered
            dataRegistered={
              <DataRegistered
                value={85}
                unity={"mg/dl"}
                status={"Normal"}
                date={"2024-07-17"}
                time={"16:35"}
                icon={BarChart2}
              />
            }
          /> */}


        {/* <Menu>
            <MenuItem
              icon={Home}
              title={"Home"}
              selected={true}
            />
            <MenuItem
              icon={BarChart2}
              title={"Refeições"}
              selected={false}
            />
            <MenuItem
              icon={User}
              title={"Perfil"}
              selected={false}
            />
            <MenuItem
              icon={Settings}
              title={"Config"}
              selected={false}
            />
          </Menu> */}



        {/* <SelectRefeicoes items={itensDoArray} /> */}
        {/* <CardInicial /> */}

      </ThemeProvider>
    </Provider >
  )
}

const itensDoArray = [
  { name: 'Café da manhã' },
  { name: 'Lanche' },
  { name: 'Almoço' },
  { name: 'Janta' },
]