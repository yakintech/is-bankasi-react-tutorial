import FetchOperationSample from "./fetchSample/FetchOperationSample";


{/* <></> Bu düğümlere fragment deniyor */ }
function App() {

  const merhaba = () => {
    alert("Merhaba prop event!")
  }

  return (<>
    <FetchOperationSample></FetchOperationSample>
    {/* <StateArraySample></StateArraySample> */}
    {/* <UserDetail name='Çağatay' surname='Yıldız' age={35} city='İstanbul'></UserDetail>
    <AlarmButton color='tomato' width={200} heigth={200}></AlarmButton>
    <PropEventSample merhaba={merhaba}></PropEventSample> */}
  </>
  );
}

export default App;
