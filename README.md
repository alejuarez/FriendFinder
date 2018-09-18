# FriendFinder - Node and Express Servers

Welcome to Friend Finder! Please answer the following questions so that we will match it to the database and help you find the perfect friend. A match made in heaven ;)

### Initial screen:

![initialscr](https://user-images.githubusercontent.com/38407626/45654817-556a3d80-baab-11e8-80ea-54226dc60705.PNG)

Click on Start Survey


### Survey screen:

![surveyq](https://user-images.githubusercontent.com/38407626/45654809-48e5e500-baab-11e8-93d8-1c2d1a59bfc3.PNG)

There are 10 questions to evaluate your answers against our file. The way we determine the match is by taking each of your answers and comparing them with every answer we have from every person in the file.  
For example: - User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]` - User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]` - Total Difference: **2 + 1 + 2 =** **_5_**
- The closest match will be the user with the least amount of difference.


### Results screen:

![friend result](https://user-images.githubusercontent.com/38407626/45655082-623b6100-baac-11e8-9e64-5bf5456a2809.PNG)

Once we have found the person most compatible to you, it will appear a pop-up window with the name and picture of the closest match.


### API Link Friends screen:

![resultssaved](https://user-images.githubusercontent.com/38407626/45655084-69626f00-baac-11e8-840f-da60d0b4c08a.PNG)

If you pressed this link, you can see the new additions in the file.
