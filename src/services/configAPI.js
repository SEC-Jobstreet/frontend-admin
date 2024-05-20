import axiosConfig from "./axiosConfig";

export const getJobList = async (data) => {
  try {
    return await axiosConfig.get(
      `${process.env.REACT_APP_JOB_SERVICE}/api/v1/jobs_by_admin?page_id=${data.pageId}&page_size=${data.pageSize}&status=${data.status}`,
      data
    );
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const changeJobStatus = async ({ job_id, status }) => {
  try {
    return await axiosConfig.post(
      `${process.env.REACT_APP_JOB_SERVICE}/api/v1/change_job_status`,
      { id: job_id, status }
    );
  } catch (error) {
    console.log(error);
    return error;
  }
};
