/* eslint-disable react/jsx-key */
// /* eslint-disable react/prop-types */


// const Header = ({course}) => {
//   return (
//     <h1>{course}</h1>
//   )
// }

// const Part = ({name, exercises}) => {
//   return (
//   <p>
//     {name} {exercises}
//   </p>
//   )
// };

// const Content = ({ part1, exercises1, part2, exercises2, part3, exercises3 }) => 
//   (
//   <div>
//     <Part name={part1} exercises={exercises1} />
//     <Part name={part2} exercises={exercises2} />
//     <Part name={part3} exercises={exercises3} />
//   </div>
// );


// const Total = ({ exercises1, exercises2, exercises3 }) => (

//   <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
// );

// const App = () => {
//   const course = 'Half Stack application development';
//   const part1 = 'Fundamentals of React';
//   const exercises1 = 10;
//   const part2 = 'Using props to pass data';
//   const exercises2 = 7;
//   const part3 = 'State of a component';
//   const exercises3 = 14;


//   return (
//     <div>
//       <Header course= {course}/>
       
//         <Content part1 ={part1}  exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/>
      
//      <Total exercises1={exercises1} exercises2={exercises2}  exercises3={exercises3}/>
//     </div>
//   )
// }

// export default App


// eslint-disable-next-line react-refresh/only-export-components


import Note from "./components/Note"


const App = ({ notes }) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note}/>
           
       
        )}
      </ul>
    </div>
  )
}
    

export default App