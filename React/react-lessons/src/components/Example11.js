"use client";

function Card(props) {
  return <div>{props.children}</div>;
}

//Example10: Passing a Children as a Prop
function Parent() {
  return (
    <div>
      <div>
        <Card>
          <h2>Welcome!</h2>
          <p>This is inside the card.</p>
        </Card>

        <Card>
          <h3>User Profile</h3>
          <ul>
            <li>Name: Alice</li>
            <li>Age: 25</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}

export default Parent;
