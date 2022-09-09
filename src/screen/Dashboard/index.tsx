import React from 'react';
import { Feather } from '@expo/vector-icons'
import { 
        Container,
        Header,
        UserWrapper,
        UserInfo,
        Photo,
        User,
        UserGreeting,
        UserName,
        Icon,
        HighlightCards,
        Transactions,
        Title,
        TransactionList
    } from './styles';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

export interface DataListProps extends TransactionCardProps {
    id: string
}

export function Dashboard(){



        const data: DataListProps[] = [
            {
            id: '1',
            type: 'positive',
            title: "Desenvolvimento de site",
            amount: "R$ 12.000,00",
            category: {
                name: 'vendas',
                icon: 'dollar-sign'
            },
            date: "13/04/2022"
        },
    
        {
            id: '2',
            type: 'negative',
            title: "Hamburgueria Pizzy",
            amount: "R$ 59,00",
            category: {
                name: 'Alimentação',
                icon: 'coffee'
            },
            date: "13/04/2022"
        },
    
        {
            id: '3',
            type: 'negative',
            title: "Aluguel do apartamento",
            amount: "R$ 1.200,00",
            category: {
                name: 'Casa',
                icon: 'shopping-bag'
            },
            date: "13/04/2022"
        },
    
    ];

    return(
            <Container>
                <Header>
                    <UserWrapper>
                    <UserInfo>
                    <Photo source={{uri:'https://github.com/matiusbv.png'}} />
                        <User>
                            <UserGreeting>Olá, </UserGreeting>
                            <UserName>Márcio</UserName>
                        </User>
                    </UserInfo>
                    <Icon name="power" />
                    </UserWrapper>
                </Header>
                <HighlightCards

                >
                    <HighlightCard
                        type='up'
                        title='Entradas'
                        amount="R$ 17.400,00"
                        lasTransaction='Última entrada dia 13 de abril'
                    />
                    <HighlightCard 
                        type='down'
                        title='Saídas'
                        amount='R$ 1.259,00'
                        lasTransaction='Última saída de 03 de abril'
                    />
                    <HighlightCard
                        type='total' 
                        title='Total'
                        amount= 'R$ 16.141,00'
                        lasTransaction='01 à 16 de abril'
                    />
                </HighlightCards>
                    <Transactions>
                        <Title>Listagem</Title>
                        <TransactionList 
                            data={data}
                            keyExtractor={(item: any) => item}
                            renderItem={({ item }) => <TransactionCard data={item} />}
                            
                        />
                    </Transactions>
            </Container>
    )
}