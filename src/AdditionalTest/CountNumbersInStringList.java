
    public class CountNumbersInStringList {
        public static void main(String[] args) {
            String input = "2,h,6,u,y,t,7,j,y,h,8";
            System.out.println("Number of numbers: " + countNumbers(input));
        }
    
        public static int countNumbers(String input) {
            String[] elements = input.split(",");
            int count = 0;
            
            for (String element : elements) {
                if (element.matches("[0-9]+")) {
                    count++;
                }
            }
            return count;
        }
    }
    

