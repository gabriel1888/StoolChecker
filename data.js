/* Educational appearance guide only. This is not a diagnosis or clinician review. */

const STOOL_SCALE_COLORS = [
  '#E24B4A', '#EF9F27', '#97C459', '#1D9E75', '#7F77DD', '#EF9F27', '#E24B4A'
];

const URINE_SCALE_COLORS = [
  '#FEFCE8', '#FEF08A', '#FDE047', '#EAB308', '#CA8A04', '#92400E', '#FCA5A5', '#C4B5FD', '#D1D5DB'
];

const STOOL_TYPES = {
  1: {
    pill: 'Hard / lumpy',
    pillBg: '#FCEBEB',
    pillColor: '#A32D2D',
    typeLabel: 'Type 1 · Bristol Stool Chart',
    headline: 'Hard, separate lumps can occur with constipation',
    scalePos: 1,
    advice: [
      'One bowel movement cannot identify its cause. Notice whether this is a continuing change, difficult or painful to pass, or linked with other symptoms.',
      'For constipation, NHS suggests gradual fibre changes, regular activity, not delaying the urge to poo, and drinking fluids that are appropriate for you.',
      'A pharmacist can advise if diet and lifestyle changes are not helping. This is general information, not a diagnosis. Speak to a health professional if you are concerned.'
    ],
    gp: {
      show: true,
      urgent: false,
      text: 'Book a GP appointment if it is not improving, happens regularly, or comes with blood in your poo, unexplained weight loss, ongoing tiredness, a change in bowel habit or tummy pain.',
      bg: '#FAEEDA',
      border: '#854F0B',
      color: '#633806'
    }
  },
  2: {
    pill: 'Hard / lumpy',
    pillBg: '#FAEEDA',
    pillColor: '#854F0B',
    typeLabel: 'Type 2 · Bristol Stool Chart',
    headline: 'A lumpy sausage shape can occur with constipation',
    scalePos: 2,
    advice: [
      'Appearance alone cannot diagnose constipation or explain why it is happening. Note whether passing stool is difficult, painful or less frequent than usual.',
      'NHS advice for constipation includes gradual fibre changes, regular movement, allowing time for the toilet and drinking fluids that are suitable for you.',
      'A pharmacist can advise if self-care is not helping. This is general information, not a diagnosis. Speak to a health professional if you are concerned.'
    ],
    gp: {
      show: true,
      urgent: false,
      text: 'See a GP if this is not getting better, is regular, or you have blood in your poo, unexplained weight loss, ongoing tiredness, a bowel-habit change or tummy pain.',
      bg: '#FAEEDA',
      border: '#854F0B',
      color: '#633806'
    }
  },
  3: {
    pill: 'Cracked surface',
    pillBg: '#EAF3DE',
    pillColor: '#3B6D11',
    typeLabel: 'Type 3 · Bristol Stool Chart',
    headline: 'A cracked sausage is one Bristol chart pattern',
    scalePos: 3,
    advice: [
      'This shape by itself cannot tell whether your bowel health is normal or identify a cause.',
      'If stools are hard to pass, NHS constipation advice includes gradual fibre changes, regular activity, allowing time for the toilet and fluids appropriate to you.',
      'This is general information, not a diagnosis. Speak to a health professional if you are concerned.'
    ],
    gp: {
      show: false,
      urgent: false,
      text: '',
      bg: '#FAEEDA',
      border: '#854F0B',
      color: '#633806'
    }
  },
  4: {
    pill: 'Smooth / soft',
    pillBg: '#E1F5EE',
    pillColor: '#0F6E56',
    typeLabel: 'Type 4 · Bristol Stool Chart',
    headline: 'A smooth, soft stool is one Bristol chart pattern',
    scalePos: 4,
    advice: [
      'This appearance alone cannot confirm gut health, microbiome health or the absence of a condition.',
      'Keep note of any new, persistent or concerning change in bowel habit, especially if it comes with pain, blood, weight loss or ongoing tiredness.',
      'This is general information, not a diagnosis. Speak to a health professional if you are concerned.'
    ],
    gp: {
      show: false,
      urgent: false,
      text: '',
      bg: '#FAEEDA',
      border: '#854F0B',
      color: '#633806'
    }
  },
  5: {
    pill: 'Soft pieces',
    pillBg: '#EEEDFE',
    pillColor: '#534AB7',
    typeLabel: 'Type 5 · Bristol Stool Chart',
    headline: 'Soft pieces are one Bristol chart pattern',
    scalePos: 5,
    advice: [
      'A single softer stool cannot show a cause or diagnose diarrhoea. Consider whether the change continues or occurs with pain, fever or bleeding.',
      'If you have diarrhoea, NHS advises fluids and rest, and eating when you feel able; fatty or spicy foods may be best avoided if they make symptoms worse.',
      'This is general information, not a diagnosis. Speak to a health professional if you are concerned.'
    ],
    gp: {
      show: false,
      urgent: false,
      text: '',
      bg: '#FAEEDA',
      border: '#854F0B',
      color: '#633806'
    }
  },
  6: {
    pill: 'Loose / mushy',
    pillBg: '#FAEEDA',
    pillColor: '#854F0B',
    typeLabel: 'Type 6 · Bristol Stool Chart',
    headline: 'Mushy stool can occur with diarrhoea',
    scalePos: 6,
    advice: [
      'Loose stool may have many causes. It cannot identify the cause or confirm a diagnosis from appearance alone.',
      'If you have diarrhoea, NHS advises rest and fluids. Take small sips if you feel sick, and eat when you feel able.',
      'If infection is possible, wash hands carefully and do not prepare food for other people where possible. Seek medical advice if symptoms persist or concern you.'
    ],
    gp: {
      show: true,
      urgent: true,
      text: 'In the UK, call NHS 111 now if you cannot keep fluids down, have bloody diarrhoea or bleeding from the bottom, still have signs of dehydration, or diarrhoea lasts more than 7 days. Call 999 or go to A&E for sudden severe tummy pain, confusion, severe breathing difficulty, or vomiting blood.',
      bg: '#FCEBEB',
      border: '#A32D2D',
      color: '#791F1F'
    }
  },
  7: {
    pill: 'Watery stool',
    pillBg: '#FCEBEB',
    pillColor: '#A32D2D',
    typeLabel: 'Type 7 · Bristol Stool Chart',
    headline: 'Watery stool can occur with diarrhoea',
    scalePos: 7,
    advice: [
      'Watery stool can happen with diarrhoea, but its appearance cannot tell you the cause.',
      'NHS advises rest and fluids. Take small sips if you feel sick, and eat when you feel able; fatty or spicy foods may be best avoided if they worsen symptoms.',
      'To reduce spread of a possible infection, wash hands with soap and water and stay off work or school until 2 days after diarrhoea stops. Seek medical advice if symptoms persist or concern you.'
    ],
    gp: {
      show: true,
      urgent: true,
      text: 'In the UK, call NHS 111 now if you cannot keep fluids down, have bloody diarrhoea or bleeding from the bottom, still have signs of dehydration, or diarrhoea lasts more than 7 days. Call 999 or go to A&E for sudden severe tummy pain, confusion, severe breathing difficulty, or vomiting blood.',
      bg: '#FCEBEB',
      border: '#A32D2D',
      color: '#791F1F'
    }
  }
};

