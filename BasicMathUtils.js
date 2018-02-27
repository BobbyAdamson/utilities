/**
 * Returns sum of numbers passed
 * @param {number} numbers - Any amount of numbers you want to add
 * @returns {number} - Sum of all numbers passed
 */
export const sum = (...numbers) => {
	return numbers.reduce((sum, current) => {
		return sum + current;
	});
}

/**
 * Calculates porportion of total of some sub group
 * @param {number} subValue - Number sub group of total
 * @param {number} totalValue - Total
 * @returns {number} - Proportion represented by the subvalue of the total
 */
export const porportionOfTotal = (subValue, totalValue) => {
	return subValue / totalValue;
}