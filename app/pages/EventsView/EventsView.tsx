import { Input } from "tamagui";
import { XStack } from "@tamagui/stacks";
import { Text, View } from "tamagui";
import { Search, MoveLeft } from "@tamagui/lucide-icons"
import { FlatList } from "react-native";
import CardDoctor from "app/components/CardDoctor";
import CardEvent from "app/components/CardEvent";


export function EventsView(props) {

    return (
        <View mt={60} f={1}>
            <XStack w={'100 %'} ai={'center'} mb={24}>
                <MoveLeft mx={20} />
                <Text fontSize={26} fontWeight={'bold'}>Ocorrências</Text>
            </XStack>

            <View ai={"center"} gap={16}>
                <CardEvent
                    event={"Sintomas"}
                    label={"Digite um novo sintoma"}
                    listEvents={["Dor de cabeça", "Febre", "Diarréia"]}
                    color="#FFF4E4"
                />
                <CardEvent
                    event={"Medicações"}
                    label={"Digite um novo sintoma"}
                    listEvents={["Dor de cabeça", "Febre", "Diarréia"]}
                    color="#C9BFFE"
                />
                <CardEvent
                    event={"Doenças"}
                    label={"Digite um novo sintoma"}
                    listEvents={["Dor de cabeça", "Febre", "Diarréia"]}
                    color="#FECACA"
                />
            </View>

        </View>
    );
}
