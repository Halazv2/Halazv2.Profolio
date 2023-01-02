import useSWR from "swr";

export default function useGetProjects() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const {data, error} = useSWR("https://api.github.com/users/halazv2/repos", fetcher);
  return {
    projects: data,
    isLoading: !error && !data,
    isError: error,
  };
}
