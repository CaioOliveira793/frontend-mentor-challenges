import React from 'react';
import { Router, Redirect } from '@reach/router';

import Country from '../modules/Country';


const CountriesRoute: React.FC = () => {
	return (
		<Router>
			<Country path="/countries/:countryCode" />
			<Redirect from="/countries/*" to="/" noThrow />
		</Router>
	);
}

export default CountriesRoute;
