import Divider from '../../../UI/Divider/Divider';
import './LandingContent.css';
import Card from '@material-ui/core/Card';
// ! IMPORT SVG FILES
import resource from './features/resources.svg';
import chat from './features/chat.svg';
import advice from './features/advice.svg';
import connect from './features/connect.svg';
import explore from './features/explore.svg'

const LandingContent = () => {
  return (
    <>
      <div className='landing-content'>
        <article className='content-article'>
          Youth mentoring Ghana, connect youth to competent and diligence
          mentors, where mentors equip and guide mentees to make appropriate and
          accurate decision for their future.
        </article>
      </div>

      <Divider />

      <h1 className='features-header'>Features</h1>

      <div className='landing-card'>
        <Card className='card'>
          <h2 className='card__header'>Resources</h2>
          <div className='wrap'>
            <img src={resource} alt='Resources' />
            <p className='card__para'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc
              odio, cursus non dolor sed, pretium bibendum nisl.
            </p>
          </div>
        </Card>
        <Card className='card'>
          <h2 className='card__header'>Chat</h2>
          <div className='wrap'>
            <img src={chat} alt='Resources' />
            <p className='card__para'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc
              odio, cursus non dolor sed, pretium bibendum nisl.
            </p>
          </div>
        </Card>
        <Card className='card'>
          <h2 className='card__header'>Advice</h2>
          <div className='wrap'>
            <img src={advice} alt='Resources' />
            <p className='card__para'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc
              odio, cursus non dolor sed, pretium bibendum nisl.
            </p>
          </div>
        </Card>
        <Card className='card'>
          <h2 className='card__header'>Connect</h2>
          <div className='wrap'>
            <img src={connect} alt='Resources' />
            <p className='card__para'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc
              odio, cursus non dolor sed, pretium bibendum nisl.
            </p>
          </div>
        </Card>
        <Card className='card'>
          <h2 className='card__header'>Explore</h2>
          <div className='wrap'>
            <img src={explore} alt='Resources' />
            <p className='card__para'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc
              odio, cursus non dolor sed, pretium bibendum nisl.
            </p>
          </div>
        </Card>
        <Card className='card'>
          <h2 className='card__header'>Make Decision</h2>
          <div className='wrap'>
            <img src={advice} alt='Resources' />
            <p className='card__para'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc
              odio, cursus non dolor sed, pretium bibendum nisl.
            </p>
          </div>
        </Card>
      </div>
      <Divider />
    </>
  );
};

export default LandingContent;
