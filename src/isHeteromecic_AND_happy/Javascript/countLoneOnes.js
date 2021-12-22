let a=[101,1191,1111,462];
let count=0;
for (let i=0;i<a.length;i++){
	console.log("countLoneOnes("+a[i]+") -> "+countLoneOnes(Array.from(String(a[i]), Number)));
}

function countLoneOnes(a) {
	count=0;
	    for(let i=0; i<a.length; i++) {
			if(i==0){
				if(a[i]!=a[i+1] && a[i]==1) {count++;}
			}
			else if(i==a.length-1){
				if(a[i]!=a[i-1] && a[i]==1) {count++;}
			}
			else if(a[i]!=a[i+1] && a[i]!=a[i-1] && a[i]==1) {count++;}
 		}
		return count;
}