import React from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';

const FinalPoem = (props) => {

  return (
    <div className="FinalPoem">
      {/* this part should be hidden before submission */}
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>

      </section>
      {/* this part should be shown before submission */}
      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </div>
    </div>
  );
}

FinalPoem.propTypes = {
  isSubmitted: PropTypes.bool.isRequired,//hid recent submission and player submission
  submissions: PropTypes.arrayOf(PropTypes.string).isRequired,
  revealPoem: PropTypes.func.isRequired,// callback from the game
};

export default FinalPoem;
