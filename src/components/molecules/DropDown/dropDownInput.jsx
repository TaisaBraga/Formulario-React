/* eslint-disable react/prop-types */
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectSmall({ register }) {


  return (
    <FormControl sx={{ p: 1, minWidth: 450 }} size="small">
      <InputLabel id="demo-select-small-label" sx={{ml: 2 }}>
        Options
      </InputLabel>
      <Select
        sx={{ m: 3, mt: 5 }}
        labelId="dropdown-label"
        id="dropdown"
        defaultValue=""
        label="Option"
        {...register("dropdownSelection")}
      >
        <MenuItem >
          <em>None</em>
        </MenuItem>
        <MenuItem value="Option 1">Option 1</MenuItem>
        <MenuItem value="Option 2">Option 2</MenuItem>
        <MenuItem value="Option 3">Option 3</MenuItem>
      </Select>
    </FormControl>
  );
}
