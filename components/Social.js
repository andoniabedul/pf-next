import '../styles/social.less';

const Social = (props) => {
  const socialMedias = props.elements;
  return (
    <ul className="social">
      {
        Object.keys(socialMedias)
        .map((element) => (
            <li key={element} className="social-element">
              <a className="social-element-link" href={socialMedias[element]}>
                {element}
              </a>
            </li>
          )
        )
      }
    </ul>
  )
}

export default Social