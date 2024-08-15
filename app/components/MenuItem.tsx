import { YStack, Text, View } from "tamagui";

export function MenuItem(props) {
    return (
        <YStack w={84} h={80} ai={"center"} jc={"center"} gap={2}>
            <View
                px={22}
                py={8}
                ai={"center"}
                jc={"center"}
                br={18}
                bg={props.selected ? "$purple4" : "transparent"}
            >

                {<props.icon />}

            </View>

            <Text fontWeight={'bold'}>{props.title}</Text>
        </YStack>
    )
}