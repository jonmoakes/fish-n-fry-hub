import { useEffect, useState } from "react";
import { getISOWeek } from "date-fns";

import useIncomeVariables from "./use-income-variables";

const useFilterByWeekUseEffect = (weekNumber) => {
  const { data } = useIncomeVariables();
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const filterDataByWeek = () => {
      const filtered = data.filter((entry) => {
        const entryWeekNumber = getISOWeek(
          entry.createdAtAsDateObjectForSearching
        );

        return entryWeekNumber === Number(weekNumber);
      });
      setFilteredData(filtered);
    };

    if (weekNumber) {
      filterDataByWeek();
    } else {
      setFilteredData(data); // Reset to original data if weekNumber is empty
    }
  }, [weekNumber, data]);

  return { filteredData };
};

export default useFilterByWeekUseEffect;
