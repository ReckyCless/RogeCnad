import React from 'react';
import './custom-select.sass';

type CustomSelectorData = {
	value: string;
	title: string;
};

type CustomSelectorProps = {
	data: CustomSelectorData[];
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

function CustomSelect({ data, onChange }: CustomSelectorProps) {
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
