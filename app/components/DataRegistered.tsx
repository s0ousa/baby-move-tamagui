import type { CardProps } from 'tamagui'
import { Card, XStack, YStack, Text } from 'tamagui'
import { BarChart2 } from '@tamagui/lucide-icons'



export function DataRegistered(props) {
    return (
        <Card elevate w={320} h={70} bordered >
            <Card.Header padded jc={'center'}>
                <XStack ai={'center'} jc={'space-between'} h={'100%'}>
                    <YStack ai={'center'}>
                        <Text fontWeight={'bold'} color={'$purple12'} fontSize={16} >{props.value}</Text>
                        <Text color={'$purple10'}>{props.unity}</Text>
                    </YStack>
                    <YStack ai={'center'} gap={2} >
                        <Text fontWeight={'bold'} color={'$purple12'} fontSize={16}> {props.status}</Text>
                        <Text color={'$purple10'}>{props.date} {props.time}</Text>
                    </YStack>
                    {<props.icon color={'$purple10'} />}
                </XStack>
            </Card.Header>
        </Card >
    )
}