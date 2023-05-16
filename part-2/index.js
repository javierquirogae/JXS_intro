// Define a Tweet component which takes as 
// props the username of the user who wrote the tweet, 
// the name of the user who wrote the tweet, the date of the tweet, 
// and the message being tweeted.

const Tweet = (props) => {
    return (
        <div>
            <h1>{props.username}</h1>
            <h2>{props.name}</h2>
            <h3>{props.date}</h3>
            <p>{props.message}</p>
        </div>
    );
};

// Create an App component that renders at least three tweets.

const App = () => {
    return (
        <div>
            <Tweet username="username1" name="name1" date="date1" message="message1"/>
            <Tweet username="username2" name="name2" date="date2" message="message2"/>
            <Tweet username="username3" name="name3" date="date3" message="message3"/>
        </div>
    );
};

// Render your App component to the DOM.

ReactDOM.render(
    <App />,
    document.getElementById("root")
);





