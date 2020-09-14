import React from 'react';
import { Router, Redirect } from '@reach/router';

import Fallback from '../pages/index';

import Country from '../modules/Country';


const CountriesRoute: React.FC = () => {
	return (
		<Router basepath="/countries">
			<Country path="/:countryName" />
			{/* <Fallback default /> */}
			{/* <Redirect from="/*" to="/nepal" noThrow /> */}
		</Router>
	);
}

export default CountriesRoute;
