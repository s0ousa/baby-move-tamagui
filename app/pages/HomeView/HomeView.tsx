import { Input } from "tamagui";
import { XStack } from "@tamagui/stacks";
import { Text, View } from "tamagui";
import { Search, MoveLeft } from "@tamagui/lucide-icons"
import { FlatList } from "react-native";
import CardDoctor from "app/components/CardDoctor";
import Profile from "app/components/Profile";


export function HomeView(props) {
    return (
        <Profile
            image={
                { url: " https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min-480x340.jpg " }
            }
            name="Sara"
        />
    )
}
