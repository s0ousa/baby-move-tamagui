import { XStack, Text, View } from "tamagui";

export function Menu({ children }) {
    return (
        <XStack ai="center" jc="space-around" w="100%" h={80} bg="$purple2" position="absolute"
            bottom={0}
        >
            {children}
        </XStack>
    )

}