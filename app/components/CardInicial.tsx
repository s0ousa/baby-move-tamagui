import type { CardProps } from 'tamagui'
import { Card, XStack, YStack, Text } from 'tamagui'
import { BarChart2 } from '@tamagui/lucide-icons'


export function CardInicial(props) {

    return (
        <Card elevate w={320} h={140} bordered mt="$15"  >
            <Card.Header padded jc={'center'}>
                <XStack><Text>Oi</Text></XStack>
            </Card.Header>
        </Card >
    )
}