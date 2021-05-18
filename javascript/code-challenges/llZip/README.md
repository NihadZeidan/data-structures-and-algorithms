# ZIP LinkedLists



## Challenge Summary
To create a function that will take in two LLs and return them combined


## Approach & Efficiency
`zipLists(firstLL, secondLL)` ---> takes in two different LLs, start with creating new LL, and define the current value for both of the LLs provided as `head`, start a while loop whenever the current of both LLs have a value, in the loop check if the current for each LL still has a value and if true insert the value to the new LL starting form first LL value (to insert the head from the first LL), and update the current for each LL, if false exit the while loop and return the new LL. 




## Solution

- call the function `zipLists(firstLL, secondLL)`
- it will return to you new LL holds values form both LLs combined.


## Whiteboard Process
![](../../../assets/ll-zip.png)


