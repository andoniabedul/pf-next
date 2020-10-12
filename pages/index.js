// DEPENDENCIES
import fetch from 'isomorphic-unfetch';
// STYLES
import '../styles/index.less';
// COMPONENTS
import Social from '../components/Social';
import Tags from '../components/Tags';
import Personal from '../components/Personal';
import Nav from '../components/Nav';
// UTILS
import { FALLBACK_CV } from '../util/constants';

const Home = (props) => {
  const lang = 'es_ES'
  const data = props.langs[lang]
  return (
    <main>
      <Nav title={props.menu.title} items={props.menu.items} />
      <div className='home'>
        <Personal name={props.name} location={data.location} description={data.description} />
        <hr />
        <section>
          <div>Lenguajes en los que disfruto desarrollar: <Tags elements={data.dev.langs} /></div>
          <div>Con tecnología como: <Tags elements={data.dev.tech}/></div>
          <div>Estoy prendiendo: <Tags elements={data.dev.learning} /></div>
        </section>
        <hr />
        <section>Pasiones: <Tags elements={data.passions} /></section>
        <hr />
        <section>Social media: <Social elements={props.social} /></section>
      </div>
    </main>
  )
}

Home.getInitialProps = async function() {
  //const response = await fetch(GITHUB_GIST_URL_V1);
  const response = FALLBACK_CV;
  return response;
}

export default Home