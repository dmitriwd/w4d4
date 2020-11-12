# Queries

## Basic query

```
{ field: value}
```

```
{ year: 1994 }
```

returns all the documents in the `movies` collection where the `year` is 1994

```
{ director: "Quentin Tarantino" }
```

returns all the documents in the `movies` collection where the `director` is Quentin Tarantino

```
{ director: "Quentin Tarantino", rate: 8.3 }
```

returns all the documents in the `movies` collection where the `director` is Quentin Tarantino and the `rate` is 8.3

## Logical Operators

### `$and`

All the conditions must match:

```
{ $and: [ { year: 2000 }, { rate: 8.3 }  ] }
```

returns all the documents in the collection where the `year` is 2000 and the `rate` is 8.3

### `$or`

At least one of the conditions must match:

```
{ $or: [ { year: 2000 }, { rate: 8.3 }, { director: "James Cameron" } ] }
```

returns all the documents where either the `year` is 2000, or the `rate` is 8.3 or the `director` is James Cameron

### `$nor`

None of the conditions must match:

```
{ $nor: [ { year: 2000 }, { rate: 8.3 }, { director: "James Cameron" } ] }
```

returns all the documents where neither the `year` is 2000, nor the `rate` is 8.3, nor the `director` is James Cameron

## PROJECT

```
{ title: 1, _id : 0, director: 1 }
```

In the documents returned, only the `title` and `director` fields will be present.  
By default, the `_id` field is present.

## SORT

```
{ year: -1, title: 1 }
```

Sorts the documents by descending `year` and ascending `title`

## SKIP and LIMIT

Skips x documents

Limits the results to y documents

## More operators

### `$ne`

```
{ year: { $ne: 1994 } }
```

Returns all the movies where the `year` is NOT EQUAL to 1994

### `$gt` `$gte`

```
{ rate: { $gt: 8.5 } }
```

Returns all the movies where the `rate` is strictly greater than 8.5

```
{ year: { $gte: 1990 } }
```

Returns all the movies where the `year` is greater than or equal to 1990

### `$lt` `$lte`

```
{ rate: { $lt: 8.5 } }
```

Returns all the movies where the `rate` is strictly less than 8.5

```
{ year: { $lte: 1990 } }
```

Returns all the movies where the `year` is less than or equal to 1990

#### bonus

```
{ $and: [ {year: { $gt: 1990 } }, { year: { $lte: 1994 } }  ] }
```

Returns all the movies where the `year` is strictly greater than 1990 and less than or equal to 1994

### `$in`

```
{ director: { $in: [ "Francis Ford Coppola", "Christopher Nolan", "James Cameron" ] } }
```

Returns all the movies where the value for the `director` field can be found in the array `[ "Francis Ford Coppola", "Christopher Nolan", "James Cameron" ]`

```
{ genre: { $in: [ "Crime", "Drama" ] } }
```

Returns all the movies where at least ONE of the values in the `genre` array can be found in the array `[ "Crime", "Drama" ]`

### `$nin`

```
{ director: { $nin: [ "Francis Ford Coppola", "Christopher Nolan", "James Cameron" ] } }
```

Returns all the movies where the value for the `director` field can NOT be found in the array `[ "Francis Ford Coppola", "Christopher Nolan", "James Cameron" ]`

```
{ genre: { $nin: [ "Crime", "Drama" ] } }
```

Returns all the movies where NONE of the values in the `genre` array can be found in the array `[ "Crime", "Drama" ]`

### `$all`

```
{ genre: { $all: [ "Crime", "Drama", "Thriller" ] } }
```

Returns all the movies where all of the values in the array `[ "Crime", "Drama", "Thriller" ]` can be found in their `genre` array

### flexible or case-insensitive search

```
{ director: /jo/i }
```

Returns all the movies where the `director` contains the substring "jo". `i` makes it case-insensitive.

### `$exists`

```
{ rate: { $exists: true } }
```

Returns all the movies where the `rate` field exists

```
{ rate: { $exists: false } }
```

Returns all the movies where the `rate` field does NOT **exist**