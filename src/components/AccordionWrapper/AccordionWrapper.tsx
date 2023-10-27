import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


interface Props {
  title: string;
  description: string | React.ReactNode;
}



export const AccordionWrapper = ({ title, description }: Props) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography> {title} </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {description}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};