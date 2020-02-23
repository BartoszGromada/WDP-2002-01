import React from 'react';
import PropTypes from 'prop-types';

import styles from './Feedback.module.scss';
import FeedbackBox from '../../common/FeedbackBox/FeedbackBox';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

class Feedback extends React.Component {
  state = {
    activePage: 0,
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  render() {
    const { activePage } = this.state;
    const {
      // opinionText,
      // opinionImage,
      // opinionName,
      // opinionTitle,
      feedback,
    } = this.props;

    // eslint-disable-next-line no-console
    console.log('feedback', feedback);

    const pagesCount = feedback.length;

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>Client Feedback</h3>
              </div>
              <div className='col'></div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <div className={styles.iconWrapper}>
                <FontAwesomeIcon className={styles.icon} icon={faQuoteRight} />
              </div>
            </div>
            <div className='row'>
              <FeedbackBox
              // opinionText={opinionText}
              // opinionImage={opinionImage}
              // opinionName={opinionName}
              // opinionTitle={opinionTitle}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
<<<<<<< HEAD
  opinionText: PropTypes.number,
  opinionImage: PropTypes.number,
  opinionName: PropTypes.number,
  opinionTitle: PropTypes.number,
=======
  feedback: PropTypes.node,
  // opinionText: PropTypes.node,
  // opinionImage: PropTypes.node,
  // opinionName: PropTypes.node,
  // opinionTitle: PropTypes.node,
>>>>>>> Add container & redux
};

// Feedback.defaultProps = {
//   opinionText: initialState.feedback[0].opinion,
//   opinionImage: initialState.feedback[0].image,
//   opinionName: initialState.feedback[0].name,
//   opinionTitle: initialState.feedback[0].title,
// };

export default Feedback;