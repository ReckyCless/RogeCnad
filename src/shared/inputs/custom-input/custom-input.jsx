import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import SearchIcon from '@mui/icons-material/Search';
import './custom-input.sass';

export function CustomInput({
	type,
	value,
	onChange,
	placeholder,
	style,
	iconStyle,
}) {
	const [show, setShow] = useState(false);

	const handleChangeVisibility = () => {
		setShow(!show);
	};
	console.log(style);
	if (type === 'password') {
		return (
			<div className='custom-input_container'>
				<input
					value={value}
					onChange={onChange}
					className='custom-input'
					type={show ? 'text' : 'password'}
					placeholder={placeholder}
					style={{ ...style }}
				/>
				<IconButton
					className='custom-input_icon'
					onClick={handleChangeVisibility}
				>
					{show ? <VisibilityOffIcon /> : <VisibilityIcon />}
				</IconButton>
			</div>
		);
	}

	if (type === 'search') {
		return (
			<div className='custom-input_container'>
				<input
					value={value}
					className='custom-input'
					onChange={onChange}
					type={type}
					placeholder={placeholder}
					style={{ ...style }}
				/>
				<IconButton
					className='custom-input_icon'
					onClick={() => console.log('search...')}
					style={{ ...iconStyle }}
				>
					<SearchIcon
						sx={{
							color: 'white',
						}}
					/>
				</IconButton>
			</div>
		);
	}

	return (
		<input
			value={value}
			className='custom-input'
			onChange={onChange}
			type={type}
			placeholder={placeholder}
			style={{ ...style }}
		/>
	);
}
