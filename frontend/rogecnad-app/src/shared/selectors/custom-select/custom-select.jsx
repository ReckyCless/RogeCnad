import React from 'react';
import './custom-select.sass';

function CustomSelect({ data, onChange }) {
	return (
		<select className='custom-select' onChange={onChange}>
			{data.map((option) => (
				<option key={option.value} value={option.value}>
					{option.title}
				</option>
			))}
		</select>
	);
}

export default CustomSelect;
