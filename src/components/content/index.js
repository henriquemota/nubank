import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

export function Content(props) {
	return (
		<View style={[styles.container]}>
			<ScrollView>{props.children}</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f3f3f3',
	},
})
