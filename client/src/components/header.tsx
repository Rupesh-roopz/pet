import React from 'react';

const Header = () => {
	return (
		<div
			style={{
				width : '100%',
				background : 'linear-gradient(66deg, rgba(255,59,251,1) 5%, rgba(255,204,221,1) 49%, rgba(218,119,206,1) 94%)',
				display : 'flex'
			}}
		>
			<h4 style={{ 
				margin : 'auto 0',
				fontFamily : 'Dancing Script', 
				fontSize : '3.5rem', 
				paddingLeft : '5%', 
				paddingTop : '11px',
				paddingBottom : '11px',
				fontWeight : 'bold',
				textShadow : '2px 2px #b5d4f7',
				color : '#bf0bb6'
			}}
			>
				Personal Expense Tracker
			</h4>
            
		</div>
	);
};

export default Header;