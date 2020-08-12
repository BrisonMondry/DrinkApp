import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
	ThemeProvider,
	createMuiTheme,
	Paper,
	Button,
} from "@material-ui/core";
import { Switch, Router } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { red } from "@material-ui/core/colors";
import { Sidebar } from "./Sidebar";
import { AppView } from "./AppView";

const PRIMARY_COLOR = "#F23C48";
const SECONDARY_COLOR = "#6C111F";
const SECONDARY_TINT = "#AAE02B";

const client = new ApolloClient({
	uri: "https://48p1r2roz4.sse.codesandbox.io",
	cache: new InMemoryCache(),
});

let theme = createMuiTheme({
	palette: {
		primary: {
			main: PRIMARY_COLOR,
		},
		secondary: {
			main: SECONDARY_COLOR,
			light: SECONDARY_TINT,
		},
		error: {
			main: red[600],
		},
	},
});

export const App: React.FC = () => {
	const [page, setPage] = useState("Main");
	return (
		<div>
			<CssBaseline />

			<ThemeProvider theme={theme}>
				<ApolloProvider client={client}>
					<React.Fragment>
						<Sidebar />
						<AppView />
					</React.Fragment>
				</ApolloProvider>
			</ThemeProvider>
		</div>
	);
};

export default App;
