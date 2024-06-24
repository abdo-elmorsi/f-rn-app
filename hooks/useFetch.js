// useFetch.js
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "@/utils/api.js";

const useFetch = (queryKey, url, options = {}) => {
    const { data, error, isLoading } = useQuery({
        queryKey: [queryKey, url],
        queryFn: () => fetchData(url),
        ...options,
    });

    return { data, error, isLoading };
};

export default useFetch;
