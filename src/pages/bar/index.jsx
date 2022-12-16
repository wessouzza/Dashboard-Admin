import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarCHart";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";

const BarGraphic = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="BARCHART" subtitle="This is your graphics." />
      <Box height="75vh" border={`1px solid ${colors.grey[600]}`} borderRadius="18px" >
        <BarChart />
      </Box>
    </Box>
  );
};

export default BarGraphic;
