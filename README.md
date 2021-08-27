# How to run
node index [command] [parameter]
## Commands
- `longestSubstringWithoutRepeatingCharacters` prints the length of the longest substring without repeating characters
- `backwards` prints the string backwards
- `generateRandomString` prints a random string
- `strongPassword` prints the number of characters needed to be added to make a strong password

### Examples  
`node index longestSubstringWithoutRepeatingCharacters abccc`


## reduceString
Reduce a string of lowercase characters in range ascii[‘a’..’z’] to its shortest length by doing a series of operations. In each operation, select a pair of adjacent lowercase letters that match, and delete them. For instance, the string 'aab' could be shortened to 'b' in one operation.
Delete as many characters as possible using this method and print the resulting string. If the final string is empty, print 'Empty String'


### Sample Inputs
Sample Input 0  
aaabccddd    
Sample Output 0  
abd    
Explanation 0  
aaabccddd → abccddd → abddd → abd    
Sample Input 1  
aa  
Sample Output 1  
Empty String  
Explanation 1  
aa → Empty String    
Sample Input 2  
baab  
Sample Output 2  
Empty String  
Explanation 2  
baab → bb → Empty String

## strongPassword
A password is considered strong if its length is at least 6 (by default) and it contains at least one digit, at least one lowercase English character, at least one uppercase English character, and at least one special character. Given a string, return the minimum number of characters that must be added to make a strong password.  
numbers = "0123456789"  
lower_case = "abcdefghijklmnopqrstuvwxyz"  
upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"  
special_characters = "!@#$%^&*()-+"  


### Sample Inputs  
Sample Input 0: Ab1  
Sample Output 0: 3  
Sample Input 1: #VisualStudio  
Sample Output 1: 1  