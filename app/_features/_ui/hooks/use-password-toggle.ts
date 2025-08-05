import { useState } from 'react';

export const usePasswordToggle = () => {
	const [visible, setVisible] = useState(false);

	const toggleVisibility = () => {
		setVisible((prev) => !prev);
	};

	return {
		isVisible: visible,
		toggleVisibility,
	};
};
