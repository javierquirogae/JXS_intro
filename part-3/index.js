// Create a component called Person. 
// Inside of this component, 
// render a p tag which displays “Learn some information about this person”. 
// Each person should have name and age properties.
// If the person is over 18 years old, 
// display an additional h3 that says “please go vote!”. 
// Otherwise, display an h3 that says “you must be 18”. 
// If the person’s name is longer than 8 characters, 
// only display the first six characters of their name.
// Add a property called hobbies to your Person component 
// that accepts an array of hobbies (an array of strings). 
// Your Person component should list each one of these hobbies as an li.

const Person = (props) => {
    return (
        <div>
            <p>Learn some information about this person</p>
            <h1>{props.name.length > 8 ? props.name.slice(0, 6) : props.name}</h1>
            <h3>{props.age >= 18 ? "please go vote!" : "you must be 18"}</h3>
            <ul>
                {props.hobbies.map(hobby => <li>{hobby}</li>)}
            </ul>
        </div>
    );
};

// Create a component called App that renders at least three copies of the Person component on the page.

const App = () => {
    return (
        <div>
            <Person name="name1" age={18} hobbies={["hobby1", "hobby2", "hobby3"]}/>
            <Person name="name2" age={17} hobbies={["hobby4", "hobby5", "hobby6"]}/>
            <Person name="name3" age={19} hobbies={["hobby7", "hobby8", "hobby9"]}/>
        </div>
    );
};

// Render your App component to the DOM.

ReactDOM.render(
    <App />,
    document.getElementById("root")
);






