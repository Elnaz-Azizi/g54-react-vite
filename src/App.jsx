// rcc
// rsf
// rafc
// rafce
import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Content from "./components/Content";
import TaskList from "./components/TaskList";
import AlertMessage from "./components/props-state/AlertMessage";
import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import Card from "./components/props-state/Card";
import Pricing from "./components/props-state/Pricing";
import Counter from "./components/props-state/Counter";
import Person from "./components/props-state/Person";
import ToggleButton from "./components/hooks_functions/ToggleButton";
import TodoList from "./components/hooks_functions/TodoList";
import CarRentalForm from "./components/hooks_functions/CarRentalForm";

const App = () => {
  // js variables and functions

  return (
    <div>
      {/*
         <Navbar />
        <Header />
        <Content />
        <TaskList />
     */}
      {/* 
     <h2 className="container text-center mb-4">React Props Examples</h2>
      <AlertMessage
        message="Happy Birthday :)"
        alertType="success"
        icon={<FaExclamationTriangle />}
      />
      <AlertMessage message="Operation Failed!" alertType="danger" />
      <AlertMessage message="Operation Failed!" alertType="warning" />

      <Pricing />

    <h2 className="container text-center mb-4 mt-5">React State Examples</h2>
    <Counter />

    <Person />
     */}
     <ToggleButton/>
      <TodoList />
      <CarRentalForm />
      
    </div>
  );
};

export default App;