"use client";

// Example18: Using Conditional Rendering with Components

function LoggedInView() {
  return <h1>Welcome back!</h1>;
}

function LoggedOutView() {
  return <h1>Please log in.</h1>;
}

export default function Greeting({ isLoggedIn }) {
  return isLoggedIn ? <LoggedInView /> : <LoggedOutView />;
}
