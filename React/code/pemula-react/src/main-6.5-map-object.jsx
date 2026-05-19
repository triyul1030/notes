import { createRoot } from 'react-dom/client'

const users = [
  {id: 1, name: 'John', age: 30},
  {id: 2, name: 'Elsa', age: 28},
  {id: 3, name: 'Anna', age: 25},
];

function UserList() {
  return (
    <ul> 
      {users.map(user => 
        <li key={user.id}>
          {user.name} is {user.age} years old
        </li>
      )}
    </ul>
  );
}

createRoot(document.getElementById('root')).render(
  <UserList />  
)
