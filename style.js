# Input string
input_string = "Hello, World!"

# Initialize an empty string to store the reversed string
reversed_string = ""

# Iterate through the input string in reverse order
for i in range(len(input_string) - 1, -1, -1):
    # Concatenate each character to the reversed_string
    reversed_string += input_string[i]

# Output the reversed string
print(reversed_string)


# Input string
input_string = "Hello, World!"

# Define a variable to store the count of vowels
vowel_count = 0

# List of vowels
vowels = "aeiouAEIOU"

# Iterate through the input string
for char in input_string:
    # Check if the character is a vowel
    if char in vowels:
        # If it's a vowel, increment the vowel_count
        vowel_count += 1

# Output the number of vowels
print("Number of vowels in the string:", vowel_count)


# Input string
input_string = "radar"

# Initialize two pointers, one at the beginning and one at the end of the string
start = 0
end = len(input_string) - 1

# Variable to keep track of whether the string is a palindrome or not
is_palindrome = True

# Compare characters from start and end, moving towards the center
while start < end:
    # If characters at start and end are not the same, it's not a palindrome
    if input_string[start] != input_string[end]:
        is_palindrome = False
        break
    
    # Move the pointers towards the center
    start += 1
    end -= 1

# Output whether the string is a palindrome or not
if is_palindrome:
    print("The string is a palindrome.")
else:
    print("The string is not a palindrome.")




    # Input string with spaces
    input_string = "Hello, World! This is a test string with spaces."
    
    # Initialize an empty string to store the result without spaces
    result_string = ""
    
    # Iterate through the input string
    for char in input_string:
        # Add non-space characters to the result_string
        if char != " ":
            result_string += char
    
    # Output the result without spaces
    print("String without spaces:", result_string)





    Medium:
    
    # Input sentence
sentence = "This is a sample sentence to find the longest word without using functions."

# Initialize variables to store the longest word and its length
longest_word = ""
max_length = 0

# Temporary variables to store the current word and its length
current_word = ""
current_length = 0

# Iterate through the sentence character by character
for char in sentence:
    # Check if the character is a letter (part of a word)
    if char.isalpha():
        # If it's a letter, add it to the current word and increment the length
        current_word += char
        current_length += 1
    else:
        # If it's not a letter (word delimiter), check if it's the longest word so far
        if current_length > max_length:
            longest_word = current_word
            max_length = current_length
        # Reset the current word and length for the next word
        current_word = ""
        current_length = 0

# Check the last word in the sentence
if current_length > max_length:
    longest_word = current_word

# Output the longest word
print("Longest word in the sentence:", longest_word)





# Input strings
string1 = "listen"
string2 = "silent"

# Check if the lengths of the strings are the same
if len(string1) != len(string2):
    are_anagrams = False
else:
    # Initialize a dictionary to store character counts for string1
    char_count = {}

    # Count the characters in string1
    for char in string1:
        char_count[char] = char_count.get(char, 0) + 1

    # Compare the characters in string2 with the character counts in the dictionary
    for char in string2:
        # If char is not in the dictionary or its count is zero, strings are not anagrams
        if char not in char_count or char_count[char] == 0:
            are_anagrams = False
            break
        else:
            # Decrement the character count
            char_count[char] -= 1
    else:
        # If the loop completes without breaking, strings are anagrams
        are_anagrams = True

# Output whether the strings are anagrams or not
if are_anagrams:
    print("The strings are anagrams.")
else:
    print("The strings are not anagrams.")




    # Input string
input_string = "Hello, World! Hello, Universe! Hello, World again!"

# Substring to be replaced and the replacement substring
substring_to_replace = "Hello"
replacement_substring = "Hi"

# Initialize an empty string to store the result after replacement
result_string = ""

# Variable to store the length of the substring to be replaced
substring_length = len(substring_to_replace)

# Iterate through the input string
index = 0
while index < len(input_string):
    # Check if the current substring matches the substring to be replaced
    if input_string[index:index + substring_length] == substring_to_replace:
        # If it matches, add the replacement substring to the result_string
        result_string += replacement_substring
        # Move the index past the substring to be replaced
        index += substring_length
    else:
        # If it doesn't match, add the current character to the result_string
        result_string += input_string[index]
        # Move to the next character in the input string
        index += 1

# Output the result after replacement
print("String after replacement:", result_string)




# Input string
input_string = "This is a long string that needs to be truncated to a specified length."

# Specified length
specified_length = 20

# Initialize an empty string to store the truncated string
truncated_string = ""

# Check if the input string is longer than the specified length
if len(input_string) > specified_length:
    # If it is, truncate the string and add "..."
    for i in range(specified_length):
        truncated_string += input_string[i]
    truncated_string += "..."
else:
    # If it's not longer than the specified length, keep the original string
    truncated_string = input_string

# Output the truncated string
print("Truncated string:", truncated_string)




# Input string with parentheses
input_string = "(()())"

# Initialize an empty stack to keep track of opening parentheses
stack = []

# Iterate through the characters in the input string
for char in input_string:
    # If the character is an opening parenthesis, push it onto the stack
    if char == '(':
        stack.append(char)
    # If the character is a closing parenthesis
    elif char == ')':
        # Check if the stack is empty (no corresponding opening parenthesis)
        if not stack:
            balanced = False
            break
        # Pop the top element from the stack (matching opening parenthesis)
        stack.pop()
else:
    # If the stack is empty after processing all characters, parentheses are balanced
    balanced = not stack

# Output whether the parentheses are balanced or not
if balanced:
    print("The string has balanced parentheses.")
else:
    print("The string does not have balanced parentheses.")



