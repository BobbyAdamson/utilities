import React from 'react';

/**
 * Create a table header row that react can render in a table
 * @param {Object[]} schema - Schema information
 * @param {string} Object[].valueKey - Key that the data will use to access the values 
 * @param {string} Object[].header - Copy to display for this column
 */
export const generateTableHeaderRow = (schema) => {
	const headers = schema.map((header) => { 
		return (
			<th key={`header-${header.valueKey}`} className={header.valueKey}><span>{header.header}</span></th> 
		);
	});

	return <tr>{headers}</tr>
}