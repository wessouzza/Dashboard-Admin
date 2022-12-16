import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeoChart from "../../components/GeoChart";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";

const Geo = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="GEOGRAPHYC CHART" subtitle="Your geo charts" />
      <Box height="75vh" border={`1px solid ${colors.grey[600]}`} borderRadius="18px" >
        <GeoChart />
      </Box>
    </Box>
  );
};

export default Geo;
