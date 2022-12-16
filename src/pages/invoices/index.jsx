import { Box, useTheme, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "Id" },
    {
      field: "name",
      headerName: "Name",
      cellClassName: "name-columns--cell",
      flex: 1,
    },
    { field: "phone", headerName: "Phone number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    {
        field: "cost",
        headerName:"Cost",
        flex: 1,
        renderCell: (params) => (
            <Typography color={colors.greenAccent[500]}>
                ${params.row.cost}
            </Typography>
        )
    },
    {
        field: "date",
        headerName: "Date",
        flex: 1
    },
  ];

  return (
    <Box m="20px">
      <Header title="INVOICES" subtitle="This is your balances" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-columns--cell": {
            color: colors.blueAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[900],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: colors.blueAccent[900],
            borderTop: "none",
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
      </Box>
    </Box>
  );
};

export default Invoices;
