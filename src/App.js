import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Appointments from './components/Appointments/Appointments';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import getCards from "./store/api/getCards";
import MedicalCard from './components/MedicalCard/MedicalCard';
import AppointmentsMore from './components/AppointmentsMore/AppointmentsMore';

function App() {
  const state = useSelector((store) => store.appointment);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCards());
  }, [dispatch]);


  return (
    <div className="page">
      <Sidebar />
      <div className="page__wrapper">
        <Header />
        <main className="main">
        <Switch>
          <Route exact path="/">
            {state.cards && <Appointments cards={state.cards} />}
            <MedicalCard />
          </Route>
          <Route path="/profile-more">
            {state.cards && <AppointmentsMore cards={state.cards} />}
          </Route>
        </Switch>
        </main>
      </div>
    </div>
  );
}

export default App;
