#TinyVerse API

##TinyVerse service
API to database of short bible verses along with a devotional commentary.
Database of short bible verses, twitter style</p>
<p>Data fields:</p>
Id, shortverse, bibleref, commentary.

<p>MEAN Stack application</p>
<p>Initially this will be a rough crud API only. Later we will add better back-end tools using AngularJS and Bootstrap Styling</p>

###Version 1
<p>No separation. All Mongo, Express and Node in one file = server.js<p>
<p>Later we will put the routes and setup in their own file</p>

##Added random find with this cheat
This method is very basic, you query every documents in the collection and skip a random number of indexed documents. Thus, method 4a:

db.col.find().limit(-1).skip(Math.random() * db.col.count());

Method 4b is a small improvement of 4a, instead of executing db.col.count() each time, you simply save the document count in a variable.


##Background

<p>In searching for an application idea for my class on wearables this fall, 
I thought of the idea of an app that would periodically pop up a short, 
or shortened bible verse on the watch screen, along with a bible reference.  
When presented to the user, they would have the choice of 
dismissing the verse or pressing something that would 
pull up a commentary on the verse written specifically 
for the TinyVerse App.
</p>
<p>Here are some of my example ideas</p>

<h2>TinyVerse:	</h2>
<table>
    <thead>
    <tr>
        <th>TinyVerse
        </th>
        <th>
            Reference
        </th>
        <th>
            Commentary
        </th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Jesus Wept</td>
        <td>John 11:35</td>
        <td>Insert Text Here</td>
    </tr>
    <tr>
        <td>I am the resurrection and the life/td>
        <td>John 11:25</td>
        <td>Insert Text Here</td>
    </tr>
    <tr>
        <td>Be still and know that I am God/td>
        <td>Psalm 46:10</td>
        <td>Insert Text Here</td>
    </tr>
    </tbody>
</table>
 
<h2>CRUD listings</h2>
<p>All data in JSON format</p>
<table>
    <tr>
    <th>Action</th>
    <th>URL</th>
    <th>CRUD</th>
    </tr>
    <tr>
        <td>GET</td>
        <td>/tinyList</td>
        <td>Retrieve all records</td>
    </tr>
    <tr>
        <td>GEt</td>
        <td>/tinyList/:id</td>
        <td>Retrieve :id record</td>
    </tr>
    <tr>
        <td>POST</td>
        <td>/tinyList</td>
        <td>Create new record</td>
    </tr>
    <tr>
        <td>DELETE</td>
        <td>/tinyList/:id</td>
        <td>Delete :id record</td>
    </tr>
    <tr>
        <td>PUT</td>
        <td>/tinyList/:id</td>
        <td>Update :id record </td>
    </tr>
    <tr>
        <td>GET</td>
        <td>/tinyRandom</td>
        <td>Retrieve a random record</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>/tinyRandom/#</td>
        <td>Retrieve a random # number of records</td>
    </tr>
</table>