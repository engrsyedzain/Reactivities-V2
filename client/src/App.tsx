import { List, ListItem, ListItemText, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [reactiviies, setReactivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios
      .get<Activity[]>("https://localhost:5001/api/activities")
      .then((response) => setReactivities(response.data))
      .catch((error) => console.error("Error fetching activities:", error));
  }, []);

  return (
    <>
      <Typography variant="h3">Reactivities</Typography>
      <List>
        {reactiviies.map((activity) => (
          <ListItem key={activity.id}>
            <ListItemText>{activity.title}</ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default App;
