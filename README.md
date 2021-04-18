# MyTechnicalJournal
Have you ever encountered a challenge while working on a project that you know you've dealt with before?  Do you wish you had a record of what you did to solve the problem?  Have you ever been asked about your development projects only to come up blank?  Have you ever seen an error code that you are certain you have seen before, but forgot what it meant?  My Technical Journal gives you a single place to record everything and with our dynamic keyword searches and links you can easily retrieve what you need.

We often encounter challenges while working on a project that we've encountered before.  When you finally find a solution, you move on. You might write down some notes here or there, or bookmark a link to something you think you will need later. A lot of time gets wasted trying to find these things again or lookup something you know you already have in the past.

### Organize and Keep All of Your Projects, Notes, Lessons Learned, Videos and Links.
![image](https://user-images.githubusercontent.com/72178817/115159936-b4c5cb00-a063-11eb-8e8e-dd33fafc28c3.png)

### Use the Dynamic Search Bar to Filter By Multiple Keyword
![image](https://user-images.githubusercontent.com/72178817/115160212-0884e400-a065-11eb-896d-d8a2316ea09f.png)

### Full Rich Text Editor
![image](https://user-images.githubusercontent.com/72178817/115159763-ab882e80-a062-11eb-9b81-8e38169211b3.png)

### You Can Even Copy and Paste Images Right Into The Editor
![image](https://user-images.githubusercontent.com/72178817/115159626-171dcc00-a062-11eb-8ccb-2707783995a3.png)

### Keep Track of Your Favorite Videos and Watch Them Right in the App
![image](https://user-images.githubusercontent.com/72178817/115159787-da060980-a062-11eb-8a4e-8d66ebe8ad6c.png)

### Keep Track of Important Project Information
![image](https://user-images.githubusercontent.com/72178817/115160106-711f9100-a064-11eb-879e-2ece095902d6.png)

# To Use this Application
Fork the repository on GitHub and clone your newly created repo down to your computer.

Change to the repo directory and run the following commands:
<pre>npm install</pre>

Navigate to the db directory and change the following where necessary:
<pre>
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mtj'
});
</pre>

#### IF YOU DON'T DO THIS YOU WON'T SEE ANYTHING WHEN YOU RUN THE PROGRAM ###
Then run the following command (use whichever is applicable to your MySQL instance:  
_NO PASSWORD_
<pre>mysql -u root < mySQLSchema.sql</pre>
_WITH PASSWORD_
<pre>mysql -u root -p < mySQLSchema.sql</pre>

Navigate back to the root directory and run the following command:
<pre>npm run build</pre>
Then from a new terminal window navigate to the repo directory and run the final command:
<pre>npm start</pre>

# Future Enhancements
Edit Previous Entries
Delete Previous Entries
Tutorial Module

# Contributors
Micah Silverman https://github.com/afitnerd  
Stephen H. Hyde https://github.com/birdhighway  
Jihang Li https://github.com/jihangli10  
Phil Teves https://github.com/philteves  
Joseph Haller https://github.com/joehaller  

