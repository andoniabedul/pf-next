import '../styles/tags.less';

const simpleTag  = (tag) => <li key={tag} className="tag">{tag}</li> 
const complexTag = (tag) => {
  return (
    <li key={tag.name} className="tag">
      <a href={tag.link} className="tag-link" target="_blank">
        {tag.name}
      </a>
    </li>
  )
}
const Tags = (props) => {
  const tags = props.elements;
  return (
    <ul className="tags">
      {
        tags
        .map((tag) => {
          if(typeof tag === "object") return complexTag(tag);
          else if(typeof tag === "string") return simpleTag(tag);
        })
      }
    </ul>
  )
}

export default Tags