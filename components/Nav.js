import '../styles/nav.less';

const getNavItem = (url, label) => <li key={label}><a href={url}>{label}</a></li>

const Nav = (props) => {
  const { items, title } = props
  return (
    <nav className="nav">
      <h1><a href="/">{title}</a></h1>
      <ul>
        {
          items.map(item => getNavItem(item.url, item.label))
        }
      </ul>
    </nav>
  )
}

export default Nav
