import React, {useState} from 'react'
import { Button } from '../../components/Form/Button'
import { Input } from '../../components/Form/input'
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton'
import { CategorySelect } from '../../components/CategorySelect'
import {
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransacitonsTypes
} from './styles'


export function Register(){
    const [trasactionType, setTransactionType] = useState('')
    function handleTrasanctionTypeSelect(type: 'up' | 'down'){
        setTransactionType(type)
    }

    return(
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>
        <Form>
            <Fields>
            <Input 
                placeholder='Nome'
            />
            <Input 
                placeholder='Preço'
            />
            < TransacitonsTypes>
            <TransactionTypeButton
                type='up'
                title='income'
                onPress={() => handleTrasanctionTypeSelect('up')}
                isActive={trasactionType === 'up'}
            />
            <TransactionTypeButton
                type='down'
                title='outcome'
                onPress={() => handleTrasanctionTypeSelect('down')}
                isActive={trasactionType === 'down'}
            />
            </TransacitonsTypes>
            <CategorySelect title="Categoria" />
            </Fields>
            <Button title="Enviar" />
        </Form>    
        </Container>
    )
}