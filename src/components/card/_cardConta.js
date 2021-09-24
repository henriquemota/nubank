import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Card } from '.'

export function CardConta({ amount = 0.0, ...props }) {
	return (
		<Card {...props}>
			<Text style={[styles.label, styles.title]}>Conta</Text>
			<Text style={[styles.label, styles.value]}>R$ {amount.toLocaleString('pt-BR')}</Text>
			<ScrollView horizontal>
				<Button icon='qrcode' text='Pix' />
				<Button icon='barcode' text='Pagar' />
				<Button icon='windowso' text='Transferir' />
				<Button icon='windowso' text='Depositar' />
				<Button icon='windowso' text='Receber dinheiro' />
			</ScrollView>
			<BarButton icon='qrcode' text='Meus cartões' />
		</Card>
	)
}

function Button({ icon = 'qrcode', text = 'NA' }) {
	return (
		<TouchableOpacity style={styles.button}>
			<View style={styles.buttonImageContainer}>
				<AntDesign name={icon} size={24} color='black' />
			</View>
			<Text style={[styles.label, styles.buttonLabel]}>{text}</Text>
		</TouchableOpacity>
	)
}

function BarButton({ icon = 'qrcode', text = 'na' }) {
	return (
		<TouchableOpacity style={styles.barButton}>
			<AntDesign name={icon} size={24} color='black' style={styles.barButtonIcon} />
			<Text style={[styles.label, styles.barButtonLabel]}>{text}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	label: {
		fontSize: 24,
		fontWeight: '600',
		marginBottom: 16,
	},
	title: {
		fontSize: 20,
	},
	value: {},
	button: {
		margin: 16,
		marginLeft: 8,
		marginRight: 8,
		alignItems: 'center',
	},
	buttonImageContainer: {
		marginBottom: 12,
		backgroundColor: '#e3e3e3',
		padding: 24,
		borderRadius: 50,
	},
	buttonLabel: {
		fontSize: 16,
	},
	barButton: {
		backgroundColor: '#e3e3e3',
		flexDirection: 'row',
		alignItems: 'center',
		padding: 24,
		margin: 16,
		borderRadius: 8,
	},
	barButtonIcon: {
		marginRight: 16,
	},
	barButtonLabel: {
		fontSize: 16,
		marginBottom: 0,
	},
})
