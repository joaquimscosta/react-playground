### Get all books
curl -X GET localhost:3001/books -H "Content-Type: application/json"

### Create a book
curl -X POST localhost:3001/books -H "Content-Type: application/json" -d '{"title":"Harry Poter2"}'

### Update a book
curl -X PUT localhost:3001/books/3 -H "Content-Type: application/json" -d '{"title":"Harry Poter23"}'

### Delete a book
curl -X DELETE localhost:3001/books/3 -H "Content-Type: application/json"