const URINE_TYPES = {
  1: {
    pill: 'Very pale',
    pillBg: '#E6F1FB',
    pillColor: '#185FA5',
    typeLabel: 'Clear / very pale · Urine Colour Guide',
    headline: 'Urine colour is only one observation',
    scalePos: 1,
    advice: [
      'Very pale urine can follow fluid intake, but colour alone cannot show whether you are overhydrated or whether your kidneys are healthy.',
      'Do not deliberately restrict fluids using a colour chart. Follow any individual fluid plan from your healthcare team.',
      'This is general information, not a diagnosis. Speak to a health professional if you are concerned.'
    ],
    gp: {
      show: false,
      urgent: false,
      text: '',
      bg: '#E6F1FB',
      border: '#185FA5',
      color: '#124476'
    }
  },
  2: {
    pill: 'Pale yellow',
    pillBg: '#E1F5EE',
    pillColor: '#0F6E56',
    typeLabel: 'Pale yellow · Urine Colour Guide',
    headline: 'Pale urine can be a usual appearance',
    scalePos: 2,
    advice: [
      'Pale urine is one common appearance, but colour alone cannot assess hydration, kidney health or a medical condition.',
      'Drink regularly in a way that suits your thirst, activity, weather, illness and any personalised clinical advice.',
      'This is general information, not a diagnosis. Speak to a health professional if you are concerned.'
    ],
    gp: {
      show: false,
      urgent: false,
      text: '',
      bg: '#E1F5EE',
      border: '#0F6E56',
      color: '#0B4E40'
    }
  },
  3: {
    pill: 'Yellow',
    pillBg: '#EAF3DE',
    pillColor: '#3B6D11',
    typeLabel: 'Yellow · Urine Colour Guide',
    headline: 'Yellow urine is one common appearance',
    scalePos: 3,
    advice: [
      'Colour varies and cannot by itself diagnose dehydration, infection or kidney health.',
      'Pay attention to a new or persistent change, especially with pain when peeing, needing to pee more often, fever, back pain or blood in your pee.',
      'This is general information, not a diagnosis. Speak to a health professional if you are concerned.'
    ],
    gp: {
      show: false,
      urgent: false,
      text: '',
      bg: '#EAF3DE',
      border: '#3B6D11',
      color: '#2D540D'
    }
  },
  4: {
    pill: 'Darker yellow',
    pillBg: '#FAEEDA',
    pillColor: '#854F0B',
    typeLabel: 'Dark yellow · Urine Colour Guide',
    headline: 'Darker urine can have several explanations',
    scalePos: 4,
    advice: [
      'Dark yellow, strong-smelling urine and peeing less than usual can be signs of dehydration, but colour alone cannot diagnose it.',
      'If you are unwell or losing fluid through vomiting or diarrhoea, NHS advises fluids; start with small sips and gradually drink more if you feel sick.',
      'This is general information, not a diagnosis. Speak to a health professional if you are concerned.'
    ],
    gp: {
      show: true,
      urgent: true,
      text: 'In the UK, call NHS 111 if dark yellow pee or peeing less than usual comes with dizziness that does not settle when standing, unusual tiredness or drowsiness, fast breathing or a fast heartbeat. Call 999 or go to A&E for confusion, difficulty breathing, or blue, grey, pale or blotchy skin, lips or tongue.',
      bg: '#FCEBEB',
      border: '#A32D2D',
      color: '#791F1F'
    }
  },
  5: {
    pill: 'Orange / honey',
    pillBg: '#FAEEDA',
    pillColor: '#854F0B',
    typeLabel: 'Honey / orange · Urine Colour Guide',
    headline: 'Orange or honey-coloured urine needs context',
    scalePos: 5,
    advice: [
      'Urine colour can change for different reasons. It cannot by itself diagnose dehydration or a cause of illness.',
      'Dark urine together with thirst, dizziness, tiredness or peeing less than usual may need prompt advice, particularly during vomiting or diarrhoea.',
      'This is general information, not a diagnosis. Speak to a health professional if you are concerned.'
    ],
    gp: {
      show: true,
      urgent: true,
      text: 'In the UK, call NHS 111 if dark yellow pee or peeing less than usual comes with dizziness that does not settle when standing, unusual tiredness or drowsiness, fast breathing or a fast heartbeat. Call 999 or go to A&E for confusion, difficulty breathing, or blue, grey, pale or blotchy skin, lips or tongue.',
      bg: '#FCEBEB',
      border: '#A32D2D',
      color: '#791F1F'
    }
  },
  6: {
    pill: 'Dark / brown',
    pillBg: '#FCEBEB',
    pillColor: '#A32D2D',
    typeLabel: 'Brown / dark orange · Urine Colour Guide',
    headline: 'Unexplained dark or brown urine needs attention',
    scalePos: 6,
    advice: [
      'Dark or brown urine can have different causes. Appearance alone cannot identify one.',
      'Blood in urine may look bright pink, red or dark brown. Get medical help if you think there may be blood, even if the amount is small or you are not sure.',
      'This is general information, not a diagnosis. Speak to a health professional if you are concerned.'
    ],
    gp: {
      show: true,
      urgent: true,
      text: 'In the UK, ask for an urgent GP appointment or get help from NHS 111 if you have, or think you may have, blood in your pee. Call 999 or go to A&E if you are confused, drowsy or have difficulty speaking.',
      bg: '#FCEBEB',
      border: '#A32D2D',
      color: '#791F1F'
    }
  },
  7: {
    pill: 'Pink / red',
    pillBg: '#FCEBEB',
    pillColor: '#A32D2D',
    typeLabel: 'Pink / red · Urine Colour Guide',
    headline: 'Pink or red urine should be checked',
    scalePos: null,
    advice: [
      'Pink or red urine may not be blood: beetroot, a new medicine, vaginal bleeding or bleeding from the bottom can change what you see.',
      'Even so, do not self-diagnose. NHS says possible blood in urine should be checked, even if there is only a small amount or you are unsure.',
      'This is general information, not a diagnosis. Speak to a health professional if you are concerned.'
    ],
    gp: {
      show: true,
      urgent: true,
      text: 'In the UK, ask for an urgent GP appointment or get help from NHS 111 if you have, or think you may have, blood in your pee. Call 999 or go to A&E if you are confused, drowsy or have difficulty speaking.',
      bg: '#FCEBEB',
      border: '#A32D2D',
      color: '#791F1F'
    }
  },
  8: {
    pill: 'Unusual colour',
    pillBg: '#EEEDFE',
    pillColor: '#534AB7',
    typeLabel: 'Purple / blue · Urine Colour Guide',
    headline: 'An unusual colour cannot be explained by a chart',
    scalePos: null,
    advice: [
      'A colour chart cannot identify the cause of an unusual colour. Do not assume it is harmless or try to diagnose it from appearance.',
      'Make a note of any new medicines, foods or symptoms to discuss with a healthcare professional if the change is new or continues.',
      'This is general information, not a diagnosis. Speak to a health professional if you are concerned.'
    ],
    gp: {
      show: true,
      urgent: false,
      text: 'Contact a GP or NHS 111 in the UK if the colour is new, persists, or comes with pain, fever, feeling unwell or blood in your pee. Call 999 or go to A&E if you are confused, drowsy or have difficulty speaking.',
      bg: '#EEEDFE',
      border: '#534AB7',
      color: '#3C348E'
    }
  },
  9: {
    pill: 'Cloudy / foamy',
    pillBg: '#FAEEDA',
    pillColor: '#854F0B',
    typeLabel: 'Cloudy / foamy · Urine Appearance Guide',
    headline: 'Cloudy urine can occur with urinary symptoms',
    scalePos: null,
    advice: [
      'Cloudy urine can occur with a urinary tract infection, but it cannot confirm one. A single foamy appearance also cannot diagnose a cause.',
      'Possible UTI symptoms include pain or burning when peeing, needing to pee more often or urgently, lower tummy or back pain, fever, or feeling hot, cold or shivery.',
      'This is general information, not a diagnosis. Speak to a health professional if you are concerned.'
    ],
    gp: {
      show: true,
      urgent: true,
      text: 'In the UK, contact an urgent GP or NHS 111 for possible UTI with fever or shivering, worsening symptoms, lower tummy or back pain, blood in your pee, pregnancy, a weakened immune system, diabetes, a catheter, or if you are aged 65 or over, are a man, or are under 16. Call 999 or go to A&E if you are confused, drowsy or have difficulty speaking.',
      bg: '#FCEBEB',
      border: '#A32D2D',
      color: '#791F1F'
    }
  }
};
