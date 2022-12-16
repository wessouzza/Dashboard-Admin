import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";

const Line = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="LINE CHART" subtitle="This is your line chart." />
      <Box height="75vh" border={`1px solid ${colors.grey[600]}`} borderRadius="18px" >
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
