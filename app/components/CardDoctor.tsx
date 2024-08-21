import { Image } from "tamagui";
import { XStack, YStack } from "@tamagui/stacks";
import React from "react";
import { Text } from "tamagui";

//import breakFastImage from "src\components\semanticComponents\breakfast.jpg";
interface Doctor {
    name: string,
    func: string,
    phoneNumber: string
}
export default function ViewList(props: Doctor) {
    return (
        <XStack w={320} jc={"flex-start"} br={16} bw={1} bc={'$gray8'} my={10}>
            <Image btlr={16} bblr={16}

                source={{
                    uri: "https://img.imageboss.me/revista-cdn/cdn/41938/7d8429c45731acf5a27316ce946ece4f005b8947.jpg?1666045869",
                    width: 120,
                    height: 119
                }}
            />
            <YStack ml={25} mt={12} gap={5} >
                <Text fontSize={18} fontWeight={'bold'}> {props.name} </Text>
                <Text fontSize={16}> {props.func} </Text>
                <Text fontSize={16} > {props.phoneNumber} </Text>
            </YStack>
        </XStack >
    );
}
