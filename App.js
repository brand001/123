import React, { Component } from "react";
import {
	StyleSheet,
	Text,
	View,
} from "react-native";

class App extends Component {
	constructor() {
		super();
		this.state = {

		};
	}



	componentDidMount() {

	}

	render() {

		return (
			<View style={styles.tests}>
				<Text>test</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	tests: {
		fontSize: 30,
		paddingTop: 100,
	}
});

export default App;
