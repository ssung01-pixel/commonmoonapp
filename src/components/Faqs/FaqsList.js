import React from "react"
import styled from "styled-components"

import Faq from "./Faq"
import { StyledFaqsList } from "./faq-styles"

const faqsData = [
  {
    question: "When will I receive my order?",
    answer: "Since all purchases are pre-orders, expect to receive your order 2-4 weeks from purchase date."
  }, 

  { 
    question: "Who is manufacturing the merchandise?",
    answer: "Common Moon, a 501(c)3 philanthropic clothing brand and manufacturer, is responsible for manufacturing and fulfilling merchandise."
  },
  { 
    question: "Is the clothing ethically produced?",
    answer: "Yes. 100% of the printing process occurs in the United States. Details can be found on our manufacturer's website (Common Moon)."
  },
  { 
    question: "Where can I find sizing information?",
    answer: "Sizing information can be found in the product description for each item."
  },
]

const FaqsList = () => {
  return (
    <StyledFaqsList>
      {faqsData.map((faq, i) => (
        <Faq key={"faq_" + i} question={faq.question} answer={faq.answer} />
      ))}
    </StyledFaqsList>
  )
}

export default FaqsList
