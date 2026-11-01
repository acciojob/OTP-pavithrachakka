//your JS code here. If required.
const codes=document.querySelectorAll('.code');
codes[0].focus();
codes.foreach((code,idx)=>{
	code.addEventListener('input',()=>{
		code.value=code.value.replace(/[^0-9]/g, '').slice(-1);
		if(code.value!==''&& idx<codes.length-1){
			codes[idx+1].focus();
		}
	});
	code.addEventListener('keydown',(e)=>{
		if(e.key==='Backspace'){
			if(code.value===''){
				if(idx>0){
					codes[idx-1].focus();
					codes[idx-1].value='';
					e.preventDefault();
				}
			}else{
				setTimeout(()=>{
					if (idx>0){
						codes[idx-1].focus();
					}
				},10);
			}
		}else if(e.key>='0'&& e.key<='9'){
			code.value='';
		}
	});
});
