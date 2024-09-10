import { StyledInput } from "../../styles/form/form.styles";

const WeekFilterInput = ({ weekNumber, handleWeekFilterChange }) => (
  <StyledInput
    className="week-filter"
    onWheel={(e) => e.target.blur()}
    type="number"
    value={weekNumber || ""}
    inputMode="numeric"
    placeholder="filter by week no"
    onChange={(event) => handleWeekFilterChange(event.target.value)}
  />
);

export default WeekFilterInput;
