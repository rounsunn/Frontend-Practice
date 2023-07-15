interface FormProps {
  userId: string;
}

const JobListing: React.FC<FormProps> = ({ userId }) => {
  return <div>{userId}</div>;
};

export default JobListing;
