import JsxMapSample from "./jsxSample/JsxMapSample";
import AlarmButton from "./propsSample/AlarmButton";
import PropEventSample from "./propsSample/PropEventSample";
import UserDetail from "./propsSample/UserDetail";
import SayacSample from "./stateSample/SayacSample";
import StateArraySample from "./stateSample/StateArraySample";

{/* <></> Bu düğümlere fragment deniyor */ }
function App() {

  const merhaba = () => {
    alert("Merhaba prop event!")
  }

  return (<>
    <StateArraySample></StateArraySample>
    {/* <UserDetail name='Çağatay' surname='Yıldız' age={35} city='İstanbul'></UserDetail>
    <AlarmButton color='tomato' width={200} heigth={200}></AlarmButton>
    <PropEventSample merhaba={merhaba}></PropEventSample> */}
  </>
  );
}

export default App;
