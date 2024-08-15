import React, { useState } from 'react';
import { Button, Dialog, Paragraph, YStack, XStack, Fieldset, Label } from 'tamagui';
import { SelectRefeicoes } from './SelectRefeicoes';

export const ModalTeste = () => {

    const items = [
        { name: 'Café da manhã' },
        { name: 'Lanche' },
        { name: 'Almoço' },
        { name: 'Janta' },
    ]

    const [isDialogVisible, setIsDialogVisible] = useState(false);

    const showDialog = () => setIsDialogVisible(true);
    const hideDialog = () => setIsDialogVisible(false);

    return (
        <YStack f={1} jc="center" ai="center">
            <Button onPress={showDialog}>Show Modal</Button>

            <Dialog open={isDialogVisible} onOpenChange={setIsDialogVisible} >
                <Dialog.Portal>
                    <Dialog.Overlay bg="rgba(0, 0, 0, 0.5)" />
                    <Dialog.Content
                        bordered
                        elevate
                        br="$4"
                        p="$4"
                        backgroundColor="white"
                        w={350}
                    >
                        <Dialog.Title size={'$7'}>
                            Adicionar refeição
                        </Dialog.Title>
                        <YStack mt={'$5'}>
                            <Fieldset gap="$4" horizontal >
                                <Label width={80} justifyContent="flex-end" htmlFor="name">
                                    Refeição
                                </Label>

                                <SelectRefeicoes items={items} />

                            </Fieldset>
                            <XStack mt="$4" jc="flex-end">
                                <Button onPress={hideDialog}>Ok</Button>
                            </XStack>
                        </YStack>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog>
        </YStack>
    );
};

