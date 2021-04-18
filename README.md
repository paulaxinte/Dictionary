# Dictionary

This project is an implementation of a search bar that can help the user to search for a word in the available wordlist(or dictionary), and an insert field if he wants to introduce new words in the wordlist.

The webpage will update the interface every time it will load or when a new word is introduced into the wordlist. The only difference between these 2 types of interface updates is that when the page will be reloaded, it will not remember the newly introduced words by the user; it will only show the initial wordlist. When a new word is inserted into the list, a function will check if the word from the insert field doesn't already exist in the list. If it doesn't, it will be introduced.

The search bar has a more simple implementation. After the search button is pressed, a function will search for the word introduced in the search bar. Based on its findings, it will show a message about whether it has or has not found the word in the dictionary.

The project was implemented by using JavaScript.