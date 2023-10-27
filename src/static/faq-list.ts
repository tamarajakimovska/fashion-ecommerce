export interface Question {
    question: string;
    answer: string;
}

export interface FaqItem {
    title: string;
    questions: Question[]
}

export const FAQ_LIST: FaqItem[] = [
  {
    title: 'Delivery Information',
    questions: [
      {
        question: 'Shipping destinations',
        answer: 'For now we ship to the following countries: Austria, Belgium, Czech Republic, Lithuania, Luxembourg, Latvia, Slovakia, Hungary, Bulgaria, Romania, Slovenia, Finland, Denmark, Estonia, Netherlands, Germany, France, Great Britain, Croatia, Ireland, Sweden, Italy, Greece, Spain, Portugal and Poland.'
      },
      {
        question: 'Shipping times',
        answer: 'For now we ship to the following countries: Austria, Belgium, Czech Republic, Lithuania, Luxembourg, Latvia, Slovakia, Hungary, Bulgaria, Romania, Slovenia, Finland, Denmark, Estonia, Netherlands, Germany, France, Great Britain, Croatia, Ireland, Sweden, Italy, Greece, Spain, Portugal and Poland.'


      },
      {
        question: 'Tracking your parcel',
        answer: 'For now we ship to the following countries: Austria, Belgium, Czech Republic, Lithuania, Luxembourg, Latvia, Slovakia, Hungary, Bulgaria, Romania, Slovenia, Finland, Denmark, Estonia, Netherlands, Germany, France, Great Britain, Croatia, Ireland, Sweden, Italy, Greece, Spain, Portugal and Poland.'

      }
    ]
  },
  {
    title: 'Returns & Refunds',
    questions: [
      {
        question: 'How can I return my purchase?',
        answer: 'For now we ship to the following countries: Austria, Belgium, Czech Republic, Lithuania, Luxembourg, Latvia, Slovakia, Hungary, Bulgaria, Romania, Slovenia, Finland, Denmark, Estonia, Netherlands, Germany, France, Great Britain, Croatia, Ireland, Sweden, Italy, Greece, Spain, Portugal and Poland.'
      },
      {
        question: 'Can I cancel my order?',
        answer: 'For now we ship to the following countries: Austria, Belgium, Czech Republic, Lithuania, Luxembourg, Latvia, Slovakia, Hungary, Bulgaria, Romania, Slovenia, Finland, Denmark, Estonia, Netherlands, Germany, France, Great Britain, Croatia, Ireland, Sweden, Italy, Greece, Spain, Portugal and Poland.'
      }
    ]
  },
   {
    title: 'How to choose an run',
    questions: [
      {
        question: 'How does shipping work?',
        answer: 'For now we ship to the following countries: Austria, Belgium, Czech Republic, Lithuania, Luxembourg, Latvia, Slovakia, Hungary, Bulgaria, Romania, Slovenia, Finland, Denmark, Estonia, Netherlands, Germany, France, Great Britain, Croatia, Ireland, Sweden, Italy, Greece, Spain, Portugal and Poland.'
      },
      {
        question: 'Should I wash items myself?',
        answer: 'For now we ship to the following countries: Austria, Belgium, Czech Republic, Lithuania, Luxembourg, Latvia, Slovakia, Hungary, Bulgaria, Romania, Slovenia, Finland, Denmark, Estonia, Netherlands, Germany, France, Great Britain, Croatia, Ireland, Sweden, Italy, Greece, Spain, Portugal and Poland.'
      }
    ]
  }
]
