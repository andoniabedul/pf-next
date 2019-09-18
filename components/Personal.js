import '../styles/personal.less';

const Personal = (props) => {
  const { location, name, description } = props; 
  return (
    <div className="personal">
      <h1 className="personal-name">Hola, mi nombre es {name}</h1>
      <h3 className="personal-location">📍{location.city}, {location.country}</h3>
      <h3 className="personal-description">{description}</h3>
    </div>
  )
}

export default Personal