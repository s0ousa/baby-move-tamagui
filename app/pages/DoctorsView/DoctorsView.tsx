import { Input } from "tamagui";
import { XStack } from "@tamagui/stacks";
import { Text, View } from "tamagui";
import { Search, MoveLeft } from "@tamagui/lucide-icons"
import { FlatList } from "react-native";
import CardDoctor from "app/components/CardDoctor";


export function DoctorsView(props) {

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
        <View mt={60} f={1} gap={20}>

            <XStack w={'100 %'} ai={'center'} mb={24}>
                <MoveLeft mx={20} />
                <Text fontSize={26} fontWeight={'bold'}>Médicos</Text>
            </XStack>
            <XStack ai={'center'} jc={'center'} gap={10}  >
                <  Search />
                <Input bg={'$colorTransparent'} size={'$5'} w={320} placeholder={`Pesquise por um médico`} />

            </XStack>

            <View width={'100%'} alignItems='center'>
                <FlatList
                    data={doctors}
                    renderItem={({ item }) => <CardDoctor {...item} />}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
}
