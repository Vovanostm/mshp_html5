// script for evaluate class .text to text

if(document.getElementsByClassName) {

	getElementsByClass = function(classList, node) {    
		return (node || document).getElementsByClassName(classList)
	}

} else {

	getElementsByClass = function(classList, node) {			
		var node = node || document,
		list = node.getElementsByTagName('*'), 
		length = list.length,  
		classArray = classList.split(/\s+/), 
		classes = classArray.length, 
		result = [], i,j
		for(i = 0; i < length; i++) {
			for(j = 0; j < classes; j++)  {
				if(list[i].className.search('\\b' + classArray[j] + '\\b') != -1) {
					result.push(list[i])
					break
				}
			}
		}
	
		return result
	}
}

var elements = getElementsByClass('text');
for (i=0; i< elements.length; i++)
{
	console.log(i);
	str = elements[i].innerHTML.toString();
	console.log(str);
	nstr='';
	for (j=0; j<str.length; j++)
	{
		var tmp = str[j];
		if ((tmp == '<')&&(str[j+1]=='b')&&(str[j+2]=='r')) {nstr+='<br>';j=j+3;}
		else if (tmp=='<') nstr +='&lt;';
		else if (tmp=='>') nstr += '&gt;';
		else nstr = nstr+str[j]; 

	}
	console.log(nstr);
	elements[i].innerHTML = nstr;
}



