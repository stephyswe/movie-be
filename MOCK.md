// auth/register
{
	"email": "test12@test.ru",
	"password": "123456"
}

// auth/login
{
	"email": "test12@test.ru",
	"password": "123456"
}

//users/profile
( RUN )

* admin *
//users/count + CRUD.
( RUN )

* genres *

// add genre + then put (need a fix later! lol)
{
	"name": "Adventure",
	"slug": "adventure",
	"description": "<p>A good adventure movie is the best way to escape from your usual life at least for a while and imagine yourself on board a spaceship or on a lonely raft in the endless ocean.</p>",
	"icon": "MdHiking"
}
{
	"name": "Action",
	"slug": "action",
	"description": "<p>Do you like <strong>movies</strong> with action scenes</p>",
	"icon": "MDSportsKabaddi"
}
{
	"name": "Horror",
	"slug": "horror",
	"description": "<p>A horror movie</p>",
	"icon": "MdOffLineBolt"
}

// search
/genres?searchTerm=Adventure
/genres/by-slug/action

* file upload * 
... have all files atm.

* actors * 
{
	"name": "Stephanie Beatriz",
	"slug": "stephanie-beatriz",
	"photo": "/uploads/actors/stephanie.jpg"
}
{
	"name": "Will Smith",
	"slug": "will-smith",
	"photo": "/uploads/actors/will.jpg"
}
{
	"name": "Tom Holland",
	"slug": "tom-holland",
	"photo": "/uploads/actors/holland.jpg"
}
* movie * 
{
    "poster": "/uploads/movies/john-wick-small.jpg",
    "bigPoster": "/uploads/movies/john-wick.jpg",
    "title": "John Wick",
    "slug": "john-wick",
    "description": "john-wick desc",
    "parameters": {
        "year": 2014,
        "duration": 101,
        "country": "USA, Canada, China"
    },
    "videoUrl": "/uploads/movies/john-wick.mp4",
    "genres": ["62762369631235fd617c4b3c"],
    "actors": ["6276256b631235fd617c4b4b"]
}

// by genre
* users/profile/favorites *
{
	"movieId": "621efb6a85f2eafa2adf9f24"
}