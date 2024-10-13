const Tour = (props) => {
  return <div>
    {props.data.map((data) => {
        const {id, name, info,image,price } = data;
        return <div key={id}>
            <h2>{name}</h2>
            <p>{info}</p>
            <img src={image} alt={name} />
            <span>${price}</span>
        </div>
    })}
  </div>
};

export default Tour;
