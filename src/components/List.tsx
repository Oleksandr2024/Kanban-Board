import { ReactNode } from "react";

interface ListProps<T> {
  items: T[];
  render: (item: T) => ReactNode;
}

const List = <T extends {}>({ items, render }: ListProps<T>) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
};

export default List;

// import { ReactNode } from "react";

// //interface with generic type
// interface ListProps<T> {
//   items: T[];
//   render: (item: T) => ReactNode;
// }

// const List = <T,>({ items, render }: ListProps<T>) => { //
//   return (
//     <ul>
//       {items.map(
//         (
//           item,
//           index //(to write code on separate lines )
//         ) => (
//           <li key={index}>{render(item)}</li>
//         )
//       )}
//     </ul>
//   );
// };

// export default List;
