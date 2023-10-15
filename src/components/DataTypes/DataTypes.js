import './DataTypesStyles.css';
import bar from './images/Data Types.png'
import "@fontsource/space-grotesk";
import "@fontsource/space-grotesk/700.css";

function DataTypes() {
  return (
    <div>
      <div className='center'>
        <div className='header'>
          For every data type
        </div>
      </div>
      <div className='center'>
        <div className='container'>
          <img src={bar} alt="Something went wrong!" />
        </div>
      </div>
    </div>
  );
}

export default DataTypes;