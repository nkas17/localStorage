import React from 'react';
import DataShareExample from './customerDataShare/DataShareExample';

const App = () => (
	<React.Fragment>
		<header className="ao-header" >
			<div className="ao-header-brand">
				<a href="/portal/portal-content/#/">
					<img src="/aoenv/public/corp/aoui/v1/images/logo/LogoWhite.svg" alt="Auto-Owners Logo" crossOrigin="anonymous" />
				</a>
			</div>
		</header>
		<DataShareExample />
	</React.Fragment>
);

export default App;
