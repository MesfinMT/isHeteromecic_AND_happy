let a=[[3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2],[1, 7, 1, 7, 1, 7, 1],[9, 5, 9, 5, 1, 1, 1],[5, 6, 6, 7, 6, 3, 9],[4, 4, 4, 9, 9, 9, 9],[5, 5, 5]];
let count=0;
for (let i=0;i<a.length;i++){
	console.log(boomerang(a[i]));
}

function boomerang(a) {
	count=0;
	result="";
        for(let i=0; i<a.length-2; i++) {
          if((a[i]<a[i+1] && a[i+1]>a[i+2] && a[i]==a[i+2]) || (a[i]>a[i+1] && a[i+1]<a[i+2] && a[i]==a[i+2]))
            { 
		count++;
				if(result=="")	result="["+a[i]+", "+a[i+1]+", "+a[i+2]+"]";
				else result+=", ["+a[i]+", "+a[i+1]+", "+a[i+2]+"]";
			}
 		}
		 if(count==0) return "0 boomerangs count"
		 else return count+" boomerangs (from left to right): "+result;
}