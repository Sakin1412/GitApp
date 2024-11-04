import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { FaChevronDown } from "react-icons/fa6";


export default function AccordionExpandIcon() {
  return (
    <div>
      <Accordion style={{
        background: '#272727',
        marginBottom: 10,
        borderRadius: 10, alignItems: 'center', justifyContent: 'space-between',
      }}>
        <AccordionSummary
          expandIcon={<FaChevronDown size={22} color={'white'} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography style={{ color: 'white', fontSize: 18 }}>What is Netflix?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ color: 'white', fontSize: 14 }}>
            Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{
        background: '#272727',
        marginBottom: 10,
        borderRadius: 10, alignItems: 'center', justifyContent: 'space-between',
      }}>
        <AccordionSummary
          expandIcon={<FaChevronDown size={22} color={'white'} />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography style={{ color: 'white', fontSize: 18 }}>How much does Netflix cost? </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ color: 'white', fontSize: 16 }}>
            Watch Netflix on your smartphone,tablet,Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs 250 to Rs 1,100 a month. No extracosts, no contracts.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{
        background: '#272727',
        marginBottom: 10,
        borderRadius: 10, alignItems: 'center', justifyContent: 'space-between',
      }}>
        <AccordionSummary
          expandIcon={<FaChevronDown size={22} color={'white'} />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography style={{ color: 'white', fontSize: 18 }}>How do I cancel?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ color: 'white', fontSize: 16 }}>
            Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees - start or stop your account anytime.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{
        background: '#272727',
        marginBottom: 10,
        borderRadius: 10, alignItems: 'center', justifyContent: 'space-between',
      }}>
        <AccordionSummary
          expandIcon={<FaChevronDown size={22} color={'white'} />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography style={{ color: 'white', fontSize: 18 }}>What can I watch on Netflix?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ color: 'white', fontSize: 16 }}>
            Netflix has an exntensive library of feature films, documentaries, TV shows,anime,award-winning Netflix originals, and more. Watch as much as you want, anytime you want
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}