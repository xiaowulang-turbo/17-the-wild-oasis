import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export default function useBookings() {
  const [searchParams] = useSearchParams();

  // 1. Filter
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : {
          field: "status",
          value: filterValue,
        };

  // 2. Sort
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = {
    field,
    direction,
  };

  // 3. Pagination
  const page = Number(searchParams.get("page")) || 1;

  const {
    isLoading,
    // data might be undefined in the first render
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    // kind of dependencies, when it changes, the query is refetched
    queryKey: ["bookings", filter, sortBy, page],
    // receives a function that returns the data
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  return { isLoading, bookings, count, error };
}
