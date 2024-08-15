import { Button, Card, CardFooter, H2, H3, H4, Text } from "tamagui"
import { DataRegistered } from "./DataRegistered"
import { BarChart2 } from "@tamagui/lucide-icons"


export function LastDataRegistered(props) {
    return (
        <Card>
            <Card.Header ai={'center'} bw={"$0.5"} br={20} bc={'$purple8'}>
                <H4 mb={16} >Último valor medido</H4>
                {props.dataRegistered}
                <Card.Footer mt={16}>
                    <Button elevate w={320} h={50} bg={"$purple10"} color={"white"} fontWeight={'bold'}>Ver Histórico </Button>
                </Card.Footer>

            </Card.Header>
        </Card >
    )
}