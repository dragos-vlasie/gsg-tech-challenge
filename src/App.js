import React from "react";
import "./App.css";
import MenuOptions from "./components/MenuOptions";

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
  return (
    <div className="App">
      <h1> Restaurant Menu</h1>
      {menuData.map((data, index) => (
        <div
          key={"menu-item" + index}
          style={{
            border: "1px solid grey",
            margin: "16px",
            display: "inline-block",
          }}
        >
          <MenuOptions data={data} />
        </div>
      ))}
    </div>
  );
}

export default App;
