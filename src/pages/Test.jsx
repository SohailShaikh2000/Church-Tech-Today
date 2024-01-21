import { useState, useEffect, useContext } from "react";
import React from "react";
import "../styles/Test.scss";
import ProgressBar from "../components/ProgressBar";
import QuestionBar from "../components/QuestionBar";
import { Slider, Box } from "@mui/material";
import Left from "../assets/left-arrow.png";
import Right from "../assets/right-arrow.png";
import SliderValueContext from "../components/SliderValue";
import { useNavigate } from "react-router-dom";

function valuetext(value) {
  return `${value}°C`;
}

export default function DiscreteSlider() {
  const navigate = useNavigate();

  const sliderContext = useContext(SliderValueContext);

  const [activeSec, setActiveSec] = useState(0);
  const [activeSecTitle, setActiveSecTitle] = useState(0);
  const [totalQuestion, setTotalQuestion] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [currentSectionQuestionAmount, setCurrentSectionQuestionAmount] =
    useState(0);
  const [currentSectionQuestion, setCurrentSectionQuestion] = useState(0);
  const [sliderValue, setSliderValue] = useState(null);
  const [totalProgress, setTotalProgress] = useState(0);
  const [questionAnswered, setQuestionAnswered] = useState(0);
  const [sections, setSections] = useState([
    {
      title: "STRATEGY",
      questions: [
        {
          question:
            "Our church's ministry strategy is firm but flexible to accommodate unexpected game changers such as AI.",
        },
        {
          question:
            "Our leadership team knows of the potential risks and rewards of leveraging AI.",
        },
        {
          question:
            "Our leadership team understands the value of tapping experts to educate our staff about AI.",
        },
        {
          question:
            "Our church should have an AI policy that guides staff on tools, training, attribution, ethical boundries, etc",
        },
      ],
      progress: 0,
    },
    {
      title: "UNDERSTANDING",
      questions: [
        {
          question:
            "I have a good idea of how churches, in general, can use AI in ministry.",
        },
        {
          question:
            "I am aware some churches are using AI very well in their ministry.",
        },
        {
          question:
            "I have some specific ideas or examples of how our church can utilize AI for ministry work.",
        },
        {
          question:
            "Some staff and leader in our church are using AI at work. ",
        },
      ],
      progress: 0,
    },
    {
      title: "APPLICATION",
      questions: [
        {
          question:
            "AI can save our pastor(s) time and effort invested in sermon preparation by summarizing articles, helping understand various arguments, etc.",
        },
        {
          question:
            "AI can be beneficial regarding content for social media, blogs, bulletin, videos,etc.",
        },
        {
          question:
            "I know we can improve reporting, optimizes our processes, and set helpful reminders with AI.",
        },
        { question: "I want to learn how I can use AI for my work." },
      ],
      progress: 0,
    },
    {
      title: "DIRECTION",
      questions: [
        {
          question:
            "Our church should actively embrace , to varying degrees, education on AI and AI tools to optimise our ministry operations.",
        },
        {
          question:
            "AI tools, like ChatGPT, are not passing trends; AI will not become obsolete anytime soon.",
        },
        {
          question:
            "I am not worried about AI due to it's ability to harm humanity/take over the world, or other bad scenarios. ",
        },
        {
          question:
            "Our church leaders can make the right decisions on how our church may or may not leverage AI for ministry.",
        },
      ],
      progress: 0,
    },
  ]);

  const questionBar = [
    { title: "Strongly <br /> Disagree" },
    { title: "Disagree" },
    { title: "Neutral" },
    { title: "Agree" },
    { title: "Strongly <br /> Agree" },
  ];

  useEffect(() => {
    setActiveSecTitle(sections[activeSec]?.title);
    setCurrentSectionQuestionAmount(sections[activeSec]?.questions?.length);
  }, [activeSec]);

  useEffect(() => {
    // const initialValue = 0;
    // // const sumWithInitial = section.questions?.reduce(
    // //   (acc, cur) => acc + cur.question.length,
    // //   initialValue
    // // );
    const allQue = sections?.map((item) => item.questions).flat(1);
    setTotalQuestion(allQue);
  }, []);

  const nextQuestion = (sliderN) => {
    setQuestionAnswered((prev) => prev + 1);
    if (activeQuestion <= totalQuestion?.length - 1 && activeQuestion >= 0) {
      setActiveQuestion((prev) => prev + 1);
    }
    let sec = sections;
    sec[activeSec].progress += 100 / sec[activeSec].questions.length;
    setSections(sec);
    setTotalProgress(totalProgress + 100 / totalQuestion.length);

    if (questionAnswered === currentSectionQuestionAmount - 1) {
      nextSection();
    }

    // let tempAnsArr = sliderContext.sliderValue;
    // tempAnsArr[activeQuestion].answer = sliderN;
    // // console.log(tempAnsArr)
    // if(activeQuestion === )
    if (sliderContext.sliderValue.some((e) => e.question === activeQuestion)) {
      let tempAnsArr = sliderContext.sliderValue;
      tempAnsArr[activeQuestion].answer = sliderN;
      sliderContext.setSliderValue(tempAnsArr);
    } else {
      sliderContext.setSliderValue((prev) => [
        ...prev,
        { question: activeQuestion, answer: sliderN },
      ]);
    }
  };
  // console.log(sliderContext.sliderValue)

  const prevQuestion = () => {
    if (activeQuestion == 0) {
      navigate("/");
      return;
    }
    setQuestionAnswered((prev) => prev - 1);
    if (activeQuestion > 0) {
      setActiveQuestion((prev) => prev - 1);
    }
    let sec = sections;
    sec[activeSec].progress -= 100 / sec[activeSec].questions.length;
    setSections(sec);
    if (
      questionAnswered - 1 ===
      currentSectionQuestionAmount - currentSectionQuestionAmount
    ) {
      prevSection();
    }
    setSliderValue(sliderContext.sliderValue[activeQuestion - 1]?.answer);
  };

  const nextSection = () => {
    if (activeSec < sections?.length - 1) {
      setActiveSec((prev) => prev + 1);
      setQuestionAnswered(0);
      // console.log(activeSec);
    }
    // console.log(activeQuestion)
  };

  const prevSection = () => {
    if (activeSec > 0) {
      setActiveSec(activeSec - 1);
      setQuestionAnswered(4);
    }
  };
  console.log(activeSec);

  const handleSlider = (e) => {
    // console.log(e)
    nextQuestion(e.target.value);
    setSliderValue(e.target.value);
    setTimeout(() => {
      if (
        sliderContext.sliderValue.some((e) => e.question === activeQuestion + 1)
      ) {
        setSliderValue(sliderContext.sliderValue[activeQuestion + 1].answer);
      } else {
        setSliderValue(null);
      }
    }, 750);
  };

  const stronglyDisagree = () => {
    nextQuestion();
    setSliderValue(0);
    setTimeout(() => {
      setSliderValue(null);
    }, 750);
  };

  const disagree = () => {
    nextQuestion();
    setSliderValue(25);
    setTimeout(() => {
      setSliderValue(null);
    }, 750);
  };

  const neutral = () => {
    nextQuestion();
    setSliderValue(50);
    setTimeout(() => {
      setSliderValue(null);
    }, 750);
  };

  const agree = () => {
    nextQuestion();
    setSliderValue(75);
    setTimeout(() => {
      setSliderValue(null);
    }, 750);
  };

  const stronglyAgree = () => {
    nextQuestion();
    setSliderValue(100);
    setTimeout(() => {
      setSliderValue(null);
    }, 750);
  };

  const nextHandler = () => {
    nextQuestion();
    if (
      sliderContext.sliderValue.some((e) => e.question === activeQuestion + 1)
    ) {
      setSliderValue(sliderContext.sliderValue[activeQuestion + 1].answer);
    } else {
      setSliderValue(0);
    }
  };

  // console.log("activeSEc", activeSec);
  // console.log("activeQuestion", activeQuestion);
  // console.log("context", sliderContext.sliderValue);
  // console.log("currentSectionQuestionAmount", currentSectionQuestionAmount);
  // console.log("questionAnswered", questionAnswered);
  // console.log("sections", sections);
  console.log("totalProgress", totalProgress);

  return (
    <div className="test-container">
      <div className="test-box">
        <div className="sections">
          {sections?.length &&
            sections?.map((item, index) => {
              return (
                <div className="bar" key={index}>
                  <ProgressBar progress={item.progress} />
                  <p
                    style={
                      item?.title === activeSecTitle
                        ? { fontWeight: 700, color: "rgb(110, 12, 249)" }
                        : null
                    }
                  >
                    {item?.title}
                  </p>
                </div>
              );
            })}
        </div>
        <div className="mobile-sections">
          <div className="bar">
            <ProgressBar progress={totalProgress} />
            <p>{sections[activeSec].title}</p>
          </div>
        </div>
        <div className="questions">
          <h2>
            {totalQuestion.length == activeQuestion
              ? activeQuestion
              : activeQuestion + 1}
            /{totalQuestion.length}
          </h2>
          <p>{totalQuestion[activeQuestion]?.question}</p>
        </div>
        <div className="slider-container">
          <Slider
            // defaultValue={null}
            // valueLabelDisplay={null}
            step={25}
            marks={true}
            min={0}
            max={100}
            onChange={handleSlider}
            value={sliderValue}
          />

          <div className="main-slider-headings">
            <div className="question-bars">
              <p dangerouslySetInnerHTML={{__html: questionBar[0]?.title}} onClick={() => stronglyDisagree()}></p>
              <p dangerouslySetInnerHTML={{__html: questionBar[1]?.title}} onClick={() => disagree()}></p>
              <p dangerouslySetInnerHTML={{__html: questionBar[2]?.title}} onClick={() => neutral()}></p>
              <p dangerouslySetInnerHTML={{__html: questionBar[3]?.title}} onClick={() => agree()}></p>
              <p dangerouslySetInnerHTML={{__html: questionBar[4]?.title}} onClick={() => stronglyAgree()}></p>
            </div>
          </div>
        </div>
        <div className="step-buttons">
          <div className="left">
            <img src={Left} alt="" />
            <button onClick={prevQuestion}>Prev</button>
          </div>
          {sliderContext.sliderValue.some(
            (e) => e.question === activeQuestion
          ) ? (
            <div onClick={() => nextHandler()} className="right">
              <button>Next</button>
              <img src={Right} alt="" />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
