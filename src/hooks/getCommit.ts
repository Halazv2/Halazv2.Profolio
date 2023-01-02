import useSWR from "swr";

export default function getCommitHistory() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  // get commit history from github
  const {data, error} = useSWR("https://api.github.com/users/halazv2/events", fetcher);
  // return data and error
  return {
    commitHistory: data,
    isLoading: !error && !data,
    isError: error,
  };
}

