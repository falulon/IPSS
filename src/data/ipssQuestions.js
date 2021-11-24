const ipssQuestions = [
  {
    id: "q1",
    heading: "Incomplete Emptying",
    title:
      "Over the last month, how often have you had a sensation of not emptying your bladder completely after you finished urinating?",
    options: [
      "Not at all",
      "Less than 1 time in 5",
      "Less than half the time",
      "About half the time",
      "More than half the time",
      "Almost always",
    ],
  },
  {
    id: "q2",
    heading: "Frequency",
    title:
      "During the last month, how often have you had to urinate again less than 2 hours after you finished urinating?",
    options: [
      "Not at all",
      "Less than 1 time in 5",
      "Less than half the time",
      "About half the time",
      "More than half the time",
      "Almost always",
    ],
  },
  {
    id: "q3",
    heading: "Intermittency",
    title:
      "During the last month, how often have you found you stopped and started again several times when you urinated?",
    options: [
      "Not at all",
      "Less than 1 time in 5",
      "Less than half the time",
      "About half the time",
      "More than half the time",
      "Almost always",
    ],
  },
  {
    id: "q4",
    heading: "Urgency",
    title:
      "During the last month, how often have you found it difficult to postpone urination?",
    options: [
      "Not at all",
      "Less than 1 time in 5",
      "Less than half the time",
      "About half the time",
      "More than half the time",
      "Almost always",
    ],
  },
  {
    id: "q5",
    heading: "Weak Stream",
    title:
      "During the last month, how often have you had a weak urinary stream?",
    options: [
      "Not at all",
      "Less than 1 time in 5",
      "Less than half the time",
      "About half the time",
      "More than half the time",
      "Almost always",
    ],
  },
  {
    id: "q6",
    heading: "Straining",
    title:
      "During the last month, how often have you had to push or strain to begin urination?",
    options: [
      "Not at all",
      "Less than 1 time in 5",
      "Less than half the time",
      "About half the time",
      "More than half the time",
      "Almost always",
    ],
  },
  {
    id: "q7",
    heading: "Sleeping",
    title:
      "During the last month, how many times did you most typically get up to urinate from the time you went to bed at night until the time you got up in the morning?",
    options: [
      "None",
      "One time",
      "Two times",
      "Three times",
      "Four times",
      "Five or more times ",
    ],
  }  
];

export const qOL = {
  id: "q8",
  heading: "Quality of Life",
  title:
    "If you were to spend the rest of your life with your urinary condition the way it is now, how would you feel about that?",
  options: [
    "Delighted",
    "Pleased",
    "Mostly satisfied",
    "Mixed",
    "Mostly dissatisfied",
    "Unhappy",
    "Terrible",
  ],
}

export const severityScale = [
  { level: "Mild", minScore: 0, maxScore: 7 },
  { level: "Moderate", minScore: 8, maxScore: 19 },
  { level: "Severe", minScore: 20, maxScore: 35 },
];

export default ipssQuestions;
