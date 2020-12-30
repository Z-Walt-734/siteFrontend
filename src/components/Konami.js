import { useEffect, useState } from 'react';
import KeyLogger from './KeyLogger';

const code = [
	"ArrowUp",
	"ArrowDown",
	"ArrowUp",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight",
	"ArrowLeft",
	"ArrowRight",
	"KeyB",
	"KeyA",
];

const Konami = () => {
	//init count state at 0
	const [count, setCount] = useState(0);

	//init success at false
	const [success, setSuccess] = useState(false);
	const key = KeyLogger();

	useEffect(() => {
		//look for open
		if(key == null) return;
		//look for wrong
		if(key !== code[count]) {
			setCount(0);
			return
		}

		//count update
		setCount((state) => state +1);
		if(count + 1 === code.length){
			setSuccess(true);
		}
	}, [key]);
	return success;
}

export default Konami;