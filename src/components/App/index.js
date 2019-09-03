// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';
// import NavBarSearch from 'src/components/NavBarSearch';
import TabsTest from 'src/components/Tabs';
import NavBarSearch from 'src/components/NavBarSearch';
import Collapse from 'src/components/Collapse';
import Collapse2 from 'src/components/Collapse2';
import IconButtons from 'src/components/IconButtons';
import Checkbox from 'src/components/Checkbox';


// == Composant
const App = () => (
  <div id="app">
    <NavBarSearch />
    <TabsTest />
    <Collapse />
    <Collapse2 />
    <IconButtons />
    <Checkbox />
  </div>
);

// == Export
export default App;
