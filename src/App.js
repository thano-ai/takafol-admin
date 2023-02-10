import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List" ;
import Single from "./pages/single/Single" ;
import New from "./pages/new/New" ;
import { drugsInputs, userInputs ,citiesInputs,dirInputs } from "./formSource";
// import {userColumns, userRows,cityColumns ,cityRows , drugRows,drugColumns} from "./datatablesource";
import Clist from "./pages/list/Clist";
import Dlist from "./pages/list/Dlist";
import SingleDrug from "./pages/single/SingleDrug" ;
import SingleCity from "./pages/single/SingleCity" ;
import Edite from "./pages/edit/Edit" ;

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />

            <Route path="/login" element={<Login />} />

            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New inputs={userInputs} title="Add New User" link="/users" />} />
              <Route path="edit" element={<Edite inputs={userInputs} title="Edite User" link="/users" />}></Route>
            </Route>

            <Route path="cities">
              <Route index element={<Clist />} />
              <Route path=":cityId" element={<SingleCity />} />
              <Route path="new" element={<New inputs={citiesInputs} title="Add New City" link="/cities" />} />
              <Route path="edit" element={<Edite inputs={citiesInputs} title="Edite City" link="/cities" />}></Route>
              <Route path="addDir" element={<New inputs={dirInputs} title="Add New Directorate" link="/cities"/>}></Route>
            </Route>

            <Route path="drugs">
              <Route index element={<Dlist />} />
              <Route path=":drugId" element={<SingleDrug />} />
              <Route path="new" element={<New inputs={drugsInputs} title="Add New Drug" link="/drugs" />} />
              <Route path="edit" element={<Edite inputs={drugsInputs} title="Edite Drug" link="/drugs" />}></Route>
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
