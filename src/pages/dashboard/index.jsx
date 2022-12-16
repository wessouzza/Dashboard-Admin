import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import GeoChart from "../../components/GeoChart";
import StatusBox from "../../components/StatusBox";
import ProgressCircle from "../../components/ProgressCircle";

import Header from "../../components/Header";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="This is your dashboard" />
        <Box>
          <Button
            sx={{
              backgroundColor: colors.greenAccent[600],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download data
          </Button>
        </Box>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius="15px"
        >
          <StatusBox
            title="6,320"
            subtitle="Sales"
            progress="0.61"
            increase="+11%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.blueAccent[300], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius="15px"
        >
          <StatusBox
            title="6,320"
            subtitle="New clients"
            progress="0.33"
            increase="+33%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.blueAccent[300], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius="15px"
        >
          <StatusBox
            title="6,320"
            subtitle="Emails"
            progress="0.73"
            increase="+11%"
            icon={
              <EmailIcon
                sx={{ color: colors.blueAccent[300], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius="15px"
        >
          <StatusBox
            title="6,320"
            subtitle="Traffic received"
            progress="0.43"
            increase="21%"
            icon={
              <EmailIcon
                sx={{ color: colors.blueAccent[300], fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          borderRadius="15px"
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.primary[100]}
              >
                Revenue
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.blueAccent[300] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="240px" mt="-22px">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        {/*TRANSACTIONS*/}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
          borderRadius="15px"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            color={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="500">
              Recent transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  variant="h5"
                  color={colors.blueAccent[500]}
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[300]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.blueAccent[600]}
                p="10px"
                borderRadius="9px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          borderRadius="15px"
          p="15px"
        >
          <Typography variant="h5" color={colors.grey[100]} fontWeight="600">
            Map overview
          </Typography>
          <Box height="240px">
            <GeoChart isDashboard={true}/>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          borderRadius="15px"
          p="15px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            color={colors.grey[100]}
          >
            Reputation
          </Typography>
          <Box display="flex" flexDirection="column" mt="39px" alignItems="center">
            <ProgressCircle size="170" progress="0.85"/>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          borderRadius="15px"
          p="15px"
        >
          <Typography variant="h5" color={colors.grey[100]} fontWeight="600">
            Analytics
          </Typography>
          <Box height="270px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
