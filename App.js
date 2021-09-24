import React from 'react'
import { CardConta, Container, Content, Header } from './src/components'

export default function App(props) {
	return (
		<Container>
			<Header name='Henrique Mota' {...props} />
			<Content {...props}>
				<CardConta amount={1250.65} />
			</Content>
		</Container>
	)
}
