# arraySumChallange
Challange: 
  
  -Given an array of 5 integers return true if the sum of any combination of the integers, excluding the largest integer, can equal the largest integer.
 
Implementation:
  
  -I began by sorting the array and popping the largest off the end into it's own variable. I then analyzed how many different comparisons I could make and how to implement them. Because our array now has 4 elements we can sum all 4, test unique sums of 3 integers and 2 integers. To sum subarray elements I created a function called reduce. We recursively add the elements together from the subarray to return to total for comparision.
  
Obstacles:
  
  -If we were to change the size of the passed in array our current logic would not stand. To create our unique subarrays for summation I implemented a for loop and a nesteed for loop. While these could already be combined our underlying problem is how would we select multiple unique elements to either remove from the whole or test themselves.
  
  -I've also run into a problem where my where clause that initally surrounded the bulk of the logic waiting for total to equal largest has failed to catch. I have debugged for inconsistencies and incorrect type comparisons. It may have something to do with variable type, but I am unsure. I have manually tested the comparison in the where block, but the original conditional seems to only care about the initial values.
	
Other Notes:

	-I've contemplated on changing the logic to where I check permuations, but in theorizing my attempts to create a permuation seem to be equally as difficult and would likely slow down the processes drasticly. I would need to look at others solutions and possibly utilize a hashmap or dictionary to preserve previous logic and save time.
