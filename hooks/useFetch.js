// useFetch.js
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "@/utils/api.js";

const useFetch = (queryKey, url) => {
    const { data, error, isLoading } = useQuery([queryKey, url], () =>
        fetchData(url)
    );

    return { data, error, isLoading };
};

export default useFetch;
