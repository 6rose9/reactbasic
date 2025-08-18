import { useState, useRef } from "react";

// child component
function Item(props) {
  return <li>{props.name},${props.price}</li>
}

// parent component
// export default function App() {

//   // return <h1> Hello React </h1>;
//   // return "<h1> Hello React </h1>";
//   // React.createElement('<h1>',null,'Hello React');

//   const [data, setData] = useState([
//     { id: 1, name: "Apple", price: 0.99 },
//     { id: 2, name: "Orange", price: 0.89 },
//   ]);

//   const nameRef = useRef();
//   const priceRef = useRef();

//   const add = () => {
//     const id = data.length + 1;
//     setData([
//       ...data,
//       { id, name: `Item ${id}`, price: 0.01 * id }
//     ])
//   }

//   return (
//     <div>
//       <h1>Hello React</h1>
//       <ul>
//         {/* <li>Item One</li>
//         <li>Item Two</li> */}

//         {/* <Item name="Apple" price="0.99" />
//         <Item name="Orange" price="0.89" /> */}

//         {data.map(i => (
//           <Item key={i.id} name={i.name} price={i.price} />
//         ))}

//         <input type="text" ref={nameRef} /> <br />
//         <input type="text" ref={priceRef} /> <br />
//         <button onClick={add}>Add</button>

//       </ul>
//     </div>
//   );
// }

function AddForm(props) {
  const nameRef = useRef();
  const priceRef = useRef();

  return (
    <form onSubmit={e => {
      e.preventDefault();

      props.add(
        nameRef.current.value,
        priceRef.current.value,
      );
    }}>

      <input type="text" ref={nameRef} /> <br />
      <input type="text" ref={priceRef} /> <br />
      <button type="submit" >Add</button>

    </form>
  )
}

// export default function App() {

//   const [data, setData] = useState([
//     { id: 1, name: "Apple", price: 0.99 },
//     { id: 2, name: "Orange", price: 0.89 },
//   ]);

//   const add = (name, price) => {
//     const id = data.length + 1;
//     setData([
//       ...data,
//       { id, name, price }
//     ]);
//   }

//   return (
//     <div>
//       <h1>Hello React</h1>
//       <ul>
//         {data.map(i => (
//           <Item key={i.id}
//             name={i.name}
//             price={i.price}
//           />
//         ))}
//       </ul>
//       <AddForm add={add} />
//     </div>
//   )
// }

function Title(props) {
  return <h1>{props.name}</h1>;
}

function Header(props) {
  return <Title name={props.name} />;
}

// export default function App(){
//   return <Header name={"App Title"} />;
// }

function Toolbar(props) {
  return (
    <div style={{ background: 'cyan', padding: 10 }}>
      {props.children}
    </div>
  )
}

export default function Add() {
  return (
    <div>
      <Toolbar>
        <h1>Hello React</h1>
        <h2>Component Composition</h2>
      </Toolbar>
    </div>
  );
}







