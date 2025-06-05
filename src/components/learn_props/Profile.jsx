import { Imageurl } from './Gallery';

export default function Profile({ person, awards, discovery }) {
  return (
    <section className="profile">
      <h2>{person.name}</h2>
      <div>
        <img
          className="avatar"
          src={Imageurl(person)}
          alt={person.name}
          width={70}
          height={70}
        />
      </div>

      <ul>
        <li>
          <b>Profession: </b>
          {person.profession}
        </li>
        <li>
          <b>Awards: {awards.number} </b>
          <br /> {awards.type}
        </li>
        <li>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </section>
  );
}

// Importer dans App.jsx
// import Profile from './components/learn_props/Profile';

// export default function App() {
//   return (
//     <div>
//       <h1>Notable Scientists</h1>
//       <Profile
//         person={{
//           name: 'Maria Skłodowska-Curie',
//           imageId: 'szV5sdG',
//           profession: 'physicist and chemist',
//         }}
//         awards={{
//           number: 4,
//           type: 'Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal',
//         }}
//         discovery={'polonium (chemical element)'}
//       />
//       <Profile
//         person={{
//           name: 'Katsuko Saruhashi',
//           imageId: 'YfeOqp2',
//           profession: 'geochemist',
//         }}
//         awards={{
//           number: 2,
//           type: 'Miyake Prize for geochemistry, Tanaka Prize',
//         }}
//         discovery={'a method for measuring carbon dioxide in seawater'}
//       />
//     </div>
//   );
// }
