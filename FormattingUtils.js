/**
 * Format a raw number as a USD amount
 * @param {number} amount - Dollar amount
 * @returns {string} - Dollar amount formatted in the standard USD representation with a prefixed $, commas and 2 decimal places
 */
export const formatUsd = (amount) => {
	const
		locale = 'en-US',
		opts = { style: 'currency', currency: 'USD', minimumFractionDigits: 2},
		formattedAmount = typeof Intl === 'undefined' 
			? new Intl.NumberFormat(locale, opts)
			: amount.toLocaleString(locale, opts);
    
	return formattedAmount;
}

/**
 * Formats a proportion to a percentage truncated to your desired amount
 * @param {number} proportion - Some number between/equal to 0 and 1
 * @param {number} precision - How many decimal places you want returned, defaults to 2
 * @returns {number}
 */
export const formatPercentage = (proportion, precision = 2) => {
	return precisionRound(proportion * 100, precision);
}

/**
 * Rounds a number to a desired decimal place
 * @param {number} number - Number to round
 * @param {number} precision - How many decimal places you want returned, defaults to 2
 * @returns {number} - Same number rounded and truncated to precision decimal places
 */
const precisionRound = (number, precision) => {
	const factor = Math.pow(10, precision);
	return Math.round(number * factor) / factor;
}