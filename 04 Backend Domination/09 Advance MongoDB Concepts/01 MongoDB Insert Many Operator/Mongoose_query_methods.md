Here is a list of common **Mongoose query methods** with explanations and use cases:

### 1. **`find()`**
   - **Use case**: Retrieve multiple documents from the database that match the given query criteria.
   - **Meaning**: Finds all documents that match the condition.
   - **Example**: 
     ```javascript
     userModel.find({ age: { $lte: 30 } });
     ```
     - Finds all users whose age is less than or equal to 30.

### 2. **`findOne()`**
   - **Use case**: Retrieve the first document that matches the given query criteria.
   - **Meaning**: Finds the first document that matches the condition.
   - **Example**: 
     ```javascript
     userModel.findOne({ username: "johnDoe123" });
     ```
     - Finds the first user with the username `johnDoe123`.

### 3. **`findById()`**
   - **Use case**: Retrieve a single document by its unique MongoDB `_id`.
   - **Meaning**: Finds a document by its `_id` field.
   - **Example**: 
     ```javascript
     userModel.findById("60c72b2f5f1b2c001d6e7e7e");
     ```
     - Finds the user with the specific MongoDB ObjectId.

### 4. **`findByIdAndUpdate()`**
   - **Use case**: Find a document by its `_id` and update its fields.
   - **Meaning**: Finds a document by its `_id` and applies the update.
   - **Example**: 
     ```javascript
     userModel.findByIdAndUpdate("60c72b2f5f1b2c001d6e7e7e", { age: 35 });
     ```
     - Finds the user by `_id` and updates the `age` to 35.

### 5. **`findOneAndUpdate()`**
   - **Use case**: Find the first document that matches the query and update it.
   - **Meaning**: Finds the first matching document and updates it.
   - **Example**: 
     ```javascript
     userModel.findOneAndUpdate({ username: "johnDoe123" }, { age: 30 });
     ```
     - Finds the first user with username `johnDoe123` and updates the `age` to 30.

### 6. **`findOneAndDelete()`**
   - **Use case**: Find the first document that matches the query and delete it.
   - **Meaning**: Finds the first matching document and deletes it.
   - **Example**: 
     ```javascript
     userModel.findOneAndDelete({ username: "johnDoe123" });
     ```
     - Finds and deletes the first user with the username `johnDoe123`.

### 7. **`findByIdAndDelete()`**
   - **Use case**: Find a document by its `_id` and delete it.
   - **Meaning**: Finds a document by `_id` and deletes it.
   - **Example**: 
     ```javascript
     userModel.findByIdAndDelete("60c72b2f5f1b2c001d6e7e7e");
     ```
     - Deletes the user with the specific MongoDB ObjectId.

### 8. **`countDocuments()`**
   - **Use case**: Count the number of documents that match the query criteria.
   - **Meaning**: Counts how many documents match the given query.
   - **Example**: 
     ```javascript
     userModel.countDocuments({ age: { $gte: 18 } });
     ```
     - Counts all users whose age is greater than or equal to 18.

### 9. **`distinct()`**
   - **Use case**: Get distinct values for a specific field across all matching documents.
   - **Meaning**: Returns unique values for the specified field in matching documents.
   - **Example**: 
     ```javascript
     userModel.distinct("email", { age: { $gte: 18 } });
     ```
     - Returns distinct emails for users whose age is greater than or equal to 18.

### 10. **`updateMany()`**
   - **Use case**: Update multiple documents that match the query criteria.
   - **Meaning**: Updates all documents that match the condition.
   - **Example**: 
     ```javascript
     userModel.updateMany({ isMarried: false }, { $set: { isMarried: true } });
     ```
     - Updates all users who are not married and sets `isMarried` to true.

### 11. **`updateOne()`**
   - **Use case**: Update a single document that matches the query criteria.
   - **Meaning**: Updates the first document that matches the condition.
   - **Example**: 
     ```javascript
     userModel.updateOne({ username: "johnDoe123" }, { $set: { age: 30 } });
     ```
     - Updates the `age` of the first user with the username `johnDoe123`.

### 12. **`deleteMany()`**
   - **Use case**: Delete all documents that match the query criteria.
   - **Meaning**: Deletes all documents that match the condition.
   - **Example**: 
     ```javascript
     userModel.deleteMany({ age: { $lt: 18 } });
     ```
     - Deletes all users whose age is less than 18.

### 13. **`deleteOne()`**
   - **Use case**: Delete the first document that matches the query criteria.
   - **Meaning**: Deletes the first document that matches the condition.
   - **Example**: 
     ```javascript
     userModel.deleteOne({ username: "johnDoe123" });
     ```
     - Deletes the first user with the username `johnDoe123`.

### 14. **`aggregate()`**
   - **Use case**: Perform advanced queries and transformations on documents using aggregation pipelines.
   - **Meaning**: Runs an aggregation query for data transformation and computation.
   - **Example**: 
     ```javascript
     userModel.aggregate([
       { $match: { age: { $gte: 30 } } },
       { $group: { _id: "$isMarried", total: { $sum: 1 } } }
     ]);
     ```
     - Aggregates users by marital status and counts how many users fall into each category (married vs. not married).

### 15. **`populate()`**
   - **Use case**: Populate references to documents in another collection.
   - **Meaning**: Populates referenced fields from another collection (used in relational queries).
   - **Example**: 
     ```javascript
     userModel.find().populate("friends");
     ```
     - Populates the `friends` field (which references another collection) for each user document.

### 16. **`lean()`**
   - **Use case**: Retrieve plain JavaScript objects instead of Mongoose documents.
   - **Meaning**: Returns plain JavaScript objects for better performance in read-only queries.
   - **Example**: 
     ```javascript
     userModel.find({ age: { $gte: 18 } }).lean();
     ```
     - Finds all users whose age is greater than or equal to 18 and returns plain objects.

### 17. **`sort()`**
   - **Use case**: Sort the results of a query by one or more fields.
   - **Meaning**: Sorts the returned documents based on the specified fields.
   - **Example**: 
     ```javascript
     userModel.find().sort({ age: -1 });
     ```
     - Returns users sorted by age in descending order.

### 18. **`limit()`**
   - **Use case**: Limit the number of results returned by a query.
   - **Meaning**: Limits the number of documents returned.
   - **Example**: 
     ```javascript
     userModel.find().limit(10);
     ```
     - Returns only the first 10 users.

### 19. **`skip()`**
   - **Use case**: Skip a number of results in the query response.
   - **Meaning**: Skips the specified number of documents in the result set.
   - **Example**: 
     ```javascript
     userModel.find().skip(5);
     ```
     - Skips the first 5 users in the result set.

### 20. **`exec()`**
   - **Use case**: Execute the query and return a promise.
   - **Meaning**: Executes the query (useful for chaining with other query-building functions).
   - **Example**: 
     ```javascript
     userModel.find({ age: { $gte: 18 } }).exec();
     ```
     - Executes the query to find users aged 18 or older.

---

These Mongoose query methods allow you to perform a variety of CRUD (Create, Read, Update, Delete) operations, data manipulation, and filtering on MongoDB documents efficiently.
