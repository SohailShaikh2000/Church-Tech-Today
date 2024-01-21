/* eslint-disable react/prop-types */
import "../styles/QuestionBar.scss";

const QuestionBar = ({ question }) => {
  return (
    <div className="question-bar-container">
      <div className="question-bar" style={{ width: `${question}%` }}></div>
    </div>
  );
};

export default QuestionBar;
