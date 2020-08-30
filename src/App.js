import React, { useState } from "react";
import "./App.css";
import MenuOptions from "./components/MenuOptions";
import SearchForm from "./components/SearchForm";

const menuData = [
  {
    label: "Bacon & Eggs",
    children: [
      {
        label: "Bacon",
        children: [
          {
            label: "Meat",
            children: [
              {
                label: "Pork",
              },
            ],
          },
        ],
      },
      {
        label: "Ham Eggs",
        children: [
          {
            label: "Egg",
          },
        ],
      },
    ],
  },
  {
    label: "Hamburger",
    children: [
      {
        label: "Meat",
        children: [
          {
            label: "Pork",
          },
        ],
      },
      {
        label: "Bread",
        children: [
          {
            label: "Flour",
          },
          {
            label: "Water",
          },
        ],
      },
      {
        label: "Cheese",
        children: [
          {
            label: "Milk",
          },
        ],
      },
    ],
  },
  {
    label: "English Breakfast",
    children: [
      {
        label: "Fried Eggs",
        children: [
          {
            label: "Egg",
          },
        ],
      },
      {
        label: "Mushrooms",
      },
      {
        label: "Sausages",
        children: [
          {
            label: "Meat",
            children: [
              {
                label: "Pork",
              },
            ],
          },
        ],
      },
      {
        label: "Bread",
        children: [
          {
            label: "Flour",
          },
          {
            label: "Water",
          },
        ],
      },
    ],
  },
];

function App() {
  const [searchedInput, setSearchedInput] = useState("");

  return (
    <div className="App">
      <h1> Restaurant Menu</h1>
      <SearchForm searchedInput={searchedInput} onChange={(e) => setSearchedInput(e.target.value)} />
      {menuData.map((data, index) => (
        <div
          key={"menu-item" + index}
          style={{
            margin: "36px",
            display: "block",
          }}
        >
          <MenuOptions data={data} string={searchedInput} />
        </div>
      ))}
    </div>
  );
}

export default App;
