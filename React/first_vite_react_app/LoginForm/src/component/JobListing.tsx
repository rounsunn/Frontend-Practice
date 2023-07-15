import { useState, useEffect } from "react";
import api from "../api/api";

interface FormProps {
  userId: string;
}

const JobListing: React.FC<FormProps> = ({ userId }) => {
  const [jobLists, setJobLists] = useState("");

  useEffect(() => {
    const getJobList = async (userId: string) => {
      try {
        const response = await api.get("/v4/gigs/postings/list", {
          params: {
            limit: 10,
            offset: 0,
            is_precal_done: 1,
            scope: "recomm",
          },
          headers: {
            employee_id: userId,
          },
        });
        console.log(response);
        setJobLists(response.data);
      } catch (error) {
        console.error("Error in getJobList API:", error);
        throw error;
      }
    };
    getJobList(userId);
  }, [userId]);

  return <div>{jobLists}</div>;
};

export default JobListing;
