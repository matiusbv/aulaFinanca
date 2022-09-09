import React from 'react';
import { FlatList } from 'react-native';
import { Button } from '../../components/Form/Button'
import { categories } from '../../utils/categories';

import {
    Container,
    Header,
    Title,
    Category,
    Icon,
    Name,
    Separator,
    Footer,
} from './styles'


export function CategorySelect(){
    return(
      <Container>
        <Header>
            <Title>Categoria</Title>
        </Header>
      </Container>
    )
}