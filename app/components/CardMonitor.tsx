import { Card, XStack, YStack, Text,  View } from 'tamagui'
import { HeartPulse } from "@tamagui/lucide-icons"


export function CardMonitor(props) {
    return (
        <Card w={320} h={140}>
            <Card.Header>
                <Text fontSize={16} fontWeight={'bold'}>Frequência cardíaca da gestante </Text>
               <XStack mt={17} gap={32} ai={'center'}>
                   <YStack gap={4} >
                       <XStack ai={'baseline'} >
                           <Text fontSize={24}>72</Text>
                           <Text fontSize={16}>BPM</Text>
                       </XStack>

                       <Text>Min: 78 BPM Máx: 117 BPM</Text>
                   </YStack>

                   <YStack ai={'center'} >
                       <HeartPulse size={56} color={'$red8'} />
                       <Text>Ver detalhes</Text>
                   </YStack>
               </XStack>
            </Card.Header>
        </Card>
    )
}