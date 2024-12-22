import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export default function useBookings() {
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : {
          field: "status",
          value: filterValue,
        };

  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    // dependencies, when it changes, the query is refetched
    queryKey: ["bookings", filter],
    // receives a function that returns the data
    queryFn: () => getBookings({ filter }),
  });

  return { isLoading, bookings, error };
}
