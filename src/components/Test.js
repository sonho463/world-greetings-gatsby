import React from "react";
import { useState, useEffect, useRef } from 'react';

import useSound from "use-sound";

const path = '../assets/voices/kor_bye.mp3';
const  Sound = import(path);
console.log(Sound);


export const Test = () => {

	const testVoice = new Audio('../assets/voices/kor_bye.mp3')

	const [play] = useSound(Sound)
	console.log('play')




	return (
		<>
		<h2>test</h2>

		<button onClick={play}>PLAY</button>

		</>
	)
}
