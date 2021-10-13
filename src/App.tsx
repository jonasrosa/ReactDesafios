import React, { useState } from 'react';
import { Provider} from 'urql'

import GlobalStyle from './UI/global';


import { client } from './contexts/GraphqlClienteContext';

import {Container}  from './components/Container/';
import { Hedear,BoxText, Title,BoxSeach,InputSearch,Main } from './components/Styles/style';
import ListAtrtist from './components/ListArtist';

function App() {

  const[ArtistSearch, setArtistSeach]=useState("")



  return (
    <Provider value={client}>
    <GlobalStyle/>
    <Container>
    <Hedear>
    <BoxText>
                 <Title>Artistas do Spotify</Title>
                <BoxSeach>
                     <InputSearch placeholder="Buscar artista por nome... "
                        onChange={(e)=>setArtistSeach(e.target.value)}
                        
                     /> 
                </BoxSeach> 
             </BoxText>
    </Hedear>
    <Main>
      <ListAtrtist nameArtist={ArtistSearch}/>
    </Main>

    </Container>

 
    </Provider>
  );
}

export default App;
