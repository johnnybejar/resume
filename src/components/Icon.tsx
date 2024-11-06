type IconDetails = {
    name: string;
    alphaname: string;
  };

function Icon(props: IconDetails) {
    
  return (
    <figure className="dev-figure">
        <img
            className="dev-icon"
            src={`static/images/devicons/${props.alphaname}.svg`}
            alt="dev icon"
            title={props.alphaname}
        />
        <figcaption>{props.name}</figcaption>
    </figure>
  )
}

export default Icon