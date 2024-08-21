import { Input, ScrollView, YStack } from "tamagui";
import { XStack } from "@tamagui/stacks";
import { Text, View } from "tamagui";
import { Search, MoveLeft, Home, BarChart2, User, Settings } from "@tamagui/lucide-icons"
import { FlatList } from "react-native";
import CardDoctor from "app/components/CardDoctor";
import Profile from "app/components/Profile";
import Notification from "app/components/Notification";
import { Bell, HeartPulse } from "@tamagui/lucide-icons";
import { CardMonitor } from "app/components/CardMonitor";
import { Menu } from "app/components/Menu";
import { MenuItem } from "app/components/MenuItem";


export function HomeView(props) {
    return (
        <View f={1}>
            <XStack mt={60} mx={'auto'} ai={"center"} jc={"space-between"} w={'90%'}>
                <Profile
                    image={
                        {
                            url: require("../../../assets/images/grey.jpg")
                        }
                    } name="Sara"
                />
                <Notification
                    icon={Bell}
                    count={5}
                />
            </XStack>

            <Text mt={16} ml={24} fontSize={18}> 10 de Julho, 2024</Text>

            <YStack ai={"center"} gap={16} mt={24}>
                <CardMonitor
                    value={85}
                    unity={"BPM"}
                    title={"Frequência cardíaca da gestante"}
                    icon={HeartPulse}
                    min={78}
                    max={117}
                    backgroundColor={"#FFE2E5"}
                    iconColor={"#ff0000"}
                />


                <CardMonitor
                    value={85}
                    unity={"BPM"}
                    title={"Frequência cardíaca da gestante"}
                    icon={HeartPulse}
                    min={78}
                    max={117}
                    backgroundColor={"#FFE2E5"}
                    iconColor={"#ff0000"}
                />

                <CardMonitor
                    value={85}
                    unity={"BPM"}
                    title={"Frequência cardíaca da gestante"}
                    icon={HeartPulse}
                    min={78}
                    max={117}
                    backgroundColor={"#FFE2E5"}
                    iconColor={"#ff0000"}
                />
            </YStack>




            <Menu>
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
            </Menu>


        </View>




    )
}
