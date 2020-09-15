import React from 'react';
import { withPrefix } from "gatsby"
import { Router, Redirect } from '@reach/router';

import Country from '../modules/Country';


const CountriesRoute: React.FC = () => {
	return (
		<Router>
			<Country path={withPrefix('countries/:countryCode')} />
			<Redirect from={withPrefix('countries/*')} to={withPrefix('/')} noThrow />
		</Router>
	);
}

export default CountriesRoute;
