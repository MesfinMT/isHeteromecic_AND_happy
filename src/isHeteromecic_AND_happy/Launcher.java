package isHeteromecic_AND_happy;

public class Launcher {

	 public static void main(String[] args) {
			System.out.println("-------------------------------------------------------------------------");
			System.out.println("isHeteromecic");
			System.out.println("-------------------------------------------------------------------------");
			int[] input= {0,2,7,110,136,156};
			for(int i:input) System.out.println(isHeteromecic(i));
			System.out.println("-------------------------------------------------------------------------");
			System.out.println("happy or unhappy");
			System.out.println("-------------------------------------------------------------------------");
			int[] input2= {203,11,107};
			for(int i:input2) System.out.println(happyOrUnhappy(i));
	}
	 static String happyOrUnhappy(int n) {
		 
			int result=n;
			while(!(result==1 || result==4)) {
				char[] c=String.valueOf(result).toCharArray();
				result=0;
				for(int i=0;i<c.length;i++) {
					result+=Math.pow(Integer.parseInt(String.valueOf(c[i])),2);
				}
			}
			if (result==1) return "happy";
			else return "unhappy";
		}
	 static boolean isHeteromecic(int n) {
			int x=0;
			int result=0;
			while(result<n) {
				result=x*(x+1);
				x++;
			}
			if(result==n) return true;
			else return false;
			 
		}
}