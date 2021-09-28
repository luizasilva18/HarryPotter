import React from 'react'
import { Imge, BoxInicio, List, ListItem } from "./style"
export  function Header() {
return(
    <section>
    <BoxInicio>
    <Imge src="https://logodownload.org/wp-content/uploads/2017/07/harry-potter-logo-1.png" />
    </BoxInicio>
    <List>
      <ListItem>Personagens</ListItem>
      <ListItem>Filmes</ListItem>
      <ListItem>Loja</ListItem>
    </List>
    </section>
)
}