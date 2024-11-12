import NaviButton from '../shared/components/NaviButton';
import { URL_CONST } from '../shared/const/url';

const About = () => {
  return (
    <div className="wrapper">
      about
      <NaviButton text="go main" url={URL_CONST.root} />
    </div>
  );
};

export default About;
