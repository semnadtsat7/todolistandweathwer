import React, { useState, useEffect } from "react";
import Form from "./component/Form";
import Title from "./component/Title";
import Todo from "./component/Todo";
import "./App.css";
import Weather from "./component/Weather";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = () => {
    if (inputValue === "") return;
    const newTodo = { _id: Date.now(), text: inputValue };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };
  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo._id !== id);
    setTodos(newTodos);
  };

  ////
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=london&appid=03a417f63242b049a8c42994c729edc0`
        // `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=03a417f63242b049a8c42994c729edc0`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };
    fetchData();
  }, [lat, long]);

  return (
    <div className="App">
      {typeof data.main != "undefined" ? (
        <Weather weatherData={data} />
      ) : (
        <div></div>
      )}

      <div className="todolist">
        <header>
          <Title myName="Nico" />
        </header>
        {todos.map((todo) => (
          <Todo
            todo={todo}
            handleDeleteTodo={handleDeleteTodo}
            key={todo._id}
          />
        ))}

        <Form
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default App;
