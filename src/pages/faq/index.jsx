import { Box, useTheme, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import Header from "../../components/Header";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const Faq = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently asked questions." />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            This is a question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A expressão Lorem ipsum em design gráfico e editoração é um texto
            padrão em latim utilizado na produção gráfica para preencher os
            espaços de texto em publicações para testar e ajustar aspectos
            visuais antes de utilizar conteúdo real.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            This is a question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A expressão Lorem ipsum em design gráfico e editoração é um texto
            padrão em latim utilizado na produção gráfica para preencher os
            espaços de texto em publicações para testar e ajustar aspectos
            visuais antes de utilizar conteúdo real.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            This is other question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A expressão Lorem ipsum em design gráfico e editoração é um texto
            padrão em latim utilizado na produção gráfica para preencher os
            espaços de texto em publicações para testar e ajustar aspectos
            visuais antes de utilizar conteúdo real.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            One more!
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A expressão Lorem ipsum em design gráfico e editoração é um texto
            padrão em latim utilizado na produção gráfica para preencher os
            espaços.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Jesus!! Another question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A expressão Lorem ipsum em design gráfico e editoração é um texto
            padrão em latim utilizado na produção gráfica para preencher os
            espaços de texto em publicações para testar e ajustar aspectos
            visuais antes de utilizar conteúdo real.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Faq;
