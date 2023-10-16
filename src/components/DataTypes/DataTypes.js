import './DataTypesStyles.css';
import bar from './images/DataTypes.png'

function DataTypes() {
  return (
    <div className='data-types-outer'>
      <div className='data-types-center'>
        <div className='data-types-header'>
          For every data type
        </div>
      </div>
      <div className='data-types-center'>
        <div>
          <img src={bar} alt="Something went wrong!" />
        </div>
      </div>
    </div>
  );
}

export default DataTypes;