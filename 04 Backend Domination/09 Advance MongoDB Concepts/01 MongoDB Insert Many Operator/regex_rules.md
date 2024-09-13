# Regex Rules and Terminology with Examples

## 1. Anchors
- `^`: Matches the beginning of the string.
- `$`: Matches the end of the string.

### Example:
- `/^a/`: Matches strings starting with 'a' (e.g., "apple").
- `/t$/`: Matches strings ending with 't' (e.g., "cat", "hat").

## 2. Character Classes
- `.`: Matches any single character except a newline.
- `[abc]`: Matches any single character inside the brackets (e.g., 'a', 'b', or 'c').
- `[^abc]`: Negated character class, matches any single character **except** 'a', 'b', or 'c'.

### Example:
- `/c.t/`: Matches "cat", "cut", "cot" (any letter between 'c' and 't').
- `/[^aeiou]/`: Matches any consonant (not a vowel).

## 3. Quantifiers
- `*`: Matches 0 or more occurrences of the preceding character or group.
- `+`: Matches 1 or more occurrences of the preceding character or group.
- `?`: Matches 0 or 1 occurrence of the preceding character or group.
- `{n}`: Matches exactly `n` occurrences of the preceding character or group.
- `{n,}`: Matches `n` or more occurrences.
- `{n,m}`: Matches between `n` and `m` occurrences.

### Example:
- `/a*/`: Matches "aaa", "a", or an empty string.
- `/a+/`: Matches "a", "aaa" (but not an empty string).
- `/a{2,4}/`: Matches "aa", "aaa", or "aaaa".

## 4. Special Characters
- `\d`: Matches any digit (equivalent to `[0-9]`).
- `\D`: Matches any non-digit character.
- `\w`: Matches any word character (alphanumeric + underscore).
- `\W`: Matches any non-word character.
- `\s`: Matches any whitespace character (space, tab, newline).
- `\S`: Matches any non-whitespace character.

### Example:
- `/\d/`: Matches any single digit.
- `/\w+/`: Matches a whole word (e.g., "hello", "world").

## 5. Groups and Alternation
- `()`: Groups patterns together.
- `|`: Acts as OR (alternation between patterns).

### Example:
- `/(cat|dog)/`: Matches either "cat" or "dog".
- `/(a|b)c/`: Matches "ac" or "bc".

## 6. Modifiers (Flags)
- `i`: Case-insensitive matching.
- `g`: Global search (finds all matches, not just the first).
- `m`: Multiline mode.

### Example:
- `/abc/i`: Matches "abc", "ABC", "Abc" (case-insensitive).
- `/cat/g`: Matches all occurrences of "cat" in a string.

# Examples with Mongoose:

- **Find names starting with 'a'**:
  ```javascript
  userModel.find({ name: { $regex: /^a/i } });
  // Matches: "Alice", "alex"

- **Find emails ending with '.com':**
  ```javascript
    userModel.find({ email: { $regex: /\.com$/ } });
    // Matches: "user@gmail.com", "admin@yahoo.com"


- **Find names containing the word 'king':**
  ```javascript
    userModel.find({ name: { $regex: /king/i } });
    // Matches: "Kingston", "Robert King"

