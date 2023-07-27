import React, { ReactNode } from 'react';
import MuiAccordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; 
import AtomTypography from '../../atoms/Typography';

interface AccordionProps {
    title: string;
    children: ReactNode;
}

const CustomAccordion: React.FC<AccordionProps> = ({ title, children }) => {
    return (
        <MuiAccordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <AtomTypography variant="h6">{title}</AtomTypography>
            </AccordionSummary>
            <AccordionDetails>
                {children}
            </AccordionDetails>
        </MuiAccordion>
    );

};

export default CustomAccordion;
