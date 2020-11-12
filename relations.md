Relationship Types:
# hello

## One to One
One thing, is related to just another one thing
One person Has 1 DNA
THAT 1 DNA is related to just that 1 person


## One to MANY
One User has Many Posts
That post is only posted bt that ONE User

## Many to One

## Many to Many
One author might author MAny Books
One book might be authored by Many Authors


```js
// user
{
   _id:"Looks like a string, but its an object",
   username: "username",
   contact: {
      phone: "9123456789",
      email: "thefancyemail@gmail.com",
   }
   access: {
      level: 3,
      secutiryClearance: "TOP NOTCH"
   }
}
```

```js
{
   _id: "ldkghsdfkjghdfkjghdfkjh1387435984537654897645d",
   name: "JKROwnloing",
   books: [
      0: ObjectId("1242987r897"), // another document in the same collection, or another collection
      1: ObjectId("1249874985734")
   ]
}
```

```js
{
   _id: "ldkghsdfkjghdfkjghdfkjh1387435984537654897645d",
   name: "JKROwnloing",
   books: [
      0: {
         _id: "1242987r897",
         title: "Stone",
         author: ObjectId("ldkghsdfkjghdfkjghdfkjh1387435984537654897645d")
      }
   ]
}
```
