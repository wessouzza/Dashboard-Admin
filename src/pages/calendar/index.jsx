import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvent, setCurrentEvent] = useState([]);

  const handleDateclick = (selected) => {
    const title = prompt("Insert a new event.");
    const calendarApi = selected.view.calendar;
    calendarApi.unselected();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = () => {
    if (window.confirm(`Delete the event ${selected.event.title}`)) {
      selected.event.remove;
    }
  };

  return (
    <Box m="20px">
      <Header title="CALENDAR" subtitle="Full calendar" />
      <Box display="flex" justifyContent="space-between">
        {/*CALENDAR EVENTS*/}
        <Box
          flex=" 1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="15px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvent.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundcolor: colors.blueAccent[400],
                  margin: "10px 0",
                  borderRadius: "7px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        <Box>
            <FullCalendar></FullCalendar>
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
