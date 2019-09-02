// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';
// import NavBarSearch from 'src/components/NavBarSearch';
import TabsTest from 'src/components/Tabs';
import NavBarSearch from 'src/components/NavBarSearch';

// == Composant
const App = () => (
  <div id="app">
    <NavBarSearch />
    <TabsTest />
  </div>
);

// == Export
export default App;
