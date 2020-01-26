# Frontend Avanzado Beerflix

## How to launch it

Beerflix works on a node server with an express library dependency. So in order to launch the APP you must download node.js and the express library first. You can learn how on their official websites.

## Notes

- The login "keep me logged" feature, should store the api-key as a cookie with a validity of 365 days, however, it expires on the session.
- Since there are no records on which user liked the beer, there are no way to avoid liking it twice (or more) I store eack like on local Store, but deleting the key will allow you to like the same beer more than once
- The filter bar is styled like that to have space in case the client should want to add new filters like price or whichever. However, there would be necessary to refactor the function to accept more than one property, it is still a work in progress.
