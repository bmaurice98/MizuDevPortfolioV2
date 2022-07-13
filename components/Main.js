import { Container } from '@chakra-ui/react'

import React from 'react'

const body = props.theme.body

const Main = () => {
  return (
        <Container className={`${body} w-full h-full`}>Main</Container>
  )
}

export default Main