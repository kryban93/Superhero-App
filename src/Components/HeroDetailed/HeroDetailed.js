import React, { useState, useEffect } from 'react';
import './HeroDetailed.scss';
import { getDetailedInfoById } from '../../requests';
import { useParams, withRouter, useHistory } from 'react-router';

const HeroDetailed = () => {
  const [detailedHeroInfo, setDetailedHeroInfo] = useState([]);
  let history = useHistory();

  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    getDetailedInfoById(id).then((searchResults) => {
      const { data } = searchResults;
      const results = data;
      console.log(results);
      setDetailedHeroInfo(results);
    });
  }, [id]);

  return (
    <div role='button' className='modal__wrapper' onclick={() => history.goBack()}>
      <section className='modal__wrapper__inner' onClick={(e) => e.stopPropagation()}>
        <p>This is text in modal</p>
      </section>
    </div>
  );
};

export default withRouter(HeroDetailed);
