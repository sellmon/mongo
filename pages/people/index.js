import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

// function useUser() {
//   const { data, error } = useSWR(
//     "https://jsonplaceholder.typicode.com/users",
//     fetcher
//   );
//
//   return {
//     user: data,
//     isLoading: !error && !data,
//     isError: error,
//   };
// }

function People() {
  const { data } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );

  return (
    <>
      <h1>People:</h1>
      {data &&
        data.map(({ id, name, email, phone }) => {
          return (
            <div key={id}>
              <h1>{name}</h1>
              <p>{email}</p>
              <p>{phone}</p>
            </div>
          );
        })}
    </>
  );
}

export default function App() {
  return (
    <>
      <People />
    </>
  );
}

// import useSWR from "swr";
// import { useState, useEffect } from "react";
//
// const fetcher = (url) => fetch(url).then((res) => res.json());
//
// export default function People() {
//   const { data, error } = useSWR(
//     "https://jsonplaceholder.typicode.com/users",
//     fetcher
//   );
//
//   if (error) return <div>Failed to load</div>;
//   if (!data) return <div>Loading</div>;
//
//   return (
//     <>
//       <h1>People:</h1>
//       {data.map(({ id, name, email, phone }) => {
//         return (
//           <div key={id}>
//             <h1>{name}</h1>
//             <p>{email}</p>
//             <p>{phone}</p>
//           </div>
//         );
//       })}
//     </>
//   );
// }

//   const [people, setPeople] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users"
//       );
//       const data = await response.json();
//
//       setPeople(data);
//     };
//
//     fetchData();
//   }, []);
//
//   return (
//     <>
//       <h1>People:</h1>
//       <ul>
//         {people.map(({ id, name, email, username, phone, website }) => {
//           return (
//             <div key={id}>
//               <li>
//                 <h2>{name}</h2>
//               </li>
//               <p>{email}</p>
//               <p>{username}</p>
//               <p>{phone}</p>
//               <p>{website}</p>
//             </div>
//           );
//         })}
//       </ul>
//     </>
//   );
// }
