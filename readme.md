#TinyVerse API

##TinyVerse service
API to database of short bible verses along with a devotional commentary.
Database of short bible verses, twitter style  
###Data fields:
* id:   id
* verse: String
* reference: String
* comment: String
* updated_at:

###
Initially this will be a rough crud API only. Later we will add better back-end tools using AngularJS and Bootstrap Styling

##Added random find with this cheat
This method is very basic, you query every documents in the collection and skip a random number of indexed documents. Thus, method 4a:

db.col.find().limit(-1).skip(Math.random() * db.col.count());

Method 4b is a small improvement of 4a, instead of executing db.col.count() each time, you simply save the document count in a variable.


##Background

In searching for an application idea for my class on wearables this fall, 
I thought of the idea of an app that would periodically pop up a short, 
or shortened bible verse on the watch screen, along with a bible reference.  
When presented to the user, they would have the choice of 
dismissing the verse or pressing something that would 
pull up a commentary on the verse written specifically 
for the TinyVerse App.

Here are some of my example ideas

###TinyVerse:	

        Reference | Verse | Comment
        --- | --- | ---
        John 11:35 | Jesus Wept | Commentary here
        John 11:25 | I am the resurrection and the life | Commentary Here
        Psalm 46:10 | Be Still | Commentary here
 
###CRUD listings

All data in JSON format
        
        | Action | URL | CRUD |
        | --- | --- | --- |
        | GET | /tinyverses | Retrieve all records |
        | GET | /tinyverses/:id | Retrieve specific record |
        | POST | /tinyverses | Create new record |
        | DELETE | /tinyverses/:id | Delete specific record |
        | PUT | /tinyverses/:id | Update specific record |
        | GET | /tinyrandom | Retrieve 1 random record |
   
    