import {createContext} from 'react';

const CurrentUserContext = createContext();

export const currentUser = ({ currentUser, children }) => (
<CurrentUserContext.Provider value={currentUser}>
  <div className="page">
  </div>
</CurrentUserContext.Provider>
);

export default CurrentUserContext;