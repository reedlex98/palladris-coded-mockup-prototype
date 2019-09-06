import React from 'react';
import Header from './components/Header';
import GroupButton from './components/GroupButton'
import { Container} from 'bloomer'

const App: React.FC = () => {
  return (
    <div>
      <Header/>
      <Container className="app-container">
        <GroupButton focusedId={0} />
      </Container>
    </div>
  );
}

export default App;
