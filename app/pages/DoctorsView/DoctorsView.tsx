import { Input } from "tamagui";
import { XStack } from "@tamagui/stacks";
import { Text, View } from "tamagui";
import { Search, MoveLeft } from "@tamagui/lucide-icons"
import { FlatList } from "react-native";
import CardDoctor from "app/components/CardDoctor";


export function DoctorsView(props) {
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
                    data={props.data}
                    renderItem={({ item }) => <CardDoctor {...item} />}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
}
