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