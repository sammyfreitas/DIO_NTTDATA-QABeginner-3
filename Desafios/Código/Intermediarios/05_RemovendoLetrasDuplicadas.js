const s = gets(); 

	let result = ''; 
  

	for (let index = 0; index < s.length; index++) { 

		const str = s[index]; 

		if (result.includes(str)) continue; 

  

		while (str === result) { 
			 result = result.slice(0, -1); 

		} 
		result += str 
	} 

	print(result);