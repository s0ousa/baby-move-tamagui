import { Card, XStack, YStack, Text, View } from 'tamagui'
import { HeartPulse } from "@tamagui/lucide-icons"


export function CardMonitor(props) {
    return (
        <Card w={320} h={140} bg={props.backgroundColor} my={8}>
            <Card.Header>
                <Text fontSize={16} fontWeight={'bold'}>{props.title}</Text>
                <XStack mt={12} ml={8} ai={'center'} jc={'space-between'} >
                    <YStack gap={4} ml={-8}>
                        <XStack ai={'baseline'} gap={2} >
                            <Text fontSize={24}>{props.value}</Text>
                            <Text fontSize={16}>{props.unity}</Text>
                        </XStack>

                        <Text>Min: {props.min} {props.unity}  Máx: {props.max} {props.unity}</Text>
                    </YStack>

                    <YStack ai={'center'} >
                        {<props.icon size={52} color={props.iconColor} />}
                    </YStack>
                </XStack>
            </Card.Header>
        </Card>
    )
}