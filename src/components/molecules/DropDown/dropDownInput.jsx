/* eslint-disable react/prop-types */
import { Controller } from "react-hook-form";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectSmall({ control }) {

  return (
    <FormControl sx={{ p: 1.5, minWidth: 500 }} size="small">
      <InputLabel id="demo-select-small-label" sx={{ml: 2, p: 1.5}}>
        Dropdown Title
      </InputLabel>
      <Controller
        name="dropdownSelection"
        control={control}
        defaultValue="defaultValue"
        render={({ field }) => (
     <Select
            labelId="dropdown-label"
            id="dropdown"
            {...field}
            value={field.value}
            onChange={(e) => field.onChange(e.target.value)}
            sx={{ m: 3, mt: 2 }}
          >
        <MenuItem value="defaultValue"><em>---</em></MenuItem>
        <MenuItem value="Option 1">Option 1</MenuItem>
        <MenuItem value="Option 2">Option 2</MenuItem>
        <MenuItem value="Option 3">Option 3</MenuItem>
      </Select>
       )}
      />
    </FormControl>
  );
}
