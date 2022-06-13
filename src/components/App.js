import React from "react";
import { Router, Route, BrowserRouter, Routes } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import "../style/App.css";
import Header from "./Header";
import history from "../history";

const App = () => {
	return (
		<div className="ui container">
			<Router location={history.location} navigator={history}>
				<div>
					<Header />
					<Routes>
						<Route path="/" element={<StreamList />}>
							<Route index element={<StreamList />} />
							<Route path="streams">
								<Route path="new" element={<StreamCreate />} />
								<Route path="edit/:id" element={<StreamEdit />} />
								<Route path="delete/:id" element={<StreamDelete />} />
								<Route path=":id" element={<StreamShow />} />
							</Route>
						</Route>
					</Routes>
				</div>
			</Router>
		</div>
	);
};

export default App;
