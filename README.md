# Histogram

This is netlify link :- https://classy-selkie-c7bd6a.netlify.app/
![image](https://github.com/yogesh78026/Histogram/assets/77293859/e26738cb-6a25-40be-8ecd-afbfad92fcdd)


This is a React code that fetches word counts from a text file, displays the top 20 most occurring words in a bar chart using the "recharts" library, and allows the user to export the word counts as a CSV file.


The code imports the necessary dependencies and components from various libraries:

React and useState from the "react" library: These are used to create and manage the state of the React component.
axios: This is used to make HTTP requests to fetch the text file.
BarChart, Bar, XAxis, YAxis, and Tooltip from the "recharts" library: These are components used to render the bar chart.
The App component is defined. It is the main component of the application.

Inside the App component, two state variables are declared using the useState hook:

wordCounts is an array that will store the top 20 word counts.
csvData is a string that will store the CSV data for exporting.
The fetchWordCounts function is defined as an asynchronous function. It uses axios to make a GET request to fetch the text file from the URL "https://www.terriblytinytales.com/test.txt".

Once the response is received, the text is converted to lowercase, and a regular expression is used to extract words from the text.

The counts object is created to store the counts of each word. The forEach loop iterates over each word and increments its count in the counts object.

The sortedCounts array is created by sorting the counts object in descending order based on the word counts.

The topCounts array is created by slicing the sortedCounts array to get only the top 20 word counts.

The wordCounts state variable is updated with the topCounts array.

The csvData state variable is updated by mapping the topCounts array to a string representation of each word and count, joined by a comma, and separated by a newline.


The handleExport function is defined. It prepares the CSV content by encoding the csvData string as a URI component.

A link element is created programmatically and appended to the document body. It is configured with the href attribute set to the encoded URI, the download attribute set to "word_freq.csv" (the desired file name), and the click method called to simulate a click event.

The myStyle object defines some CSS styles for the buttons.

The return statement contains the JSX code that defines the structure and layout of the component.

The JSX code includes a button with an onClick event handler set to fetchWordCounts. It triggers the fetching of word counts when clicked.

Conditional rendering is used to display the bar chart only if there are word counts available (i.e., wordCounts.length > 0).

Another button is displayed below the bar chart, which triggers the handleExport function when clicked. It allows the user to export the word counts as a CSV file.

Finally, the App component is exported as you required.





